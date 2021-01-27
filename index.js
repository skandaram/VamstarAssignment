const got = require('got');
const cheerio = require('cheerio');

// Constants
const BODY_SELECTOR = '#block-views-block-view-noticia-pbh-block-5 .item';
const BLOCK_SELECTOR = '.views-field';

const main = async () => {
  // "url" holds the link to the page we want to scrape
  const url = 'https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';

  // Using "got" library to fetch source of page
  const res = await got(url);

  // We're going to be using "cheerio" to parse the response body and manipulate DOM
  const $ = cheerio.load(res.body);

  // Dividing the DOM into three blocks of data, of which we need only the last two
  const blocks = $(BODY_SELECTOR).find(BLOCK_SELECTOR);
  const metadataBlock = $(blocks[1]);
  const tableBlock = $(blocks[2]);

  console.log('Blocks:', {
    metadataBlock: metadataBlock.html(),
    tableBlock: tableBlock.html(),
  });
};

main();
