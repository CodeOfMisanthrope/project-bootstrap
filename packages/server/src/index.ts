import path from "node:path";
import express, {Express, Request, Response} from "express";
import cors from "cors";

const app = express();
const dirname = import.meta.dirname;
const PORT = process.env.PORT || 3030;
const expressStatic = path.resolve(dirname, "..", "..", "client", "dist");
console.log(expressStatic);

app.use(
  cors({
    origin: "http://localhost:4040",
  })
);

app.use(express.static(expressStatic));

// app.get("/", (req, res) => {
//   res.status(200).send("Hello world!");
// });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(expressStatic, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
