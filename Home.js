document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get('username');

    if (username) {
        const greetingElement = document.getElementById('greeting');
        greetingElement.textContent = `Hi ${username}`;
    } else {
        // Handle case where username is not provided
        console.error("Username not found in query parameters.");
    }
});
