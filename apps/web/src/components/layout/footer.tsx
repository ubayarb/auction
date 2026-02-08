import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
                E
              </div>
              <span className="text-xl font-bold text-gray-900">ELAND</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Үл хөдлөх хөрөнгийн нэгдсэн портал. Худалдах, худалдан авах,
              түрээслэх, дуудлага худалдаа.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-900">Үйлчилгээ</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/properties?transaction=SALE" className="text-gray-500 hover:text-blue-600">
                  Зарах / Авах
                </Link>
              </li>
              <li>
                <Link href="/properties?transaction=RENT" className="text-gray-500 hover:text-blue-600">
                  Түрээс
                </Link>
              </li>
              <li>
                <Link href="/auctions" className="text-gray-500 hover:text-blue-600">
                  Дуудлага худалдаа
                </Link>
              </li>
              <li>
                <Link href="/contracts" className="text-gray-500 hover:text-blue-600">
                  Гэрээ & Эскро
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900">Компани</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-blue-600">
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600">
                  Холбоо барих
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-blue-600">
                  Үйлчилгээний нөхцөл
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-blue-600">
                  Нууцлалын бодлого
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900">Холбоо барих</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>Утас: +976 7700-0000</li>
              <li>И-мэйл: info@eland.mn</li>
              <li>Хаяг: Улаанбаатар, Сүхбаатар дүүрэг</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ELAND. Бүх эрх хуулиар хамгаалагдсан.
        </div>
      </div>
    </footer>
  );
}
