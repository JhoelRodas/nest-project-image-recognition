/*
  Warnings:

  - Added the required column `organizationId` to the `AttentionHour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ci` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `Patient` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AttentionHour" ADD COLUMN     "organizationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "ci" INTEGER NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "AttentionHour" ADD CONSTRAINT "AttentionHour_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
