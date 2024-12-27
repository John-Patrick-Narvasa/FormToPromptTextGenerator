document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function generatePrompt() {
    const form = document.getElementById('promptForm');
    const topic = form.topic.value;
    const coverages = form.coverages.value;
    const difficulty = form.difficulty.value;
    const items = form.items.value;
    const testStyles = Array.from(form.testStyles).filter(el => el.checked).map(el => el.value).join(', ');
    const conditions = form.conditions.value;
    const desired_output = form.output.value;

    if (testStyles.split(', ').length < 2) {
        alert('Please select at least two test styles.');
        return;
    }

    const output = `
Hello, I want you to follow the subject, coverage, and prompt mentioned below:

Topic: ${topic}
Coverages: ${coverages}
Difficulty: ${difficulty}
Number of Items: ${items}
Test type/s: ${testStyles}
Conditions: ${conditions}
Desired Output: ${desired_output}
 

*If output too big for you to finish it, I will say to continue it*
*Put the answers at the very bottom*
    `.trim();

    document.getElementById('output').textContent = output;
}

function copyOutput() {
    const outputText = document.getElementById('output').textContent;
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';

    if (outputText) {
        navigator.clipboard.writeText(outputText).then(() => {
            alert('Output copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        errorMessage.textContent = 'Nothing to copy!';
    }
}