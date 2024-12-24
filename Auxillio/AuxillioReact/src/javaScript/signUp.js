function verificationProcess() {
    const nameInput = document.getElementById('name').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    const validName = "joshua olusola";
    const validPassword = "vug/csc/23/9682";

    if (nameInput === validName && passwordInput === validPassword) {
        alert("Authentication successful! Welcome to AUXILIO.");
        localStorage.setItem('username', validName);
        window.location.href = "dashboard.html";
        return false;  
    } else {
        alert("Invalid name or password. Please try again.");
        return false; 
    }
}

function displayGreeting() {
    const username = localStorage.getItem('username');

    if (username) {
        const helloElement = document.getElementById('hello');
        helloElement.textContent = `Welcome, ${username}!`;
    }
}

window.onload = displayGreeting;
