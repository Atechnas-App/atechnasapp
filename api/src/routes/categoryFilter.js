const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Category, Technology } = require("../db");

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
    const cat = categories.split('-')
    const filteredByCategory = await Category.findAll({
      where: { category: cat },
      include: [{ model: User },
      {model: Technology}],
    });
    res.status(200).send(filteredByCategory);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
