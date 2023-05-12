const fs = require("fs");
const path = require("path");

const directory = "/Users/asd/Downloads";

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    let filePath = path.join(directory, file);
    let ext = path.extname(filePath);

    if (!fs.existsSync(path.join(directory, ext.substr(1)))) {
      fs.mkdirSync(path.join(directory, ext.substr(1)));
    }

    fs.rename(filePath, path.join(directory, ext.substr(1), file), (err) => {
      if (err) throw err;
    });
  });
});
