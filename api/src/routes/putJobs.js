const { Router } = require("express");
const { User, Post, Review } = require("../db");

const router = Router();

// router.put("/editJobs/:id", async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         console.log(id);
//         const { title, about, image, price, paused } = req.body;
//         console.log(req.body);
//         const getJob = await Post.findOne({
//             where: { id: id },
//               include: [{ model: User }, { model: Review }],
//         });
//         console.log(getJob);
//         if (title || about || image || price || paused) {
//             getJob.title = title ? title : getJob.title;
//             getJob.about = about ? about : getJob.about;
//             getJob.image = image ? image : getJob.image;
//             getJob.price = price ? price : getJob.price;
//             getJob.paused = paused ? paused : getJob.paused;
//         }
//         await getJob.save();
//         res.status(200).send("Trabajo modificado");
//     } catch (error) {
//         next(error);
//     }
// });
