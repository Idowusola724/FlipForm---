// Function to toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordIcon = document.querySelector('.toggle-password');
    
    // Toggle password visibility by changing the type of the input field
    if (passwordField.type === 'password') {
        passwordField.type = 'text';  // Show password
        passwordIcon.textContent = '👁️';  // Keep eye icon for showing password
    } else {
        passwordField.type = 'password';  // Hide password
        passwordIcon.textContent = '👁️';  // Keep eye icon for hiding password
    }
}

// Switch to the Sign Up form (flip effect)
document.getElementById('switch-signup').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('form-container').classList.add('flipped'); // Add the flipped class to trigger the animation
    document.getElementById('signup-form').classList.remove('hidden'); // Show the Sign Up form
    document.getElementById('login-form').classList.add('hidden'); // Hide the Sign In form
});

// Switch to the Sign In form (flip effect)
document.getElementById('switch-signin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('form-container').classList.remove('flipped'); // Remove the flipped class to revert the animation
    document.getElementById('signup-form').classList.add('hidden'); // Hide the Sign Up form
    document.getElementById('login-form').classList.remove('hidden'); // Show the Sign In form
});
