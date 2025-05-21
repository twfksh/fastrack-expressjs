// import { PrismaClient } from "@prisma/client";

import { Agent, PrismaClient } from "@prisma/client";

class AgentService {
    private readonly prisma: PrismaClient;
    constructor() { this.prisma = new PrismaClient(); }

    createAgent = async (payload: Omit<Agent, 'id'>) => {
        return this.prisma.agent.create({ data: payload });
    }

    updateAgent = async (payload:Agent ) => {
        return this.prisma.agent.update({
            where: { id: payload.id },
            data: payload,
        });
    }

    getAgentById = async (id: number) => {
        return this.prisma.agent.findUnique({ where: { id } });
    }

    getAllAgents = async () => {
        return this.prisma.agent.findMany();
    }

    deleteAgent = async (id: number) => {
        return this.prisma.agent.delete({ where: { id } });
    }
}

export default AgentService;
