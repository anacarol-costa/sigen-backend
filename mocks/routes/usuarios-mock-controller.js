// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

const { USUARIOS } = require("../utils/usuario-mock");
  
  module.exports = [
    {
      id: "obter-usuarios", 
      url: "/api/usuarios", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: {
            status: 200, // status to send
            body: USUARIOS, // body to send
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
      id: "obter-usuarios-por-id", // id of the route
      url: "/api/usuarios/:id", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // id of the variant
          response: (req, res) => {
            const usuarioId = req.params.id;
            const usuario = USUARIOS.find((usuario) => usuario.id === Number(usuarioId));
            if (usuario) {
              res.status(200);
              res.send(usuario);
            } else {
              res.status(404);
              res.send({
                message: "Usuário não encontrado.",
              });
            }
          },
        },
      ],
    },

  ];
  