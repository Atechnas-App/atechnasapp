const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Language } = require("../db");

const router = Router();

router.get("/language", async (req, res, next) => {
  try {
    const languages = await Language.findAll({ include: [User] });
    res.status(200).send(languages);
  } catch (err) {
    next(err);
  }
});

module.exports = router;