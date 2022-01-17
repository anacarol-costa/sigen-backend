const { ENDERECOS } = require("./endereco-mock")

const USUARIOS = [
  {
    id: 1,
    email: 'nicolas@gmail.com', 
    senha: '0032ç--l32', 
    endereco: ENDERECOS[0],
    telefone: '(28) 98763-0982'
  },
  {
    id: 2,
    email: 'cage@gmail.com', 
    senha: '_98H*uea!', 
    endereco: ENDERECOS[1],
    telefone: '(12) 97400-0211'
  }
]

exports.USUARIOS = USUARIOS;