import express from "express";
import itemRoutes from "./routes/itemRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

// register routes
app.use("/api/items", itemRoutes);

// global error handler (should be after routes)
app.use(errorHandler);

export default app;