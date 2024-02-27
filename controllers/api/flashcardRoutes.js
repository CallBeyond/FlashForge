const router = require('express').Router();
const { Project, Flashcard } = require('../../models');
const withAuth = require('../../utils/auth');


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




router.post('/', async (req, res) => {

    try {
      
        const { front, back, deckId } = req.body;
    
        const newFlashcard = await Flashcard.create({ front, back, deckId});

        res.status(200).json(newFlashcard);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add flashcard' });
    }
});


module.exports = router;
