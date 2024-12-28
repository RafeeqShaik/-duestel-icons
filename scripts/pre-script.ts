import { existsSync, rmdirSync } from "fs";
import { join } from "path";

const srcPath = join(__dirname, "..", "src");

if (existsSync(srcPath)) {
  rmdirSync(srcPath, { recursive: true });
  console.log("src folder deleted");
} else {
  console.log("src folder does not exist");
}
