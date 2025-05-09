import fastify from "fastify";
import pino from "pino";
import dotenv from "dotenv";
import cors from "@fastify/cors";
import { sequelize, checkDatabaseConnection } from "./plugins/sequelize";
import formBodyPlugin from "@fastify/formbody";
import registerRoutes from "./routes";


dotenv.config();

const app = fastify({
  logger: {
    level: "info",
  },
});

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});



app.get("/", async (request, reply) => {
  reply.send({ message: "Welcome to the ticketing-dev service" });
});

app.register(registerRoutes);
app.register(formBodyPlugin);

let port = Number(process.env.PORT) || 3500;

const start = async () => {
  try {
    const dbStatus = await checkDatabaseConnection();
    if (!dbStatus.connected) {
      throw new Error(dbStatus.message);
    }

    await app.listen({ port: port, host: "0.0.0.0" });

    app.log.info(`Server listening on port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
