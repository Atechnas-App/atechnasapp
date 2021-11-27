const { Router } = require("express");
const { Op } = require("sequelize");
const { User } = require("../db");
const router = Router();

router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const categorias = ["developer", "design", "marketing", "recruiter"];
    // const toLowerQuery = query.toLowerCase();
    const dbSearch = categorias.includes(query.toLowerCase())
      ? {
          where: {
            category: query.toLowerCase(),
          },
        }
      : {
          where: {
            [Op.or]: [
              {
                name: { [Op.substring]: query.toLowerCase() },
              },
              {
                lastName: { [Op.substring]: query.toLowerCase() },
              },
              {
                email: { [Op.substring]: query.toLowerCase() },
              },
            ],
          },
        };

    const filtro = await User.findAll(dbSearch);

    res.status(200).send(filtro);
  } catch (error) {
    console.log(error.message);
    console.log(error.parameters);
    // console.log(Model.rawAttributes.category);
  }
});

module.exports = router;