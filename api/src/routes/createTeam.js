const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Team } = require("../db");
const router = Router();

router.post("/newteam", async (req, res) => {
  try {
    const { name, description, image, username } = req.body;
    const validaTeam = await Team.findOne({ where: { name: name } });
    const createTeam = await Team.create({ name, description, image });
    const busquedauser = await User.findOne({
      where: { name: username },
    });
    if (!validaTeam) {
      await busquedauser.addTeam(createTeam);
    } else {
      res.status(404).send("el nombre del equipo ya se encuentra en uso");
    }

    const resultado = await User.findOne({
      where: { name: username },
      include: Team,
    });

    res.status(200).send(resultado);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
