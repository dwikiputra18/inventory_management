-- CreateTable
CREATE TABLE "BarangMasuk" (
    "id" SERIAL NOT NULL,
    "namaBarang" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BarangMasuk_pkey" PRIMARY KEY ("id")
);
