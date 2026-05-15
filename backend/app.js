const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");

const app = express();
const frontendPath = path.join(__dirname, "..", "frontend");
const usersFile = path.join(__dirname, "users.json");

function loadUsers() {
    if (!fs.existsSync(usersFile)) {
        fs.writeFileSync(usersFile, "[]", "utf8");
    }
    const raw = fs.readFileSync(usersFile, "utf8");
    try {
        return JSON.parse(raw || "[]");
    } catch (error) {
        return [];
    }
}

function saveUsers(users) {
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), "utf8");
}

console.log("Frontend path:", frontendPath);
console.log("Frontend exists:", fs.existsSync(frontendPath));

app.use(cors());
app.use(express.json());
app.use(express.static(frontendPath));

app.get("/", (req, res) => {
    const filePath = path.join(frontendPath, "index.html");
    console.log("Serving file:", filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error sending file:", err);
            res.status(500).send("Error loading page");
        }
    });
});

app.post("/register", async (req, res) => {
    console.log("Register request received:", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    try {
        const users = loadUsers();
        const alreadyExists = users.find((user) => user.email.toLowerCase() === email.toLowerCase());

        if (alreadyExists) {
            return res.status(409).json({ success: false, message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ email: email.toLowerCase(), password: hashedPassword });
        saveUsers(users);

        console.log("User registered:", email);
        res.json({ success: true, message: "Account created successfully" });
    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ success: false, message: "Server error during registration" });
    }
});

app.post("/login", async (req, res) => {
    console.log("Login request received:", req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    try {
        const users = loadUsers();
        const existingUser = users.find((user) => user.email.toLowerCase() === email.toLowerCase());

        if (!existingUser) {
            return res.status(401).json({ success: false, message: "Wrong email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Wrong email or password" });
        }

        console.log("User logged in:", email);
        res.json({ success: true, message: "Login success" });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Server error during login" });
    }
});

app.listen(3000, () => {
    console.log("Server started");
});
