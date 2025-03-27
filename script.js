// Toggle Password Visibility
function togglePassword() {
    let passwordField = document.getElementById("password");
    let eyeIcon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.innerHTML = "👁️‍🗨️";
    } else {
        passwordField.type = "password";
        eyeIcon.innerHTML = "👁️";
    }
}

// Switching Between Forms
document.getElementById("switch-signup").addEventListener("click", function() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
    document.getElementById("form-title").innerText = "Sign Up";
});

document.getElementById("switch-signin").addEventListener("click", function() {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("form-title").innerText = "Sign In";
});
