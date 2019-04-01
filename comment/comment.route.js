const CommentController     = require('./comment.controller')
const express               = require('express');
const router                = express.Router();

router.get('/', CommentController.index);
router.post('/', CommentController.create);
router.get('/:id', CommentController.show);
router.put('/:id', CommentController.update);
router.delete('/:id', CommentController.remove);

router.get('/article/:id', CommentController.articlesComment);

module.exports = router