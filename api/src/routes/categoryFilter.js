const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Technology } = require("../db");


const router = Router();

router.get("/filterByCategory", async (req, res, next) => {
  try {
    const {categories} = req.body;
    const filteredUser = await User.findAll({
      include: [Technology],
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
