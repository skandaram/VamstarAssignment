const got = require('got');

const main = async () => {
  // "url" holds the link to the page we want to scrape
  const url = 'https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';

  // Using "got" library to fetch source of page
  const res = await got(url);
  console.log(res.body);
};

main();
