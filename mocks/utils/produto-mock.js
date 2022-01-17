const { CATEGORIAS } = require( "./categoria-mock");
const { ITENSPRODUTO }  = require( "./itens-produto-mock");
const { UNIDADESDEMEDIDA } = require( "./uniade-medida-mock");

const PRODUTOS = [
    {
      id: 1,
      nome: 'Bolo no pote de morango',
      valorBase: 10.3,
      categoria: CATEGORIAS[0],
      unidadeMedida: UNIDADESDEMEDIDA[1],
      itensProduto: ITENSPRODUTO[0]
    },
    {
      id: 2,
      nome: 'Bolo de cenoura',
      valorBase: 25,
      categoria: CATEGORIAS[1],
      unidadeMedida: UNIDADESDEMEDIDA[0],
      itensProduto: ITENSPRODUTO[1]
    },
];
  
exports.PRODUTOS = PRODUTOS;
