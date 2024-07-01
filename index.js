import express from "express";
// import cors from "cors";
// import session from "express-session";

const app = express();
const PORT = 8080;

const allowedOrigins = ["http://localhost:3000"];

app.use(express.json());
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

app.listen(PORT, () => {
  console.log(`Server started on port: http://localhost:${PORT}`);
});
