// HTML Comment: DOM elements are stored in variables for easy access
const noteTextarea = document.getElementById('note-text');
const addNoteButton = document.getElementById('add-note-btn');
const notesDisplay = document.getElementById('notes-display');

/**
 * Function to handle adding a new note.
 */
function addNote() {
    // Get the trimmed value from the textarea
    const noteContent = noteTextarea.value.trim();

    // Requirement: Clicking the Add Note button while the input area is empty shows a notification
    if (noteContent === "") {
        // Simple browser notification for demonstration
        alert("Please type a note before clicking 'Add Note'!");
        return; // Stop the function execution
    }

    // --- DOM Manipulation to display the note ---

    // 1. Create a new div element for the note
    const newNote = document.createElement('div');
    // Add a class for potential future styling (CSS)
    newNote.classList.add('note-item'); 

    // 2. Create a paragraph element to hold the text
    const noteParagraph = document.createElement('p');
    noteParagraph.textContent = noteContent;

    // 3. Optional: Add timestamp or unique ID (good practice)
    const timestamp = document.createElement('small');
    timestamp.textContent = ` (Added on: ${new Date().toLocaleTimeString()})`;
    
    // Append the paragraph and timestamp to the new note container
    newNote.appendChild(noteParagraph);
    newNote.appendChild(timestamp);

    // 4. Requirement: Display all added notes in a dedicated section of the page.
    // Prepend (add to the top) the new note to the display area
    notesDisplay.prepend(newNote); 

    // Requirement: Clear the input field after each note is added
    noteTextarea.value = "";
    
    // Optional: Give visual feedback
    console.log("Note successfully added: " + noteContent);
}

// Attach the addNote function to the button click event
addNoteButton.addEventListener('click', addNote);

// Note: Requirement: Notes only persist while the webpage is open; 
// reloading the page clears all notes. This is the default behavior 
// when not using technologies like LocalStorage, which aligns with the requirement.