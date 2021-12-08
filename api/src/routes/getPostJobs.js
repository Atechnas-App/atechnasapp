const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Post, Review } = require("../db");

const router = Router();

router.get("/getJobs/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getJobs = await Post.findAll({ where: { userId: id },
        include: [{ model: User },  {model : Review}] });
        
    res.status(200).send(getJobs);
  } catch (err) {
    next(err);
  }
});

router.get("/getJobs/detail/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const getJob = await Post.findOne({ where: { id: id },
    include: [{model: User}, {model: Review}]});

    res.status(200).send(getJob);
  } catch (err) {
    next(err)
  }
})

router.put("/editJobs/:id", async (req, res, next) => {
  try {
      const { id } = req.params;
      const { title, about, image, price, paused } = req.body;
      let getJob = await Post.findOne({
          where: { id: id },
            include: [{ model: User }, { model: Review }],
      });
      if (title || about || image || price || paused) {
          getJob.title = title ? title : getJob.title;
          getJob.about = about ? about : getJob.about;
          getJob.image = image ? image : getJob.image;
          getJob.price = price ? price : getJob.price;
          getJob.paused = paused ? paused : getJob.paused;
      }
      await getJob.save();
      res.status(200).send("Trabajo modificado");
  } catch (error) {
      next(error);
  }
});

module.exports = router;