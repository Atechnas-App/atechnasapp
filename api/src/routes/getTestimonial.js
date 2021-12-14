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

router.delete("/deleteTestimonial", async (req,res,next) => {
  try {
    const {id} = req.query;
    await Testimonial.destroy({ where: {id:id}})
    res.status(200).send("Testimonio eliminado")
  } catch (error) {
    next(error)
  }
})
module.exports = router;