const { Router } = require("express");
const { Op } = require("sequelize");
const { User } = require("../db");

const router = Router();

router.get("/search", async (req, res, next) => {
  const { query } = req.query;
  try {
    // const selectQuery = await User.findAll({
    //   attributes: [
    //     "name",
    //     [sequelize.fn("COUNT", sequelize.col("email")), "n_email"],
    //     "lastName",
    //   ],
    // });
    // Query SELECT where name or lastName equeal to query
    const selectQuery = await User.findAll({
      where: {
        [Op.or]: {
          name: { [Op.substring]: query.toLowerCase() },
          lastName: { [Op.substring]: query.toLowerCase() },
        },      
      },
    });

    // Query SELECT where premium is TRUE
    const isPremium = await User.findAll({
      where: {
        premium: {
          [Op.eq]: true,
        },
      },
    });

    // console.log(query.length);
    console.log(selectQuery.length);
    res.send(selectQuery);
  } catch (error) {
    console.log(error.message);
  }

  // async function getGamesDb(name) {
  //     const condition = name
  //       ? {
  //           where: { name: { [Op.substring]: name.toLowerCase() } },
  //           include: {
  //             model: Genre,
  //             attributes: ["name"],
  //             through: {
  //               attributes: [],
  //             },
  //           },
  //         }
  //       : {
  //           include: {
  //             model: Genre,
  //             attributes: ["name"],
  //             through: {
  //               attributes: [],
  //             },
  //           },
  //         };

  //     let resultQuery = JSON.parse(
  //       JSON.stringify(await Videogame.findAll(condition))
  //     );
  //     return resultQuery.map((g) => ({
  //       ...g,
  //       genresGame: g.genres.map((g) => g.name),
  //     }));
  //   }
});

module.exports = router;
