// Import necessary modules
const { User, Deck, Flashcard } = require('./models');
const sequelize = require('./config/connection');

// Define user data
const userData = [
    {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123',
    },
    {
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'password456',
    },
    {
        username: 'beyon_ce',
        email: 'beyonce@example.com',
        password: 'password789',
    },
    {
        username: 'jay_z',
        email: 'jayz@example.com',
        password: 'password123',
    },
    {
        username: 'taylor_swift',
        email: 'taylorswift@example.com',
        password: 'password456',
    },
];

// Define deck data
const deckData = [
    {
        name: 'JavaScript Basics',
        userId: 1, // John Doe
    },
    {
        name: 'Node.js Fundamentals',
        userId: 2, // Jane Smith
    },
    {
        name: 'HTML & CSS Essentials',
        userId: 3, // Beyonce
    },
    {
        name: 'Database Design',
        userId: 4, // Jay Z
    },
    {
        name: 'React Framework',
        userId: 5, // Taylor Swift
    },
];

// Define flashcard data
const flashcardData = [
    {
        front: 'What is JavaScript?',
        back: 'JavaScript is a programming language that enables interactive web pages.',
        deckId: 1, // JavaScript Basics
    },
    {
        front: 'What is Node.js?',
        back: 'Node.js is a runtime environment that allows JavaScript to run server-side.',
        deckId: 2, // Node.js Fundamentals
    },
    {
        front: 'What is HTML?',
        back: 'HTML (Hypertext Markup Language) is the standard markup language for creating web pages.',
        deckId: 3, // HTML & CSS Essentials
    },
    {
        front: 'What is CSS?',
        back: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.',
        deckId: 3, // HTML & CSS Essentials
    },
    {
        front: 'What is a database?',
        back: 'A database is an organized collection of structured information, or data, typically stored electronically in a computer system.',
        deckId: 4, // Database Design
    },
    {
        front: 'What is React?',
        back: 'React is a JavaScript library for building user interfaces, developed by Facebook.',
        deckId: 5, // React Framework
    },
];

// Seed the database with user, deck, and flashcard data
const seedDatabase = async () => {
    try {
        // Sync all models
        await sequelize.sync({ force: true });

        // Use Sequelize's bulkCreate method to insert user data into the database
        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true
        });

        // Use Sequelize's bulkCreate method to insert deck data into the database
        const decks = await Deck.bulkCreate(deckData);

        // Use Sequelize's bulkCreate method to insert flashcard data into the database
        await Flashcard.bulkCreate(flashcardData);

        console.log('Database seeded successfully');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};

// Call the seedDatabase function to initiate the seeding process
seedDatabase();
