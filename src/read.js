export default function read() {
  const fs = require("fs");
  const data = fs.readFileSync("asset.json");
  const event = JSON.parse(data);
  return event;
}
