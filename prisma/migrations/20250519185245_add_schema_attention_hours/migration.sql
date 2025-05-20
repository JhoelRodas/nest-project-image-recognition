-- CreateTable
CREATE TABLE "AttentionHour" (
    "id" TEXT NOT NULL,
    "days" TEXT[],
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AttentionHour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttentionHourUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "attentionHourId" TEXT NOT NULL,

    CONSTRAINT "AttentionHourUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AttentionHourUser" ADD CONSTRAINT "AttentionHourUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttentionHourUser" ADD CONSTRAINT "AttentionHourUser_attentionHourId_fkey" FOREIGN KEY ("attentionHourId") REFERENCES "AttentionHour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
