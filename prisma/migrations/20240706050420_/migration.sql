/*
  Warnings:

  - You are about to drop the column `qouta` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[idHash]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `idHash` was added to the `Image` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `username` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "ApiKey" ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Untitled API Key';

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "filename" TEXT,
ADD COLUMN     "idHash" TEXT NOT NULL,
ADD COLUMN     "tagdata" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "qouta",
ADD COLUMN     "password" TEXT,
ADD COLUMN     "quota" INTEGER NOT NULL DEFAULT 10000,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Image_idHash_key" ON "Image"("idHash");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
