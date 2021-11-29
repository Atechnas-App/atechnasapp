const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Technology, Category } = require("../db");

const router = Router();

router.get("/categories", async (req, res, next) => {
  try {
    const categories = await Category.findAll({ include: [User] });
    res.status(200).send(categories);
  } catch (err) {
    next(err);
  }
});

router.get("/filterByCategory", async (req, res, next) => {
  try {
    const { categories } = req.body;
    const filteredUsers = await User.findAll({
      include: [{ model: Category, as: "categories" }, { model: Technology }],
      through: {
        where: {
          categories: {
            [Op.any]: categories,
          },
        },
      },
    });
    res.status(200).send(filteredUsers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
