// Source ref-code: https://blog.illacloud.com/turn-a-csv-file-into-json/

const fs = require("fs");
const csv = require("csv-parser");

const results = [];
fs.createReadStream("veg-pantry.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    fs.writeFileSync("veg-pantry.json", JSON.stringify(results, null, 4));
  });
