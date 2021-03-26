import express, { Application, json } from "express";
import cors from "cors";
import Context from "./config/Context";
import GeoJSONRouter from "./router/GeoJSON";

const { PORT, NODE_ENV } = Context.getInstance();
const app: Application = express();

app.use(cors());
app.use(json());

app.use("/GeoJSON", GeoJSONRouter);

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV}`);
  if (NODE_ENV === "development") {
    console.log(`http://localhost:${PORT}`);
  }
});
