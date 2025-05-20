import { MessageQueue, PrismaClient } from "@prisma/client";

class MessageQueueService {
    private readonly prisma: PrismaClient;
    constructor() { this.prisma = new PrismaClient(); }

    createMessage = async (message: Omit<MessageQueue, 'id'>) => {
        return this.prisma.messageQueue.create({ data: message });
    }

    updateMessage = async (message: MessageQueue) => {
        return this.prisma.messageQueue.update({
            where: { id: message.id },
            data: message,
        });
    }

    getMessageById = async (id: number) => {
        return this.prisma.messageQueue.findUnique({ where: { id } });
    }

    getAllMessages = async () => {
        return this.prisma.messageQueue.findMany();
    }

    deleteMessage = async (id: number) => {
        return this.prisma.messageQueue.delete({ where: { id } });
    }
}

export default MessageQueueService;
