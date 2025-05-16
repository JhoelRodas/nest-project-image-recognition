/*
  Warnings:

  - Added the required column `hostUser` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "hostUser" TEXT NOT NULL;
