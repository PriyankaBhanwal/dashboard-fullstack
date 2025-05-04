const bcrypt = require("bcryptjs");

async function hashAndCompare() {
  const hashedPassword = await bcrypt.hash("test1234", 10);
  console.log("Hash of 'test1234':", hashedPassword);
  console.log(
    "Stored Hash:",
    "$2b$10$4KCyxpCAV027pCYOO1r6J.dDU.qhotcefkhb3NwlUtVSazaFIsXbS"
  );
  console.log(
    "Do they match?",
    hashedPassword ===
      "$2b$10$4KCyxpCAV027pCYOO1r6J.dDU.qhotcefkhb3NwlUtVSazaFIsXbS"
  );
}

hashAndCompare();
