// PascalCase naming convention applied to the function
function Message() {
    // Declaring a constant variable
    const name = "John Doe";
    
    // Checking if 'name' has a value
    if (name) {
        // Returning JSX with a conditional rendering of 'name'
        return <h1>Hello {name}</h1>;
    } else {
        // Returning a default message if 'name' is empty
        return <h1>Hello world</h1>;
    }
}

// Exporting the Message component as default
export default Message;
