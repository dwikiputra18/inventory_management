// app/barang-masuk/create.tsx
'use client';

import { useState } from 'react';

export default function CreateBarangMasuk() {
  const [namaBarang, setNamaBarang] = useState('');
  const [jumlah, setJumlah] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/barang-masuk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ namaBarang, jumlah }),
    });

    if (response.ok) {
      alert('Barang berhasil ditambahkan!');
    } else {
      alert('Gagal menambahkan barang.');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tambah Barang Masuk</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="namaBarang" className="block">Nama Barang</label>
          <input
            type="text"
            id="namaBarang"
            value={namaBarang}
            onChange={(e) => setNamaBarang(e.target.value)}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="jumlah" className="block">Jumlah</label>
          <input
            type="number"
            id="jumlah"
            value={jumlah}
            onChange={(e) => setJumlah(parseInt(e.target.value))}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Tambah Barang
        </button>
      </form>
    </div>
  );
}
