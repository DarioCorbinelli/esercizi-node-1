const {writeFile} = require("node:fs")

writeFile("prova.md", "Hello Node.js", err => {
  if (err) throw err
  console.log("file created");
})