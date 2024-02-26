const router = require('express').Router();
const Deck = require('../models/Deck');
const User = require('../models/User');
const Flashcard = require('../models/Flashcard');
const withAuth = require('../utils/auth');


// <---------Decks--------->
router.get('/', withAuth, async (req, res) => {
    try {
      if (!req.session.logged_in) {
        // If not logged in, redirect to the login page
        return res.redirect('/login');
      }
      // Get all decks
      const decksData = await Deck.findAll({
        attributes: ['id', 'name'],
      });
  
      // Serialize data
      const decks = decksData.map((deck) => deck.get({ plain: true }));
  console.log(decks)
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        decks, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// <---------Flashcards--------->
router.get('/flashcards', withAuth, async (req, res) => {
  try {
    // Get all flashcards
    const flashcardsInfo = await Flashcard.findAll({
      attributes: ['id','front', 'back'],
    });

    // Serialize data
    const flashcards = flashcardsInfo.map((flashcards) => flashcards.get({ plain: true }));
console.log(flashcards)
    // Pass serialized data and session flag into template
    res.render('flashcards', { 
      flashcards, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

   
    // Use withAuth middleware to prevent access to route
    router.get('/flashcardedit', withAuth, async (req, res) => {
        try {
            // Find the logged in user based on the session ID
            console.log('flashcard edit route is working')
        } catch (err) {
            res.status(500).json(err);
        }    
    });    
    
    
    router.get('/flashcarddisplay', withAuth, async (req, res) => {
        try {
            // Find the logged in user based on the session ID
            console.log('flashcard display route is working')
        } catch (err) {
            res.status(500).json(err);
        }
    });
    
    router.get('/flashcarddeck', withAuth, async (req, res) => {
        try {
            // Find the logged in user based on the session ID
            console.log('flashcard deck route is working')
        } catch (err) {
            res.status(500).json(err);
        }
    });
    
    router.get('/login', (req, res) => {
        // If the user is already logged in, redirect the request to another route
        if (req.session.logged_in) {
          res.redirect('/');
          return;
        }
      
        res.render('login');
      });
      
      router.get('/logout', (req, res) => {
        req.session.destroy((err) => {
          if (err) {
            console.error('Error destroying session:', err);
            res.status(500).send('Error logging out');
          } else {
            // Redirect to the login page after session is destroyed
            res.redirect('/login');
          }
        });
      });

    module.exports = router;
    