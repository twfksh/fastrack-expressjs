import express from "express";
import messageQueueRoutes from "./routes/message-queue.route";
import agentRoutes from "./routes/agent.route"
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

// register routes
app.use("/api/mqueue", messageQueueRoutes);
app.use("/api/agent", agentRoutes);

// global error handler (should be after routes)
app.use(errorHandler);

export default app;