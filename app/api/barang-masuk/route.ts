// app/api/barang-masuk/route.ts
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

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { namaBarang, jumlah } = await req.json();

  try {
    const updatedBarang = await prisma.barangMasuk.update({
      where: { id: parseInt(params.id) },
      data: { namaBarang, jumlah },
    });
    return new Response(JSON.stringify(updatedBarang), { status: 200 });
  } catch (error) {
    return new Response('Gagal memperbarui barang', { status: 500 });
  }
}
