const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Technology, Category } = require("../db");


const router = Router();

router.get('/categories', async (req, res, next) => {
  try {
    const categories = await Category.findAll({ include: [User] })
    res.status(200).send(categories)
  } catch (err) {
    next(err)
  }
})

router.get("/filterByCategory", async (req, res, next) => {
  try {
    // queremos todos los usuarios que tengan determinadas categoria
    // filtrar esos usuarios por tecnologias
    // ordenar por calificacion 
    // 
    const {categories} = req.query;
    const filteredByCategory = await Category.findAll({
      
        where: {category: categories},
        include: [
        {model: User}],
    })
      res.status(200).send(filteredByCategory[0].users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
