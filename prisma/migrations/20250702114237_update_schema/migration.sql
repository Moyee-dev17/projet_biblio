/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Categories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categorieId` to the `Books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Books" ADD COLUMN     "categorieId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");

-- AddForeignKey
ALTER TABLE "Books" ADD CONSTRAINT "Books_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
