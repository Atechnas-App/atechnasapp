const { Router } = require("express");
const { Op } = require("sequelize");
const { User, Category, Language, Technology } = require("../db");
const router = Router();

router.get("/search", async (req, res) => {
  console.log("soy la query",req.query)
  
  try {
    const {searcher}=req.query
    const search = searcher.includes("-") ? searcher.split("-") : searcher;
    console.log("soy el search",search)
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);

    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber;
    }
    let size = 2;
    if (!Number.isNaN(sizeAsNumber)) {
      if (sizeAsNumber > 0 && sizeAsNumber < 2) {
        size = sizeAsNumber;
      }
    }
    const condition = Array.isArray(search) ?  {
      [Op.or]: [
        { "$technologies.technology$": search },
        { "$categories.category$": search },
      ],
    }
    :{
      [Op.or]: [
        { name: { [Op.iLike]: `%${search}%` } },
        { lastName: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } },
        { "$categories.category$": { [Op.iLike]: `%${search}%` } },
        { "$languages.languages$": { [Op.iLike]: `%${search}%` } },
        { "$technologies.technology$": { [Op.iLike]: `%${search}%` } },
      ],
    }

    // Pagination : this will give an object with properties :
    //  count{total of rows}  and rows{{data users},{data users},{data users}}
    const users = await User.findAndCountAll({
      where: condition ,
       include: [Category, Language, Technology], 

      limit: size,
      offset: page * size,
      subQuery: false,
    });
    // res.send(users);
    res.status(200).send({
      count:users.count,
      content : users.rows,
      totalPages : Math.ceil(users.count/ size)
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
