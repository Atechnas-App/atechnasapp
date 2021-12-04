const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Post, Review } = require("../db");

const router = Router();

router.get("/getJobs/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getJobs = await Post.findAll({ where: { id: id },
        include: [{ model: User },  {model : Review}] });
        
    res.status(200).send(getJobs);
  } catch (err) {
    next(err);
  }
});

module.exports = router;