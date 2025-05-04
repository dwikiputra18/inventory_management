import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { namaBarang, jumlah } = await req.json();

  try {
    const newBarang = await prisma.barangMasuk.create({
      data: {
        namaBarang,
        jumlah,
      },
    });
    return new Response(JSON.stringify(newBarang), { status: 201 });
  } catch (error) {
    return new Response('Gagal menambahkan barang', { status: 500 });
  }
}
