const addFlashcardForm = document.querySelector('#add-flashcard-form');

addFlashcardForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const front = document.querySelector('#front').value.trim();
    const back = document.querySelector('#back').value.trim();

    try {
        const response = await fetch('/api/flashcards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ front, back })
        });

        if (!response.ok) {
            throw new Error('Failed to add flashcard');
        }

        const flashcardData = await response.json();

        // Update UI to display newly added flashcard
        displayFlashcard(flashcardData);
    } catch (error) {
        console.error(error);
        // Handle error (e.g., display error message to user)
    }
});

function displayFlashcard(flashcardData) {
    // Implement logic to display the new flashcard in the UI