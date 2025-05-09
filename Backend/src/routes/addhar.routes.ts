import { FastifyInstance } from 'fastify';
import { createAddhar } from '../controller/addhar.controller';

async function addharRoutes(fastify: FastifyInstance) {
    fastify.post('/addhar', createAddhar);
}

export default addharRoutes;
