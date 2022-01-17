// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

const { CATEGORIAS } = require("../utils/categoria-mock");
  
  module.exports = [
    {
      id: "obter-categorias", 
      url: "/api/categorias", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: {
            status: 200, // status to send
            body: CATEGORIAS, // body to send
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
      id: "obter-categoria-por-id", // id of the route
      url: "/api/categorias/:id", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: (req, res) => {
            const categoriaId = req.params.id;
            const categoria = CATEGORIAS.find((categoria) => categoria.id === Number(categoriaId));
            if (categoria) {
              res.status(200);
              res.send(categoria);
            } else {
              res.status(404);
              res.send({
                message: "Categoria não encontrado.",
              });
            }
          },
        },
      ],
    },

  ];
  