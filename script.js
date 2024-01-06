const getUsersFromLocalStorage = () => localStorage.getItem("users") || "";

const generateToken = user => user.replace(",", "");

const storedUserData = getUsersFromLocalStorage();
const defaultUserList = [
    { username: "username", password: "password" },
    { username: "username123", password: "password123" },
    { username: "UserName", password: "PassWord" },
    { username: "Username123!", password: "Password123!" }
  ];

  const staticUserList = storedUserData ? storedUserData.split(",").map(entry => {
    const [username, password] = entry.split(":");
    return { username, password };
  }) : defaultUserList;

const validateLogin = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;


  const user = staticUserList.find(u => u.username === username && u.password === password);

  if (user) {
    const token = generateToken(`${username}${password}`);
    alert(`Login successful! Token: ${token}`);
  } else {
    alert("Invalid user! Try again!");
  }
};