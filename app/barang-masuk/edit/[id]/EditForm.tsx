// app/barang-masuk/edit/[id]/EditForm.tsx
'use client';

import { useState } from 'react';

interface BarangMasuk {
  id: number;
  namaBarang: string;
  jumlah: number;
  tanggal: string;
}

interface Props {
  barang: BarangMasuk;
}

export default function EditForm({ barang }: Props) {
  const [namaBarang, setNamaBarang] = useState(barang.namaBarang);
  const [jumlah, setJumlah] = useState(barang.jumlah);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!namaBarang || jumlah <= 0) {
      alert('Nama barang dan jumlah harus diisi dengan benar!');
      return;
    }

    try {
      const response = await fetch(`/api/barang-masuk/${barang.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          namaBarang,
          jumlah,
        }),
      });

      if (response.ok) {
        alert('Barang berhasil diperbarui!');
        window.location.href = '/barang-masuk'; // Redirect setelah sukses
      } else {
        alert('Gagal memperbarui barang.');
      }
    } catch (error) {
      console.error('Gagal memperbarui barang:', error);
      alert('Terjadi kesalahan saat memperbarui barang.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Nama Barang</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={namaBarang}
          onChange={(e) => setNamaBarang(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Jumlah</label>
        <input
          type="number"
          className="border p-2 w-full"
          value={jumlah}
          onChange={(e) => setJumlah(Number(e.target.value))}
          required
          min="1"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Simpan
      </button>
    </form>
  );
}
