import Link from 'next/link';
import { Search, Building2, Gavel, FileText } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              ҮЛ ХӨДЛӨХ ХӨРӨНГИЙН
              <br />
              <span className="text-blue-200">НЭГДСЭН ПОРТАЛ</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Худалдах, худалдан авах, түрээслэх, дуудлага худалдаа — бүгдийг нэг дороос.
              Аюулгүй, ил тод, хялбар.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mt-10 max-w-3xl">
              <div className="flex rounded-xl bg-white p-2 shadow-2xl">
                <input
                  type="text"
                  placeholder="Байршил, төрөл, үнээр хайх..."
                  className="flex-1 rounded-lg px-4 py-3 text-gray-900 focus:outline-none"
                />
                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition">
                  <Search className="h-5 w-5" />
                  Хайх
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">Үйлчилгээ</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/properties?transaction=SALE"
              className="group rounded-2xl border border-gray-200 p-8 text-center hover:border-blue-500 hover:shadow-lg transition"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Худалдах / Авах</h3>
              <p className="mt-2 text-gray-500">Орон сууц, байшин, газар, оффисийн зар</p>
            </Link>

            <Link
              href="/properties?transaction=RENT"
              className="group rounded-2xl border border-gray-200 p-8 text-center hover:border-green-500 hover:shadow-lg transition"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Түрээс</h3>
              <p className="mt-2 text-gray-500">Урт болон богино хугацааны түрээс</p>
            </Link>

            <Link
              href="/auctions"
              className="group rounded-2xl border border-gray-200 p-8 text-center hover:border-orange-500 hover:shadow-lg transition"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition">
                <Gavel className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Дуудлага худалдаа</h3>
              <p className="mt-2 text-gray-500">Шууд, ил тод дуудлага худалдаа</p>
            </Link>

            <Link
              href="/contracts"
              className="group rounded-2xl border border-gray-200 p-8 text-center hover:border-purple-500 hover:shadow-lg transition"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Гэрээ & Эскро</h3>
              <p className="mt-2 text-gray-500">Аюулгүй гэрээ, эскро төлбөр</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Нийт зар', value: '10,000+' },
              { label: 'Хэрэглэгч', value: '50,000+' },
              { label: 'Дуудлага худалдаа', value: '500+' },
              { label: 'Амжилттай гэрээ', value: '3,000+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
