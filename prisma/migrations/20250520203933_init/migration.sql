-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('RENT', 'SELL', 'RENT_SELL');

-- CreateTable
CREATE TABLE "Agent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "type" "PropertyType" NOT NULL,
    "numOfBedrooms" INTEGER NOT NULL,
    "numOfBathrooms" INTEGER NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "agentId" INTEGER NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadQueue" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "propertyId" INTEGER,

    CONSTRAINT "LeadQueue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MessageQueue" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "mail_addr" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "type" "PropertyType" NOT NULL,
    "numOfBedrooms" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "MessageQueue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadQueue" ADD CONSTRAINT "LeadQueue_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;
