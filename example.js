const prompt = require('./prompt');

// Example usage of the prompt function
async function main() {
    try {
        // Ask the user for their name
        const name = await prompt('What is your name? ');
        console.log('Hello, ' + name + '!');

        // Ask the user for their age with a default value of 18
        const age = await prompt('What is your age? ', { default: '18' });
        console.log('You are ' + age + ' years old.');

        // Ask the user for a password with custom validation
        const password = await prompt('Enter a password (at least 6 characters): ', {
            validate: (input) => input.length >= 6
        });
        console.log('Password accepted:', password);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the main function to start the prompt
main();
