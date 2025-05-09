import { FastifyInstance } from "fastify";
import addharRoutes from "./addhar.routes";
const basePrefix = "/gov/v1";

export default async function (app: FastifyInstance) {
    app.register(addharRoutes, { prefix: `${basePrefix}` });
 
}





