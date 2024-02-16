const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
        console.log('homepage route is working')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login');
        console.log('login page route is working')
    } catch (err) {
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/flashcardedit', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        console.log('flashcard edit route is working')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/flashcarddisplay', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        console.log('flashcard display route is working')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/flashcarddeck', async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        console.log('flashcard deck route is working')
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
