const { OPCOES } = require ("./opcao-mock");

const ITENSPRODUTO = [
  {
    id: 1,
    descricao: 'item 1',
    opcoes: OPCOES[0]
  },
  {
    id: 2,
    descricao: 'item 2',
    opcoes: OPCOES[1]
  }
]

exports.ITENSPRODUTO = ITENSPRODUTO;