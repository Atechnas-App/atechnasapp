const { Router } = require("express");
const { Op, where } = require("sequelize");
<<<<<<< HEAD
const { User, Category, Technology, Language } = require("../db");
=======
const { User, Category, Language, Technology } = require("../db");
>>>>>>> 29a16bb0cc06096895f154edbc4c49bd1a03b30f
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
<<<<<<< HEAD
      include: [Category, Language, Technology],
=======
       include: [Category, Language, Technology], 
>>>>>>> 29a16bb0cc06096895f154edbc4c49bd1a03b30f

      limit: size,
      offset: page * size,
      subQuery: false,
    });
    res.send(users);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
