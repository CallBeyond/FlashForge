const addFlashcardForm = document.querySelector('#flashcardForm');
console.log(window.location)
addFlashcardForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const front = document.querySelector('#question').value.trim();
    const back = document.querySelector('#answer').value.trim();
    const deckId = window.location.pathname.split("/")[2];
    
    try {
        const response = await fetch('/api/flashcards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ front, back, deckId })
        });

        if (!response.ok) {
            throw new Error('Failed to add flashcard');
        }

        const flashcardData = await response.json();
        
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.reload();
          } else {
            alert("post did not work");
          }
        // displayFlashcard(flashcardData);
    } catch (error) {
        console.error(error);
      
    }
});
