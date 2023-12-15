const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'client')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'mainpage.html'));
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'New_Members.json')));
app.post('/submit-form', async (req, res) => {
  const newData = req.body;

  try {
      const currentData = await fs.readFile(path.join(__dirname, 'New_Members.json'), 'utf-8');
      const existingJson = JSON.parse(currentData);

      existingJson.Newcomers.push(newData);

      const updatedJsonString = JSON.stringify(existingJson, null, 2);

      await fs.writeFile(path.join(__dirname,'New_Members.json'), updatedJsonString);
  } catch (error) {
      console.error('Произошла ошибка:', error);
      res.status(500).send('Произошла ошибка при обработке запроса');
  }
});