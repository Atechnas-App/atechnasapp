const { Router } = require("express");
const { Op, } = require("sequelize");
const { User, Technology, Category } = require("../db");
const router = Router();

router.get("/search", async (req, res) => {
  try {
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);

    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber;
    }
    let size = 15;
    if (!Number.isNaN(sizeAsNumber)) {
      if (sizeAsNumber > 0 && sizeAsNumber < 15) {
        size = sizeAsNumber;
      }
    }
    const { searcher } = req.query;

    // Pagination : this will give an object with properties :
    //  count{total of rows}  and rows{{data users},{data users},{data users}}
    const users = await User.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${searcher}%` } },
          { lastName: { [Op.iLike]: `%${searcher}%` } },
          { description: { [Op.iLike]: `%${searcher}%` } },
          { "$categories.category$": { [Op.iLike]: `%${searcher}%` } },
          { "$languages.languages$": { [Op.iLike]: `%${searcher}%` } },
          { "$technologies.technology$": { [Op.iLike]: `%${searcher}%` } },
        ],
      },
      include: { all: true },

      limit: size,
      offset: page * size,
      subQuery: false,
    });
    res.send(users);
  } catch (error) {
    console.log(error.message);
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
