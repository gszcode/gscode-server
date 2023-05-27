const express = require('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')
const verifyRole = require('../middlewares/verifyRole')
const {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogs,
  getBlog
} = require('../controllers/blogCtrl')

router.post('/create-blog', verifyToken, verifyRole, createBlog)
router.put('/update-blog/:id', verifyToken, verifyRole, updateBlog)
router.delete('/delete-blog/:id', verifyToken, verifyRole, deleteBlog)
router.get('/get-blogs', getBlogs)
router.get('/get-blog/:id', getBlog)

module.exports = router
