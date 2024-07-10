document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Define valid usernames and passwords
    const credentials = {
        "yahan": "2000",
        "chathuri": "1008",
        "abilashi": "0427",
        "madhuka": "1030"
    };

    // Get user input
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username exists and password matches
    if (credentials.hasOwnProperty(username) && credentials[username] === password) {
        
        window.location.href = `Home.html?username=${username}`; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
