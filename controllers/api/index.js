const router = require('express').Router();
const flashcardRoutes = require('./flashcardRoutes');
const userRoutes = require('./userRoutes');

router.use('/flashcards', flashcardRoutes);
router.use('/users', userRoutes);

module.exports = router;
