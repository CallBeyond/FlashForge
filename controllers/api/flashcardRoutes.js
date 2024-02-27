const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Project.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!projectData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to handle adding a new flashcard
router.post('/flashcards', async (req, res) => {
    try {
        // Extract data from request body
        const { front, back } = req.body;

        console.log('Received request to create flashcard:', { front, back });

        // Create new flashcard record in the database
        const newFlashcard = await Flashcard.create({ front, back });

        console.log('New flashcard created:', newFlashcard);

        // Respond with the newly created flashcard data
        res.status(201).json(newFlashcard);
    } catch (error) {
        console.error('Failed to create flashcard:', error);
        res.status(500).json({ message: 'Failed to add flashcard' });
    }
});




module.exports = router;
