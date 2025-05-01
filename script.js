document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const loginPage = document.getElementById("loginPage");
    const mainContent = document.getElementById("mainContent");

    // Cek apakah pengguna sudah login
    if (localStorage.getItem("loggedIn") === "true") {
        showMainContent();
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Validasi sederhana (gantilah dengan sistem autentikasi yang lebih aman)
        if (username === "admin" && password === "1234") {
            localStorage.setItem("loggedIn", "true");
            showMainContent();
        } else {
            alert("Username atau password salah!");
        }
    });

    function showMainContent() {
        loginPage.classList.add("hidden");
        mainContent.classList.remove("hidden");
    }

    window.logout = function () {
        localStorage.removeItem("loggedIn");
        location.reload();
    };
});