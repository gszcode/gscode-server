const Blog = require('../models/blogModel')

const createBlog = async (req, res) => {
  const { title, description, image } = req.body
  try {
    if (!title || !description || !image) throw new Error('Campos Incompletos')

    const newBlog = new Blog(req.body)
    await newBlog.save()

    return res.json({
      message: 'Blog Creado',
      success: true
    })
  } catch (error) {
    return res.json({ message: error.message, error: true })
  }
}

const updateBlog = async (req, res) => {
  const { id } = req.params

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true
    })

    return res.json({
      message: 'Blog Actualizado',
      success: true,
      updatedBlog
    })
  } catch (error) {
    return res.json({ message: error.message, error: true })
  }
}

const deleteBlog = async (req, res) => {
  const { id } = req.params

  try {
    await Blog.findByIdAndDelete(id)

    return res.json({
      message: 'Blog Eliminado',
      success: true
    })
  } catch (error) {
    return res.json({ message: error.message, error: true })
  }
}

const getBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({})

    return res.json({
      blogs: allBlogs,
      success: true
    })
  } catch (error) {
    return res.json({ message: error.message, error: true })
  }
}

const getBlog = async (req, res) => {
  const { id } = req.params

  try {
    const oneBlog = await Blog.findById(id)

    if (!oneBlog) throw new Error('Blog no Encontrado')

    return res.json({
      blog: oneBlog,
      success: true
    })
  } catch (error) {
    return res.json({ message: error.message, error: true })
  }
}

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogs,
  getBlog
}
