import express from "express";
import recipes from "./recipes.json" assert { type: "json" };
//console.log(recipes);

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/recipes", (req, res) => {
  res.status(200).json({ success: true, payload: recipes });
  res.json(recipes);
});

app.get("/api/recipes/:id", async (req, res) => {
  try {
    const recipe = await getRecipeByID(req.params.id);
    res.status(200).json({
      sucess: true,
      payload: recipe,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// async function readJsonFile(filePath) {
//   try {
//       const data = await fs.readFile(filePath, 'utf-8'); // create a variable that reads the files from the filePath
//       const jsonData = JSON.parse(data); // transforms the string data to a JSON data
//       return jsonData;
//   } catch (error) {
//       console.error('Error reading file:', error);
//   }
// }

// async function writeJsonFile(filePath, data) {
//   try {
//       const stringifiedData = JSON.stringify(data, null, 2); // turns the data from a JSON to string ??? why 2???
//       await fs.writeFile(filePath, stringifiedData);  // waits for the stringify command to be complete
//       console.log('File written successfully!');
//   } catch (error) {
//       console.error('Error writing file:', error);
//   }
// }

// async function main() {
//   const data = await readJsonFile("data.json");  // for a data to turn from a string to JSON
//   console.log("Data from file:", data); // [] -> data starts as an empty array in this example

//   data.push({ item: "Bananas", quantity: 5 }); // adding "Bananas" to the end and specifing quantity as 5

//   await writeJsonFile("data.json", data); // the file now reads -> [{ item: "Bananas", quantity: 5 }]
// }

// main();
