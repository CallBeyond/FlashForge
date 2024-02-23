const router = require('express').Router();
const Deck = require('../models/Deck');
const User = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
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

// router.post('/', async (req, res) => {
//     try {
//       const userData = await User.create(req.body);
  
//       req.session.save(() => {
//         req.session.user_id = userData.id;
//         req.session.logged_in = true;
  
//         res.status(200).json(userData);
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });



  
  // router.post('/login', async (req, res) => {
  //     try {
  //         const userData = await User.findOne({ where: { email: req.body.email } });
          
  //         if (!userData) {
  //             res
  //             .status(400)
  //             .json({ message: 'Incorrect email or password, please try again' });
  //             return;
  //           }
            
  //           const validPassword = await userData.checkPassword(req.body.password);
            
  //           if (!validPassword) {
  //               res
  //               .status(400)
  //               .json({ message: 'Incorrect email or password, please try again' });
  //               return;
  //           }
            
  //           req.session.save(() => {
  //               req.session.user_id = userData.id;
  //               req.session.logged_in = true;
                
  //               res.json({ user: userData, message: 'You are now logged in!' });
  //           });
            
  //       } catch (err) {
  //           res.status(400).json(err);
  //       }
  //   });
    
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
      
    module.exports = router;
    