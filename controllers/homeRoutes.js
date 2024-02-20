const router = require('express').Router();
const Deck = require('../models/Deck');
const User = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all decks
      const decksData = await Deck.findAll({
        attributes: ['id', 'name'],
      });
  
      // Serialize data
      const decks = decksData.map((deck) => deck.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        decks, 
        logged_in: req.session.logged_in 
      });
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

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Query the user based on the provided username and password
        const user = await User.findOne({
            where: {
                email,
                password,
            },
        });

        if (!user) {
            // User not found or invalid credentials
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        req.session.user_id = user.id;
        req.session.logged_in = true;

        // Redirect to the homepage or any other authenticated route
        res.redirect('/');
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
