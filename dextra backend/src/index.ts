import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.static("./public"));

app.use("/", (req: Request, res: Response) => {
  res.send("Working");
});

const port = process.env.port;
app.listen(port, () => {
  console.log(`listening at port number ${port}`);
});
