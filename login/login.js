const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const button = document.getElementById("sign-in");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "username" && password === "password") {
        alert("You have successfully logged in.");
        location.href = "https://tonyymacc.github.io/moojuice";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
