import fs from "fs";
import path from "path";

export function getproducts() {
  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), "creals.json");

  // Read the file synchronously
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the JSON into a JavaScript object and return it
  return JSON.parse(fileContents);
}
export function getDetails() {
  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), "detailed.json");

  // Read the file synchronously
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the JSON into a JavaScript object and return it
  return JSON.parse(fileContents);
}
