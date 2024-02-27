const router = require('express').Router();
const { User } = require('../../models');
const sendEmail = require('../../mailer'); // Corrected import path

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create the user
    const newUser = await User.create({ username, email, password });

    // Send the email
    const message = "Thank you for joining Flashforge! We hope you have an amazing time using our app. Please let us know if you have any comments of concerns.";
    const options = {
      from: "jasonarriaza10+flashforge@gmail.com", // Sender address
      to: email, // Receiver email
      subject: "Test Email", // Subject line
      text: message,
      html: `<p>${message}</p>`, // HTML content (can be same as text content for simplicity)
    };

    // Correct usage of sendEmail function
    sendEmail(options, (info) => {
      console.log("Email sent successfully");
      console.log("MESSAGE ID: ", info.messageId);
    });

    res.status(201).json({ message: 'User created and email sent successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
