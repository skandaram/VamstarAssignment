// Constants
const URL_FILE_PATH = './urls.txt';
const BODY_SELECTOR = '#block-views-block-view-noticia-pbh-block-5 .item';
const BLOCK_SELECTOR = '.views-field';
const FIELD_SELECTOR = '.lbl-licitacao';
const PUBLICATION_DATE_LABEL = 'DATA DA PUBLICAÇÃO: ';
const BIDDING_DATE_LABEL = 'DATA DA LICITAÇÃO: ';
const URL_REGEX = '((http|https)://)(www.)?'
              + '[a-zA-Z0-9@:%._\\+~#?&//=]'
              + '{2,256}\\.[a-z]'
              + '{2,6}\\b([-a-zA-Z0-9@:%'
              + '._\\+~#?&//=]*)';

module.exports = {
  URL_FILE_PATH,
  BODY_SELECTOR,
  BLOCK_SELECTOR,
  FIELD_SELECTOR,
  PUBLICATION_DATE_LABEL,
  BIDDING_DATE_LABEL,
  URL_REGEX,
};
