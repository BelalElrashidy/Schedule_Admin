const fs = require("fs");
const parse = require("csv-parser");
const data = [];
fs.createReadStream("./SummerSchedule.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", (row) => {
    data.push(row);
  })
  .on("end", function () {
    fs.writeFileSync("./asset.json", JSON.stringify(data));
  })
  .on("error", function (error) {
    console.log("error.message");
  });
