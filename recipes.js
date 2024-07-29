import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";
import recipes from "./recipes.json" assert { type: "json" };

// GET ALL RECIPES
export async function getRecipes() {
  return getRecipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(requestId) {
  const recipe = recipes.find(({ id }) => id === requestId);
  if (recipe) {
    return recipe;
  }

  throw new Error(`No recipe with ${requestId} found.`);
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
