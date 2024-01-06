var users = [
    { username: "username", password: "password" },
    { username: "username123", password: "password123" },
    { username: "UserName", password: "PassWord" },
    { username: "Username123!", password: "Password123!" }
  ];

  function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = users.find(u => u.username === username && u.password === password);

    if (user) {
      alert("Login successful!");
    } else {
      alert("Invalid user! Try again!");
    }
  }