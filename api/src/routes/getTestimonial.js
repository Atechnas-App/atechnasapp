const { Router } = require("express");
const { UserAdmin, Testimonial } = require("../db");

const router = Router();

router.get("/testimonial", async (req, res, next) => {
  try {
    const testimonial = await Testimonial.findAll({ include: [UserAdmin] });
    res.status(200).send(testimonial);
  } catch (err) {
    next(err);
  }
});

module.exports = router;