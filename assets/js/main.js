document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const reForm = document.getElementById('re-form');
    const registerLink = document.getElementById("register-link");
    const reLink = document.getElementById('re-link');
    const loginLink = document.getElementById("login-link");

    reLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        reForm.style.display = 'block';
    });

    // Hiển thị form đăng ký khi nhấn vào liên kết "Đăng ký"
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        reForm.style.display = 'none';
    });

    // Hiển thị form đăng nhập khi nhấn vào liên kết "Đăng nhập"
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        reForm.style.display = 'none';
    });

    //đăng xuất
    document.addEventListener('DOMContentLoaded', function() {
        // Lắng nghe sự kiện click vào nút "Đăng xuất"
        document.getElementById('logout-btn').addEventListener('click', function() {
            // Chuyển hướng về trang index
            window.location.href = 'index.html';
        });
    });

    const demoUsers = [
        {
            username: "admin",
            password: "admin",
            email: "admin@gmail.com"
        },
        {
            username: "user",
            password: "user",
            email: "user@gmail.com"
        }
    ];

    // Hàm kiểm tra tài khoản
    function isUserExist(username, password) {
        // Duyệt qua mỗi đối tượng trong mảng users
        for (var i = 0; i < demoUsers.length; i++) {
            // So sánh username và password
            if (demoUsers[i].username === username && demoUsers[i].password === password) {
                return true; // Trả về true nếu tìm thấy tài khoản
            }
        }
        return false; // Trả về false nếu không tìm thấy tài khoản
    }

    function isUsernameExist(username) {
        for(var i = 0; i < demoUsers.length; i++) {
            if(demoUsers[i].username === username) {
                return true;
            }
        }
        return false;
    }

    function isEmailExist(email) {
        for(var i = 0; i < demoUsers.length; i++) {
            if(demoUsers[i].email === email) {
                console.log(demoUsers[i].email)
                return true;
            }
        }
        return false;
    }

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn việc gửi form
        // Xác thực tên người dùng và mật khẩu (đoạn mã demo)
        var username = document.getElementById("Username").value;
        var password = document.getElementById("password").value;
        console.log(username);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "username": username,
        "password": password
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("http://localhost:8080/auth/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            if (result.success == true) {
                console.log(result);
                localStorage.setItem("token", result.token);
                localStorage.setItem("username", result.username);
                localStorage.setItem("userId", result.userId);
                localStorage.setItem("email", result.email);
                localStorage.setItem("fullname", result.fullname);
                window.location.href = "DashboardAdmin";
            }
            else {
                showErrorNotice("Sai thông tin đăng nhập");
            }
        })
        .catch((error) => console.error(error));
    });

    reForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const confirmEmail = document.getElementById("confirm-email").value;

        if(isEmailExist(confirmEmail)) {
            showSuccessNotice("Đã gửi mật khẩu mới về gmail của bạn!");
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            reForm.style.display = 'none';
        } else {
            showInfoNotice("Email này chưa được đăng kí? Đăng kí ngay!");
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            reForm.style.display = 'none';
        }

    })

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("newUsername").value;
        const newEmail = document.getElementById("email").value;
        const newPassword = document.getElementById("newPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if(isUsernameExist(newUsername)) {
            showErrorNotice("Tài khoản đã được đăng kí. Vui lòng đăng kí tài khoản khác!");
        } else {
            // Kiểm tra xác nhận mật khẩu
            if (newPassword !== confirmPassword) {
                showErrorNotice("Mật khẩu không khớp. Vui lòng nhập lại.");
                return;
            }
            else {
                demoUsers.push({username: newUsername, password: newPassword, email: newEmail});
            }
            // Xử lý đăng ký ở đây (chưa cần gọi đến backend)
            showSuccessNotice("Đăng ký thành công!");
            loginForm.style.display = "block";
            registerForm.style.display = "none";
            reForm.style.display = "none";
        }
        console.log(demoUsers);
    });
    
});


