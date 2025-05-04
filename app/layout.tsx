// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Dashboard Inventory',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <aside className="w-64 h-screen bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Inventory Dashboard</h2>
          <ul>
            <li><a href="/barang-masuk">Barang Masuk</a></li>
            <li><a href="/barang-keluar">Barang Keluar</a></li>
            {/* Tambahkan menu lain */}
          </ul>
        </aside>
        <main className="flex-1 p-8 bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
