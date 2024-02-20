// Import necessary modules
const User = require('./models/User');

const userData = [
    {
        name: 'John Doe',
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123',
    },
    {
        name: 'Jane Smith',
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'password456',
    },
    {
        name: 'Beyonce',
        username: 'beyon_ce',
        email: 'beyonce@example.com',
        password: 'password789',
    },
    {
        name: 'Jay-Z',
        username: 'jay_z',
        email: 'jayz@example.com',
        password: 'wordpass123',
    },
    {
        name: 'Taylor Swift',
        username: 'taylor_swift',
        email: 'taylorswift@example.com',
        password: 'wordpass456',
    },
];

// Seed the database with user data
const seedDatabase = async () => {
    try {
        // Use Sequelize's create method to insert user data into the database
        await User.bulkCreate(userData);

        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};

// Call the seedDatabase function to initiate the seeding process
seedDatabase();
