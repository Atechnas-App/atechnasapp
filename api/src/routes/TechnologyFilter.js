const { Router } = require("express");
const { User, Technology } = require("../db");
const router = Router();

router.get("/getTechnologies", async (req, res, next) => {
  // no anda
  try {
    const allTechnologies = await Technology.findAll({ 
      include: User, 
    });
    res.status(200).send(allTechnologies);
  } catch (err) {
    next(err);
  }
});

router.get("/filterByTechnology", async (req, res, next) => {
  try { 
    const {technologies} = req.query;
    const tech = technologies.split('-')

    const filteredByTechnology = await Technology.findAll({
      
        where: {technology: tech},
        include: [
        {model: User}],
    })
      res.status(200).send(filteredByTechnology);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
