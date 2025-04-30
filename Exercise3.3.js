const express = require("express");

const app = express();
const port = 3000;

app.get('/factorial', (req, res) => {
  const n = req.query.number;
  if (!n || isNaN(n)) {
    return res.send("Please provide a valid number in query (e.g. ?number=5)");
  }
  res.redirect(`/factorial/${n}`);
});

app.get('/factorial/:number', (req, res) => {
  const n = parseInt(req.params.number);

  if (isNaN(n) || n < 0) {
    return res.send("Invalid input. Please enter a non-negative integer.");
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  res.send(`Factorial of ${n} is ${result}`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
