/*
  Warnings:

  - The primary key for the `AttentionHourUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `AttentionHourUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AttentionHourUser" DROP CONSTRAINT "AttentionHourUser_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "AttentionHourUser_pkey" PRIMARY KEY ("userId", "attentionHourId");
