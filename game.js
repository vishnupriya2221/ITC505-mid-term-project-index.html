// Story stages for the IT Tech-themed adventure game
const storyStages = {
    start: {
        text: "You have just joined a new IT company. Your manager asks you to choose your first project. Do you want to join the coding bootcamp or work on a network upgrade?",
        choices: [
            { text: "Join the coding bootcamp", consequence: "codingBootcamp" },
            { text: "Work on the network upgrade", consequence: "networkUpgrade" }
        ],
        image: "computer_setup.png"
    },
    codingBootcamp: {
        text: "You start the coding bootcamp. Your instructor gives you a problem to solve. Do you want to debug the code or try to write a new solution?",
        choices: [
            { text: "Debug the code", consequence: "debugging" },
            { text: "Write a new solution", consequence: "newSolution" }
        ],
        image: "coding_bootcamp.png"
    },
    networkUpgrade: {
        text: "You begin the network upgrade project. A server crash happens in the middle of your setup. Do you want to fix the crash or call for help?",
        choices: [
            { text: "Fix the crash", consequence: "fixCrash" },
            { text: "Call for help", consequence: "callForHelp" }
        ],
        image: "network_upgrade.png"
    },
    debugging: {
        text: "You debug the code and find the issue! The project is successfully completed, and you get a bonus.",
        choices: [],
        image: "debugging.png"
    },
    newSolution: {
        text: "You attempt to write a new solution, but it doesn't work out. You get a warning from your manager.",
        choices: [],
        image: "failed_solution.png"
    },
    fixCrash: {
        text: "You manage to fix the server crash in time. The network upgrade is successfully completed.",
        choices: [],
        image: "network_upgrade_success.png"
    },
    callForHelp: {
        text: "You call for help, and your senior colleague assists you. The network upgrade is completed with some delay.",
        choices: [],
        image: "call_for_help.png"
    }
};

let currentStage = 'start';

// Function to initialize the game
function startGame() {
    currentStage = 'start';
    updatePage();
}

// Function to update the content based on the current stage
function updatePage() {
    const stage = storyStages[currentStage];
    const storyDiv = document.getElementById('story');
    const choicesDiv = document.getElementById('choices');
    const lastModifiedDiv = document.getElementById('lastModified');
    
    // Update story text and image
    storyDiv.innerHTML = `<p>${stage.text}</p>`;
    if (stage.image) {
        storyDiv.innerHTML += `<img id="storyImage" src="${stage.image}" alt="Story image">`;
    }

    // Update choices (if any)
    choicesDiv.innerHTML = '';
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choiceButton';
        button.textContent = choice.text;
        button.onclick = function() {
            currentStage = choice.consequence;
            updatePage();
        };
        choicesDiv.appendChild(button);
    });

    // Show Restart button if no choices are left
    if (stage.choices.length === 0) {
        const restartButton = document.createElement('button');
        restartButton.className = 'choiceButton';
        restartButton.textContent = 'Restart';
        restartButton.onclick = startGame;
        choicesDiv.appendChild(restartButton);
    }

    // Update last modified date
    lastModifiedDiv.textContent = `Last Modified: ${document.lastModified}`;
}

// Wait for the document to load before starting the game
document.addEventListener('DOMContentLoaded', startGame);
