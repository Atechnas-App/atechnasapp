const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Technology } = require("../db");


const router = Router();

router.get("/filterByQualification", async (req, res, next) => {
  try {
    const {qualifications} = req.body;
    const filteredUsers = await User.findAll({
      include: [Technology],
      where: {
        qualification: {
            [Op.eq]: [qualifications], //en caso de que se quiera poner entre dos numeros cambiar eq a between y traer dos datos desde el body
        },
      },
      })
      res.status(200).send(filteredUsers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
