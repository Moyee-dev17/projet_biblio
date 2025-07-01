/*
  Warnings:

  - Added the required column `type` to the `Categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categories" ADD COLUMN     "type" TEXT NOT NULL;
