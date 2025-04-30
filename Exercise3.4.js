const express = require("express");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.send("Missing username or password.");
  }

  res.send(`Welcome, ${username}. Your password is ${password}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
