const { Router } = require("express");
const { Post ,User} = require("../db");
const router = require("./categoryFilter");

router.delete("/deletePost", async (req, res) => {
    // Esta borrando usuarios ya que no está la ruta para crear post
  try {
    const { id } = req.query;
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Deleted");
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});


module.exports = router;