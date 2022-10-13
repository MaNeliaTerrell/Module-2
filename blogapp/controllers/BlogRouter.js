const express = require('express')
const BlogModel = require('../models/BlogSchema')

const router = express.Router()


// GET: ALL BLOGS
router.get('/', async (req, res) => {
    try {
        const blogs = await BlogModel.find({})
        res.render('Blogs/Blogs', {blogs: blogs})
        // console.log(blogs);
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot Get')
    }
})


router.get('/new', async (req, res) => {
    try {
        res.render('Blogs/New')
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

// GET: Blog by ID

router.get('/:id', async (req, res) => {
    try {
        const blog = await BlogModel.findById(req.params.id)
        res.render('Blogs/Show', {blog: blog})
        // console.log(blog);
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot get')
    }
})

// POST: Create a New Blog

router.post("/", async (req, res) => {
    try {
      if (req.body.sponsored === "on") {
        req.body.sponsored = true;
      } else {
        req.body.sponsored = false;
      }
      const newBlog = await BlogModel.create(req.body);
      res.redirect("/blog");
    } catch (error) {
      console.log(error);
      res.status(403).send("Cannot create");
    }
  });

//  PUT:    UPDATE BY ID

router.put('/:id', async (req, res) => {
    console.log(req.body);
    try {
        const {id} = req.params
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})
        res.redirect(`/blog`)
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot update')
    }
})

// DELETE

router.delete ('/:id', async (req, res) => {
    try {
        await BlogModel.findByIdAndRemove(req.params.id)
        res.send('Blog Deleted')
    } catch (error) {
        console.log(error);
        res.status(403).send('Cannot delete')
    }
})


module.exports = router