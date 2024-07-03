import express from "express";
import xlsxRoute from "./routes/tokped.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use("/xlsx", xlsxRoute);

app.listen(PORT, () => {
  console.log(`Server started on port: http://localhost:${PORT}`);
});
