document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const registerLink = document.getElementById("register-link");
    const loginLink = document.getElementById("login-link");

    const usernameErr = document.getElementById("username_format_err");
    const emailErr = document.getElementById("email_format_err");
    const passwordErr = document.getElementById("password_format_err");
    const confirmPasswordErr = document.getElementById("confirm_password_err");


    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("Username").value;
        const password = document.getElementById("password").value;
        // Xử lý đăng nhập  ở đây (chưa cần gọi đến backend)

        window.location.href = "DashboardAdmin/index.html";
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const email = document.getElementById("email").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const usernamePattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,}$/;
        if (!usernamePattern.test(newUsername)) {
            usernameErr.innerHTML = "Tên đăng nhập phải bắt đầu bằng chữ cái và có ít nhất 6 ký tự.";
            return;
        }
        
        if (newPassword !== confirmPassword) {
            confirmPasswordErr.innerHTML = "Mật khẩu không khớp.";
            return;
        }
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(newPassword)) {
            passwordErr.innerHTML = "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ cái và số.";
            return;
        }

        errorMessages = document.querySelectorAll(".format_error")
        errorMessages.forEach((err) => {
            console.log(err);
            err.innerHTML = "";
        });
        // Xử lý đăng ký ở đây (chưa cần gọi đến backend)
        alert("Đăng ký thành công!");
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });
});
