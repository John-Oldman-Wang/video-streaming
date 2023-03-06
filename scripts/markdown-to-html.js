const fs = require("fs");
const path = require("path");
const utils = require("util");
const markdown = require("markdown");

const mdFilePath = path.resolve(process.cwd(), "./README.md");

const htmlFilePath = path.resolve(process.cwd(), "./docs/readme.html");

(async () => {
  const mdContent = await utils
    .promisify(fs.readFile)(mdFilePath)
    .then((buffer) => buffer.toString());

  const htmlContent = markdown.markdown.toHTML(mdContent);

  await utils.promisify(fs.writeFile)(htmlFilePath, htmlContent);
})();
