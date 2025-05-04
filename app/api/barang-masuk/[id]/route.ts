// app/api/barang-masuk/[id]/route.ts
import { prisma } from '@/lib/prisma';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { namaBarang, jumlah } = await req.json();

  // Validasi data
  if (!namaBarang || jumlah <= 0) {
    return new Response('Nama barang dan jumlah tidak valid', { status: 400 });
  }

  try {
    const updatedBarang = await prisma.barangMasuk.update({
      where: { id: parseInt(params.id) },
      data: { namaBarang, jumlah },
    });
    return new Response(JSON.stringify(updatedBarang), { status: 200 });
  } catch (error) {
    console.error('Gagal memperbarui barang:', error);
    return new Response('Gagal memperbarui barang', { status: 500 });
  }
}
