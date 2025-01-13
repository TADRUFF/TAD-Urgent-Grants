// Array to track the history of steps
let history = [];

// Function to show the next step in the flowchart
function showNextStep(stepId) {
    // Hide all nodes
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => node.classList.remove('active'));
    
    // Show the next step (node)
    const nextStep = document.getElementById(stepId);
    if (nextStep) {
        nextStep.classList.add('active');
    }

    // Update button visibility
    const goBackButton = document.querySelector('.go-back');
    if (stepId === 'attention') {
        goBackButton.style.display = 'none'; // Hide on the first step
    } else {
        goBackButton.style.display = 'inline-block'; // Show on other steps
    }

    // Add the current step to history (only if it's not the first step)
    if (history.length === 0 || history[history.length - 1] !== stepId) {
        history.push(stepId);
    }
}

// Function to go back to the previous step, sequentially
function goBack() {
    // Check if we are not at the first step (we want to go back)
    if (history.length > 1) {
        // Remove the current step from history (do not remove the first step)
        history.pop();

        // Get the previous step from the history
        const previousStepId = history[history.length - 1];

        // If there's a previous step, show it
        if (previousStepId) {
            showNextStep(previousStepId);
        }
    }
}

// Initialize the flowchart with the starting point
document.addEventListener('DOMContentLoaded', () => {
    showNextStep('attention'); // Start at the "Attention!" section
});
