const {ArticleController} = require('../controller/index')
const express             = require('express');

const router              = express.Router();

router.get('/', ArticleController.index);
router.post('/', ArticleController.create);
router.get('/:id', ArticleController.show);
router.put('/:id', ArticleController.update);
router.delete('/:id', ArticleController.remove);

router.get('/user/authors/', ArticleController.articleWithAuthors);

module.exports = router