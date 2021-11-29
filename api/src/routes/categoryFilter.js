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
    const {categories} = req.body;
    const filteredUser = await User.findAll({
      include: [Technology, Category],
      where: {
        category: {
          [Op.iLike]: categories,
        },
      },
      })
      res.status(200).send(filteredUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
