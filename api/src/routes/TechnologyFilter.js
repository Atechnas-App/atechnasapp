const { Router } = require("express");
const { User, Technology } = require("../db");
const router = Router();

router.get("/getTechnologies", async (req, res, next) => {
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
    const technology = req.body;
    const getTechnologies = await User.findAll({
      include: [Technology],
      where: {
        technology: {
          [Op.iLike]: "%"+technology+"%",
        },
      },
    });
    res.status(200).send(getTechnologies);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
