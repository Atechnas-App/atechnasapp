const { Router } = require("express");
const { Op, } = require("sequelize");
const { User, Technology, Category } = require("../db");
const router = Router();

router.get("/search", async (req, res) => {
  // Recibo un array de strings las cuales van ser las palabras filtro
  try {
    const { query } = req.query;
    // const categorias = ["developer", "design", "marketing", "recruiter"];
    // const toLowerQuery = query.toLowerCase();

    // Categories filter
    const filteredByCategory = await Category.findAll({
      where: { category: { [Op.iLike]: "%" + query + "%" } },
      include: [{ model: User }],
    });

    const dbSearch = categorias.includes(query)
      ? {
        where: {
          category:
            { [Op.iLike]: "%" + query + "%" },
        },
      }
      : {
        where: {
          [Op.or]: [
            {
              name: { [Op.iLike]: "%" + query + "%" },
            },
            {
              lastName: { [Op.iLike]: "%" + query + "%" },
            },
            {
              email: { [Op.iLike]: "%" + query + "%" },
            },
          ],
        },
      };

    const filtro = await User.findAll(dbSearch);

    res.status(200).send(filtro);
  } catch (error) {
    console.log(error.message);
    console.log(error.parameters);
    // console.log(Model.rawAttributes.category);
  }
});


router.get('/prueba', async (req, res) => {
  try {
    const { buscar } = req.query

    const resultadoUser = await User.findAll(
      {
        where: {
          [Op.or]: [
            { name: { [Op.iLike]: `%${buscar}%` } },
            { lastName: { [Op.iLike]: `%${buscar}%` } },
            { '$technologies.technology$': { [Op.iLike]: `%${buscar}%` } },
            { '$categories.category$': { [Op.iLike]: `%${buscar}%` } },
            { '$languages.languages$': { [Op.iLike]: `%${buscar}%` } },
          ]
        },
        include: {
          all: true,
        }

      })

    res.status(200).send(resultadoUser)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
