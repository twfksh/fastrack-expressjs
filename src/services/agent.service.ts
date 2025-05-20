import { Agent, PrismaClient } from "@prisma/client";

class AgentService {
    private readonly prisma: PrismaClient;
    constructor() { this.prisma = new PrismaClient(); }

    createAgent = async (agent: Agent) => {
        const _agent = await this.prisma.agent.create({ data: agent });
        return _agent;
    }
}
