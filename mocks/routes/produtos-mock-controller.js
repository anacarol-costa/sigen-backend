// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

const { PRODUTOS } = require("../utils/produto-mock");
  
  module.exports = [
    {
      id: "obter-produtos", 
      url: "/api/produtos", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: {
            status: 200, // status to send
            body: PRODUTOS, // body to send
          },
        },
        {
          id: "error", // id of the variant
          response: {
            status: 400, // status to send
            body: {
              // body to send
              message: "Erro ao obter produtos",
            },
          },
        },
      ],
    },

    {
      id: "obter-produto-por-id", // id of the route
      url: "/api/produtos/:id", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: (req, res) => {
            const produtoId = req.params.id;
            const produto = PRODUTOS.find((produto) => produto.id === Number(produtoId));
            if (produto) {
              res.status(200);
              res.send(produto);
            } else {
              res.status(404);
              res.send({
                message: "Produto não encontrado.",
              });
            }
          },
        },
      ],
    },

  ];
  