import express, {Express, Request, Response} from "express";
// import {getNewStoriesIds, getStoriesByIds, getStoryById} from "~api/stories";
import cors from "cors";
// import storiesRouter from "~routes/stories";
// import {API_PREFIX} from "~constants/api";

const app = express();
const dirname = import.meta.dirname;
const PORT = process.env.PORT || 3030;

app.use(
  cors({
    origin: "http://localhost:4040",
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
