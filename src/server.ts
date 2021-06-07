import express from "express";

const app = express();

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`photoplay app listening at http://localhost:${PORT}`);
});
