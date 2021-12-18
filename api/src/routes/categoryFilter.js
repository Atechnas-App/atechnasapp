const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Category, Language, Technology } = require("../db");

const router = Router();

router.get("/categories", async (req, res, next) => {
  try {
    const categories = await Category.findAll({ include: [User] });
    res.status(200).send(categories);
  } catch (err) {
    next(err);
  }
});
// va a recibir un string de variables, cambiar a array?
router.get("/filterByCategory", async (req, res, next) => {
  try {
    // queremos todos los usuarios que tengan determinadas categoria
    // filtrar esos usuarios por tecnologias
    // ordenar por calificacion
    //
    const { categories } = req.query;
    const cat = categories.split("-");
    /* console.log("soy un array", cat); */
    const filteredByCategory = await User.findAll({
      where: {
        "$categories.category$": cat,
      },
      include: [Category, Language, Technology],
      // limit:3,
    });
    res.status(200).send(filteredByCategory);
  } catch (err) {
    next(err);
  }
});

router.get("/bestDevelopers", async (req, res, next) => {

  try {
    const developers = await User.findAll({
      where: {
        "$categories.category$": "Developer",
      },
      include: [Category, Language, Technology],
      limit: 3,
      subQuery: false,
    });
    res.status(200).send(developers);
  } catch (err) {
    next(err);
  }
});
router.get("/bestDesign", async (req, res, next) => {
  try {
    const developers = await User.findAll({
      where: {
        "$categories.category$": "Designer",
      },
      include: [Category, Language, Technology],
      limit: 3,
      subQuery: false,
    });
    res.status(200).send(developers);
  } catch (err) {
    next(err);
  }
});
router.get("/bestMarketing", async (req, res, next) => {
  try {
    const developers = await User.findAll({
      where: {
        "$categories.category$": "Marketing",
      },
      include: [Category, Language, Technology],
      limit: 3,
      subQuery: false,
    });
    res.status(200).send(developers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
