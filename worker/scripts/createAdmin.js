import { hashPassword } from "../src/auth/password.js";

const password = "Admin123";
//prueb
const hash = await hashPassword(password);

console.log("");
console.log("Usuario : admin");
console.log("Password:", password);
console.log("Hash:");
console.log(hash);
console.log("");