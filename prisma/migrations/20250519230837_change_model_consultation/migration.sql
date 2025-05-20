/*
  Warnings:

  - You are about to drop the column `creationDate` on the `Consultation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Consultation" DROP COLUMN "creationDate",
ALTER COLUMN "consultationDate" SET DEFAULT CURRENT_TIMESTAMP;
