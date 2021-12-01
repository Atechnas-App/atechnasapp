const { Router } = require("express");
const { Op, CITEXT } = require("sequelize");
const { User, Technology, Category, Language } = require("../db");

const router = Router();

router.put("/profile/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      company,
      phone,
      description,
      profilePicture,
      languages,
      technologies,
      categories,
      portfolio,
      location,
    } = req.body;

    const user = await User.findOne({
      where: { id: id },
      include: [
        { model: Technology },
        { model: Category },
        { model: Language },
      ],
    });
    console.log(user);
    if (
      company ||
      phone ||
      description ||
      profilePicture ||
      portfolio ||
      location
    ) {
      user.company = company ? company : user.company;
      user.phone = phone ? phone : user.phone;
      user.description = description ? description : user.description;
      user.profilePicture = profilePicture
        ? profilePicture
        : user.profilePicture;
      user.portfolio = portfolio ? portfolio : user.portfolio;
      user.location = location ? location : user.location;
    }
    if (categories) {
      let categoriesDb = await Category.findAll({
        where: { category: categories },
        include: [User],
      });
      user.setCategories(categoriesDb);
    }
    if (technologies) {
      let technologiesDb = await Technology.findAll({
        where: { technology: technologies },
        include: [User],
      });
      user.setTechnologies(technologiesDb);
    }
    if (languages) {
      let languagesDb = await Language.findAll({
        where: { languages: languages },
        include: [User],
      });
      user.setLanguages(languagesDb);
    }
    await user.save();
    // let newUser = await User.update(
    //     {  company,
    //         phone,
    //         description,
    //         profilePicture,
    //         portfolio,
    //         location},
    //         {where: {id: id}}
    // include: [{model: Technology},
    // {model: Category},
    // // {model: Language}
    // )

    // let technologiesDb = await Technology.findAll({
    //     where: { technology: technologies },
    //     include: [User]
    // })
    // let categoriesDb = await Category.findAll({
    //     where: { category: categories },
    //     include: [User]
    // })
    // let languagesDb = await Language.findAll({
    //     where: { language: languages },
    //     include: [User]
    // })
    // user.addCategory(categoriesDb)
    // user.addTechnology(technologiesDb)
    // newUser.addLanguage(languagesDb)
    res.status(200).send("Usuario modificado");
  } catch (error) {
    next(error);
  }
});

module.exports = router;