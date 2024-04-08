// Function to save password and handle login
function handleLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("savePassword").checked;

    // Dummy check for username and password, replace it with your actual authentication logic
    
    // this part can change the username and password
    if (username === "admin" && password === "admin") 
    {
        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
        document.getElementById("loginForm").reset(); // Reset form fields
        displaySuccessMessage();
    } else {
        alert("Incorrect username or password");
    }

    return false; // Prevent default form submission
}

// Function to display success message
function displaySuccessMessage() {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
}

// Check if there's saved password
window.onload = function() {
    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("password").value = savedPassword;
        document.getElementById("savePassword").checked = true;
    }
};
