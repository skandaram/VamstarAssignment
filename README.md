# Vamstar Assignment

This repository contains the code for Vamstar Limited's assignment for the role of Jr. Software Engineer.

## Development

The code makes use of basic Node.js scripting and the following packages:

- [got](https://www.npmjs.com/package/got) (for loading the webpage)
- [cheerio](https://www.npmjs.com/package/cheerio) (for web scraping)
- [eslint](https://www.npmjs.com/package/eslint) (for maintaining code quality across the project)

## Building the Project

1. Install node.js and npm from https://nodejs.org/en/
2. `git clone https://github.com/skandaram/VamstarAssignment.git && cd VamstarAssignment`
3. `npm install`
4. `npm start`
5. 🎉

## Sample Output

```
URL: https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020
---
Publication Date: 30/10/2020
Bidding Date: 30/10/2020
Object: Registro de Preços pelo prazo de 12 meses, para aquisição de grampo galvanizado.
Links: http://portal6.pbh.gov.br/dom/iniciaEdicao.do?method=DetalheArtigo&pk=1235349
---------

URL: https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-041-2018
---
Publication Date: 29/08/2018
Bidding Date: 18/09/2018
Object: Registro de Preços para aquisição de materiais de consumo odontológico – guardanapo e álcool comum 96 graus.
Links: http://portal6.pbh.gov.br/dom/iniciaEdicao.do?method=DetalheArtigo&pk=1199512
http://prefeitura.pbh.gov.br/sites/default/files/estrutura-de-governo/saude/licitacoes/licitacoes_saude_pe_04118_edital.pdf
http://portal6.pbh.gov.br/dom/iniciaEdicao.do?method=DetalheArtigo&pk=1202235
---------

...
```
