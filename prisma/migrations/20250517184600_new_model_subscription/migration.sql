/*
  Warnings:

  - You are about to drop the column `planId` on the `Organization` table. All the data in the column will be lost.
  - Added the required column `planStartDate` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationInDays` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `limitModelUses` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_planId_fkey";

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "planId",
ADD COLUMN     "planStartDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "durationInDays" INTEGER NOT NULL,
ADD COLUMN     "limitModelUses" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "modelUsesCount" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
