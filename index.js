// External Imports
const fs = require('fs');
const got = require('got');
const cheerio = require('cheerio');

// Internal Imports
const {
  URL_FILE_PATH,
  BODY_SELECTOR,
  BLOCK_SELECTOR,
  FIELD_SELECTOR,
  PUBLICATION_DATE_LABEL,
  BIDDING_DATE_LABEL,
  URL_REGEX,
} = require('./constants');

/**
 * "parseUrl" holds the main logic to load data from a page,
 * parse the DOM and retrieve necessary information
 *
 * @param {String} url
 */
const parseUrl = async (url) => {
  // Using "got" library to fetch source of page
  const res = await got(url);

  // We're going to be using "cheerio" to parse the response body and manipulate DOM
  const $ = cheerio.load(res.body);

  // Dividing the DOM into three blocks of data, of which we need only the last two
  const blocks = $(BODY_SELECTOR).find(BLOCK_SELECTOR);
  const metadataBlock = $(blocks[1]);
  const tableBlock = $(blocks[2]);

  // Use selectors to get text and manipulate strings to match pattern
  const fields = metadataBlock.find(FIELD_SELECTOR);
  const publicationDate = $(fields[0]).text().replace(PUBLICATION_DATE_LABEL, '');
  const biddingDate = $(fields[5]).text().replace(BIDDING_DATE_LABEL, '');
  const object = metadataBlock.find('span > p:nth-child(6)').text();

  // Extract "links" from table block and check against RegExp
  const links = [];
  const tableRows = tableBlock.find('tbody a').toArray();
  tableRows.forEach((row) => {
    const link = $(row).attr('href');
    if (new RegExp(URL_REGEX).test(link)) {
      links.push(link);
    }
  });

  // Compose "metadata" object to hold all important values
  const metadata = {
    publicationDate,
    biddingDate,
    object,
    links,
  };

  // Print "metadata" against URL passed
  console.log('URL:', url);
  console.log('---');
  console.log(`Publication Date: ${metadata.publicationDate}\nBidding Date: ${metadata.biddingDate}\nObject: ${metadata.object}\nLinks: ${metadata.links.join('\n')}`);
  console.log('---------\n');
};

// Load URLs from file, for multiple parsing
const urls = fs.readFileSync(URL_FILE_PATH).toString().split('\n');

// Call "parseUrl" for each URL that is found in the file
urls.forEach(parseUrl);

// Thanks for reading!
