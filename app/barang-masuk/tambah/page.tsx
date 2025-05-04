"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TambahBarangMasuk() {
  const router = useRouter();
  const [namaBarang, setNamaBarang] = useState('');
  const [jumlah, setJumlah] = useState(0);
  const [tanggal, setTanggal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      namaBarang,
      jumlah,
      tanggal,
    };

    const response = await fetch('/api/barang-masuk/tambah', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Barang berhasil ditambahkan');
      router.push('/barang-masuk');
    } else {
      alert('Terjadi kesalahan saat menambahkan barang');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tambah Barang Masuk</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Nama Barang</label>
          <input
            type="text"
            value={namaBarang}
            onChange={(e) => setNamaBarang(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
        <label className="block mb-2">Jumlah Barang</label>
        <input
  type="number"
  value={jumlah}
  onChange={(e) => {
    const value = e.target.value;
    setJumlah(value === '' ? 0 : parseInt(value));
  }}
  className="w-full p-2 border rounded"
            required
/>
        </div>
        <div>
          <label className="block mb-2">Tanggal</label>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Tambah Barang
        </button>
      </form>
    </div>
  );
}
