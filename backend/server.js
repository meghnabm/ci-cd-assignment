const express = require('express');
const app = express();
const PORT = 5000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: "ok", service: "backend" });
});
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

