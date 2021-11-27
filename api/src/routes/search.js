const { Router } = require("express");
const { Op } = require("sequelize");
const { User } = require("../db");
const router = Router();

router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const categorias = ["developer", "design", "marketing", "recruiter"];
    const toLowerQuery = query.toLowerCase();
    const dbSearch = categorias.includes(toLowerQuery)
      ? {
          where: {
            category: { [Op.iLike]: toLowerQuery },
          },
        }
      : {
          where: {
            [Op.or]: [
              {
                name: { [Op.iLike]: toLowerQuery },
              },
              {
                lastName: { [Op.iLike]: toLowerQuery },
              },
              {
                email: { [Op.iLike]: toLowerQuery },
              },
            ],
          },
        };

    const filtro = await User.findAll(dbSearch);

    res.status(200).send(filtro);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;