import { FastifyRequest, FastifyReply } from 'fastify';
import { CustomRequest } from '../type';
import AddharModel from '../models/addhar.model';
import { addharInterface } from '../interface/addhar.interface';
import { Op } from 'sequelize';

export async function createAddhar(request: FastifyRequest, reply: FastifyReply) {
    try {
        const addhar = request.body as addharInterface;
        const addharData = await AddharModel.create({ ...addhar });

        reply.status(201).send({
            status_code: 201,
            message: 'Bookmark created successfully.',
            id: addharData?.id,
        });
    } catch (error) {
        reply.status(500).send({
            status_code: 500,
            message: "Internal server error.",
        });
    }
}