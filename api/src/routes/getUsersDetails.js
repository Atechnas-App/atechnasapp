const { Router } = require("express");
const { User, Category, Technology, Post, Language } = require("../db");

const router = Router();

router.get("/details/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dbSearchById = await User.findOne({
      where: { id: id },
      include: [{ model: Category }, { model: Technology }, {model : Language}],
    });
    res.status(200).send(dbSearchById);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
