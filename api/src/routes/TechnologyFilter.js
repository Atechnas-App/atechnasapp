const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Category, Language, Technology } = require("../db");
const router = Router();

router.get("/getTechnologies", async (req, res, next) => {
  try {
    const allTechnologies = await Technology.findAndCountAll({
      include: User,
    });
    res.status(200).send(allTechnologies);
  } catch (err) {
    next(err);
  }
});

router.get("/filterByTechnology", async (req, res, next) => {
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }
  let size = 2;
  if (!Number.isNaN(sizeAsNumber)) {
    if (sizeAsNumber > 0 && sizeAsNumber < 15) {
      size = sizeAsNumber;
    }
  }
  try {
    const { searchValues } = req.query;
    const arrayValues = searchValues.split("-");
    console.log("soy un array", arrayValues);

    const resultsQuery = await User.findAndCountAll({
      where: {
        [Op.or]: [
          { "$technologies.technology$": arrayValues },
          { "$categories.category$": arrayValues },
        ],
      },
      include: [Technology, Language, Category],
      limit: size,
      offset: page * size,
      subQuery: false,
    });
    // console.log(resultsQuery.length)
    res.status(200).send({
      count: resultsQuery.count,
      content: resultsQuery.rows,
      totalPages: Math.ceil(resultsQuery.count / size),
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
