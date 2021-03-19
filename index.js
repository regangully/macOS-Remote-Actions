const express = require("express");
const applescript = require("applescript");
const app = express();
const port = 3000;

// Open App
app.post("/open/app/:appName", (req, res) => {
  let appName = req.params.appName;
  const launchScript = `tell application "${appName}" to activate`;

  applescript.execString(launchScript, (err, rtn) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send("Complete");
    }
  });
});

// Quit App
app.post("/close/app/:appName", (req, res) => {
  let appName = req.params.appName;
  const launchScript = `on run tell app "${appName}" to quit end run`;

  applescript.execString(launchScript, (err, rtn) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send("Complete");
    }
  });
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`HomeServer running on port: ${port}`);
});
