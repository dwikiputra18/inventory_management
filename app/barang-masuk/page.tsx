"use client";
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function BarangMasukPage() {
  const data = await prisma.barangMasuk.findMany({
    orderBy: { tanggal: 'desc' },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Barang Masuk</h1>
      <Link href="/barang-masuk/tambah" className="text-white bg-green-500 px-4 py-2 rounded mb-4 inline-block">
        Tambah Barang Masuk
      </Link>
      <table className="table-auto w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nama Barang</th>
            <th className="px-4 py-2">Jumlah</th>
            <th className="px-4 py-2">Tanggal</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2">{item.id}</td>
              <td className="px-4 py-2">{item.namaBarang}</td>
              <td className="px-4 py-2">{item.jumlah}</td>
              <td className="px-4 py-2">{new Date(item.tanggal).toLocaleDateString()}</td>
              <td className="px-4 py-2">
                <Link href={`/barang-masuk/edit/${item.id}`} className="text-blue-500">Edit</Link> | 
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 ml-2"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
