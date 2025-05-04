// app/barang-masuk/edit/[id]/page.tsx
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import EditForm from './EditForm';

interface Props {
  params: { id: string };
}

export default async function EditPage({ params }: Props) {
  const id = Number(params.id); // Ambil id dari params
  const barang = await prisma.barangMasuk.findUnique({ where: { id } });

  if (!barang) return notFound(); // Jika data tidak ditemukan

  // Kirim data barang ke Client Component
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Barang Masuk</h1>
      <EditForm barang={barang} />
    </div>
  );
}
