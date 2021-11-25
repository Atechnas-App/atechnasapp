const { Router } = require("express");
const { User } = require("../db");

const router = Router();

router.get("/getusers", async (req, res, next) => {
  //   const users = await User.findAll();
  //   console.log(users);

  //   res.status(200).send(users);

  try {
    //   Asks to Lucas
    // parsin the query parameters to  numbers
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);

    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber;
    }
    let size = 15;
    if (!Number.isNaN(sizeAsNumber)) {
      if (sizeAsNumber > 0 && sizeAsNumber < 15) {
        size = sizeAsNumber;
      }
    }

    // Pagination : this will give an object with properties :
    //  count{total of rows}  and rows{{data users},{data users},{data users}}
    const users = await User.findAndCountAll({
      limit: size,
      offset: page * size,
    });

    res.send({
      content: users.rows,
      totalPages: Math.ceil(users.count / size),
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
