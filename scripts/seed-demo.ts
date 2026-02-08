/**
 * ELAND Platform - Demo Data Seed Script
 * =======================================
 * Бодит Монгол мэдээллээр систем дүүргэх скрипт.
 *
 * Ажиллуулах:
 *   npx ts-node scripts/seed-demo.ts
 *
 * Шаардлага: Бүх сервисүүд ажиллаж байх ёстой (pnpm dev)
 */

const AUTH_URL = 'http://localhost:3001/api/v1';
const PROPERTY_URL = 'http://localhost:3002/api/v1';
const AUCTION_URL = 'http://localhost:3004/api/v1';

// ─── Helper ───
async function post(url: string, body: any, token?: string) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
  const data = await res.json();
  if (!res.ok && res.status !== 201) {
    console.error(`  ❌ ${res.status} ${url}`, data.message || data);
  }
  return data;
}

async function get(url: string, token?: string) {
  const headers: Record<string, string> = {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(url, { headers });
  return res.json();
}

// ─── 1. Demo хэрэглэгчид ───
const USERS = [
  { email: 'bat@eland.mn',       phone: '+97699001001', password: 'Demo1234!', firstName: 'Батбаяр',   lastName: 'Дорж',     role: 'owner' },
  { email: 'sarnai@eland.mn',    phone: '+97699001002', password: 'Demo1234!', firstName: 'Сарнай',    lastName: 'Энхбат',   role: 'agent' },
  { email: 'tuvshin@eland.mn',   phone: '+97699001003', password: 'Demo1234!', firstName: 'Түвшин',    lastName: 'Ганбат',   role: 'buyer' },
  { email: 'oyuka@eland.mn',     phone: '+97699001004', password: 'Demo1234!', firstName: 'Оюука',     lastName: 'Сүхбат',   role: 'owner' },
  { email: 'temuulen@eland.mn',  phone: '+97699001005', password: 'Demo1234!', firstName: 'Тэмүүлэн',  lastName: 'Бат-Эрдэнэ', role: 'buyer' },
  { email: 'enkhjin@eland.mn',   phone: '+97699001006', password: 'Demo1234!', firstName: 'Энхжин',    lastName: 'Мөнх',     role: 'agent' },
];

// ─── 2. Demo үл хөдлөх ───
const PROPERTIES = [
  {
    title: 'Зайсан хотхон 3 өрөө орон сууц',
    description: 'Зайсан хотхонд байрлах, гадна тохижилт маш сайн, 3 өрөө бүрэн тохилог орон сууц. Тус хотхон нь 24 цагийн хамгаалалттай, хүүхдийн тоглоомын талбайтай, ногоон байгууламжтай. Сургууль, цэцэрлэг ойрхон. Хадгалах зоорийн давхарт машины зогсоолтой.',
    type: 'APARTMENT', transaction: 'SALE', price: 450000000, currency: 'MNT',
    totalArea: 98, livingArea: 82, rooms: 3, bedrooms: 2, bathrooms: 1,
    floor: 7, totalFloors: 16, buildingYear: 2020, parkingSpaces: 1,
    heating: 'CENTRAL', condition: 'EXCELLENT', furniture: 'FULLY_FURNISHED',
    balcony: true, elevator: true, security: true, playground: true,
    address: 'Зайсан хотхон, 5-р байр', city: 'Улаанбаатар', district: 'Хан-Уул', khoroo: '11-р хороо',
    latitude: 47.8864, longitude: 106.8975,
    amenities: [
      { name: 'Машины зогсоол', category: 'parking', icon: '🅿️' },
      { name: 'Хүүхдийн тоглоомын талбай', category: 'outdoor', icon: '🎠' },
      { name: '24 цагийн хамгаалалт', category: 'security', icon: '🔒' },
    ]
  },
  {
    title: 'Ривер Гарден 2 өрөө шинэ орон сууц',
    description: 'Ривер Гарден хотхон, Туул голын эрэгт байрлах. Шинэ засвартай, бүрэн тавилгатай. Агаар цэвэрлэгч, шалны халаалттай. Зуслан шиг орчинтой хотын төвийн орон сууц.',
    type: 'APARTMENT', transaction: 'SALE', price: 320000000, currency: 'MNT',
    totalArea: 72, livingArea: 60, rooms: 2, bedrooms: 1, bathrooms: 1,
    floor: 12, totalFloors: 20, buildingYear: 2023, parkingSpaces: 1,
    heating: 'CENTRAL', condition: 'NEW', furniture: 'PARTIALLY_FURNISHED',
    balcony: true, elevator: true, security: true, playground: true,
    address: 'Ривер Гарден, B байр', city: 'Улаанбаатар', district: 'Хан-Уул', khoroo: '1-р хороо',
    latitude: 47.8925, longitude: 106.908,
    amenities: [
      { name: 'Шалны халаалт', category: 'heating', icon: '🌡️' },
      { name: 'Гол руу харсан цонх', category: 'view', icon: '🌊' },
    ]
  },
  {
    title: 'Энхтайвны өргөн чөлөө, оффис',
    description: 'Энхтайвны өргөн чөлөөний гол замд харсан А зэрэглэлийн оффис. Нээлттэй талбай 200 м², хурлын өрөө 2, серверийн өрөөтэй. Паркинг 5 машины зогсоолтой.',
    type: 'OFFICE', transaction: 'RENT', price: 8500000, currency: 'MNT',
    totalArea: 200, rooms: 6, bathrooms: 2,
    floor: 3, totalFloors: 9, buildingYear: 2018, parkingSpaces: 5,
    heating: 'CENTRAL', condition: 'GOOD', furniture: 'PARTIALLY_FURNISHED',
    elevator: true, security: true,
    address: 'Энхтайвны өргөн чөлөө 22', city: 'Улаанбаатар', district: 'Баянгол', khoroo: '5-р хороо',
    latitude: 47.9118, longitude: 106.893,
    amenities: [
      { name: 'Хурлын өрөө', category: 'business', icon: '📊' },
      { name: 'Серверийн өрөө', category: 'tech', icon: '🖥️' },
      { name: 'Нээлттэй зогсоол', category: 'parking', icon: '🅿️' },
    ]
  },
  {
    title: 'Баянзүрх, хашаа байшин газартай',
    description: 'Баянзүрх дүүрэг, 13-р хороонд 500 м² газартай, 2 давхар хашаа байшин. Тус байшин нь 2019 онд баригдсан бөгөөд бүрэн засвартай, хийн халаалттай. Гараж, хашаа, худаг бүрэн.',
    type: 'HOUSE', transaction: 'SALE', price: 280000000, currency: 'MNT',
    totalArea: 150, livingArea: 120, landArea: 500, rooms: 5, bedrooms: 3, bathrooms: 2,
    totalFloors: 2, buildingYear: 2019, parkingSpaces: 2,
    heating: 'GAS', condition: 'GOOD', furniture: 'UNFURNISHED',
    garage: true, security: false,
    address: 'Баянзүрх дүүрэг, 13-р хороо', city: 'Улаанбаатар', district: 'Баянзүрх', khoroo: '13-р хороо',
    latitude: 47.9376, longitude: 106.9876,
    amenities: [
      { name: 'Гараж', category: 'parking', icon: '🏗️' },
      { name: 'Хийн халаалт', category: 'heating', icon: '🔥' },
      { name: 'Худаг', category: 'utility', icon: '💧' },
    ]
  },
  {
    title: 'Сүхбаатар дүүрэг, студио байр',
    description: 'Сүхбаатар дүүрэг, их сургуулиудад ойрхон студио байр. Оюутан, ажилтанд тохиромжтой. Метро станц хажууд, дэлгүүр ойр.',
    type: 'APARTMENT', transaction: 'RENT', price: 1200000, currency: 'MNT',
    totalArea: 35, livingArea: 28, rooms: 1, bedrooms: 1, bathrooms: 1,
    floor: 5, totalFloors: 12, buildingYear: 2021,
    heating: 'CENTRAL', condition: 'GOOD', furniture: 'FULLY_FURNISHED',
    balcony: false, elevator: true, security: true,
    address: 'Бага тойруу, 14-р байр', city: 'Улаанбаатар', district: 'Сүхбаатар', khoroo: '1-р хороо',
    latitude: 47.9213, longitude: 106.92,
    amenities: [
      { name: 'Интернет', category: 'utility', icon: '📶' },
      { name: 'Угаалгын машин', category: 'appliance', icon: '🧺' },
    ]
  },
  {
    title: 'Дархан хотод 4 өрөө байр',
    description: 'Дархан хотын төвд байрлах 4 өрөө орон сууц. Шинэчилсэн засвартай, сургууль, эмнэлэг ойр. Тайван орчин, цэвэр агаар.',
    type: 'APARTMENT', transaction: 'SALE', price: 120000000, currency: 'MNT',
    totalArea: 105, livingArea: 88, rooms: 4, bedrooms: 3, bathrooms: 1,
    floor: 3, totalFloors: 5, buildingYear: 2015,
    heating: 'CENTRAL', condition: 'GOOD', furniture: 'PARTIALLY_FURNISHED',
    balcony: true, elevator: false,
    address: 'Дархан хот, 7-р баг', city: 'Дархан', district: 'Дархан',
    latitude: 49.4684, longitude: 106.1862,
    amenities: [
      { name: 'Зоорийн давхар', category: 'storage', icon: '📦' },
    ]
  },
  {
    title: 'Чингэлтэй, худалдааны талбай',
    description: 'Чингэлтэй дүүрэг, нарантуульд ойрхон худалдааны зориулалттай 80 м² талбай. Том цонхтой, гол замд харсан. Жижиг дэлгүүр, кафе нээхэд тохиромжтой.',
    type: 'COMMERCIAL', transaction: 'RENT', price: 5000000, currency: 'MNT',
    totalArea: 80, rooms: 2, bathrooms: 1,
    floor: 1, totalFloors: 5, buildingYear: 2016,
    heating: 'CENTRAL', condition: 'FAIR',
    address: 'Нарантуулын зам 15', city: 'Улаанбаатар', district: 'Чингэлтэй', khoroo: '7-р хороо',
    latitude: 47.9268, longitude: 106.8735,
    amenities: [
      { name: 'Том витрин цонх', category: 'feature', icon: '🪟' },
      { name: 'Гол замд харсан', category: 'location', icon: '📍' },
    ]
  },
  {
    title: 'Налайх газрын зар, 1500 м²',
    description: 'Налайх дүүрэг, хилийн цэргийн ангийн ойролцоох 1500 м² газрын зар. Гэр хорооллын бүс, цахилгаан, ус залгагдсан. Амины сууц барих, аж ахуй эрхлэхэд тохиромжтой.',
    type: 'LAND', transaction: 'SALE', price: 45000000, currency: 'MNT',
    landArea: 1500,
    ownershipType: 'Өмчлөх', landUseType: 'Амины сууц',
    address: 'Налайх дүүрэг, 3-р хороо', city: 'Улаанбаатар', district: 'Налайх', khoroo: '3-р хороо',
    latitude: 47.7454, longitude: 107.2653,
    amenities: [
      { name: 'Цахилгаан залгагдсан', category: 'utility', icon: '⚡' },
      { name: 'Ус залгагдсан', category: 'utility', icon: '💧' },
    ]
  },
  {
    title: 'Skytel Town 5 өрөө пентхаус',
    description: 'Skytel Town хотхоны хамгийн дээд давхрын пентхаус. Гайхамшигтай хотын харагдац, 2 давхар, том террастай. Шalны халаалт, ухаалаг гэрийн систем, бүрэн тоноглогдсон гал тогоо.',
    type: 'APARTMENT', transaction: 'SALE', price: 1200000000, currency: 'MNT',
    totalArea: 250, livingArea: 210, rooms: 5, bedrooms: 4, bathrooms: 3,
    floor: 25, totalFloors: 25, buildingYear: 2022, parkingSpaces: 3,
    heating: 'CENTRAL', condition: 'EXCELLENT', furniture: 'FULLY_FURNISHED',
    balcony: true, elevator: true, security: true, playground: true,
    address: 'Skytel Town, A байр', city: 'Улаанбаатар', district: 'Сүхбаатар', khoroo: '8-р хороо',
    latitude: 47.9185, longitude: 106.9289,
    amenities: [
      { name: 'Террас', category: 'outdoor', icon: '🏖️' },
      { name: 'Ухаалаг гэрийн систем', category: 'tech', icon: '🏠' },
      { name: 'Бассейн (нийтийн)', category: 'amenity', icon: '🏊' },
      { name: 'Фитнесс заал', category: 'amenity', icon: '💪' },
    ]
  },
  {
    title: 'Сонгино хайрхан, агуулах 300 м²',
    description: 'Сонгино хайрхан дүүрэгт байрлах 300 м² агуулах. Том машин оруулах хаалгатай, ачих буулгах талбайтай. Логистик, хадгалалтын зориулалтад тохиромжтой.',
    type: 'WAREHOUSE', transaction: 'RENT', price: 3500000, currency: 'MNT',
    totalArea: 300, bathrooms: 1,
    totalFloors: 1, buildingYear: 2017,
    heating: 'NONE', condition: 'FAIR',
    address: 'СХД, 21-р хороо, аж ахуйн бүс', city: 'Улаанбаатар', district: 'Сонгино хайрхан', khoroo: '21-р хороо',
    latitude: 47.9087, longitude: 106.812,
    amenities: [
      { name: 'Том хаалга (3м)', category: 'feature', icon: '🚪' },
      { name: 'Ачих буулгах талбай', category: 'logistics', icon: '📦' },
    ]
  },
  {
    title: 'Эрдэнэт хотод хоёр давхар байшин',
    description: 'Эрдэнэт хотын төвийн бүсэд байрлах 2 давхар тохилог байшин. 600 м² хашаатай, гарааш, хүлэмжтэй. Гэр бүлд тохиромжтой, тайван хороолол.',
    type: 'HOUSE', transaction: 'SALE', price: 250000000, currency: 'MNT',
    totalArea: 180, livingArea: 150, landArea: 600, rooms: 6, bedrooms: 4, bathrooms: 2,
    totalFloors: 2, buildingYear: 2018, parkingSpaces: 2,
    heating: 'CENTRAL', condition: 'GOOD', furniture: 'PARTIALLY_FURNISHED',
    garage: true, playground: false,
    address: 'Эрдэнэт хот, 5-р баг', city: 'Эрдэнэт', district: 'Эрдэнэт',
    latitude: 49.0571, longitude: 104.1501,
    amenities: [
      { name: 'Хүлэмж', category: 'outdoor', icon: '🌿' },
      { name: 'Гарааш', category: 'parking', icon: '🏗️' },
    ]
  },
  {
    title: 'Токио Тайер байр, 1 өрөө',
    description: 'Токио Тайер хотхон, Баянзүрх дүүрэгт. Шинэ баригдсан 1 өрөө байр. Ажлын байранд ойр, тээвэрт тохиромжтой байршил. Дэлгүүр, зах ойр.',
    type: 'APARTMENT', transaction: 'SALE', price: 95000000, currency: 'MNT',
    totalArea: 42, livingArea: 35, rooms: 1, bedrooms: 1, bathrooms: 1,
    floor: 9, totalFloors: 18, buildingYear: 2024,
    heating: 'CENTRAL', condition: 'NEW', furniture: 'UNFURNISHED',
    balcony: true, elevator: true, security: true,
    address: 'Токио Тайер, 2-р байр', city: 'Улаанбаатар', district: 'Баянзүрх', khoroo: '25-р хороо',
    latitude: 47.928, longitude: 106.972,
    amenities: [
      { name: 'Шинэ барилга', category: 'feature', icon: '🏗️' },
    ]
  },
  {
    title: 'Хэнтий аймаг, зуслангийн газар',
    description: 'Хэнтий аймаг, Хэрлэн голын эрэгт байрлах зуслангийн зориулалттай 2000 м² газар. Модтой, усанд ойр, булаг шандтай. Зуслан, аялал жуулчлалд зориулсан.',
    type: 'LAND', transaction: 'SALE', price: 35000000, currency: 'MNT',
    landArea: 2000,
    ownershipType: 'Эзэмших', landUseType: 'Зуслан',
    address: 'Хэнтий аймаг, Хэрлэн сум', city: 'Хэрлэн', district: 'Хэрлэн',
    latitude: 47.3217, longitude: 109.0168,
    amenities: [
      { name: 'Голын эрэг', category: 'nature', icon: '🏞️' },
      { name: 'Модтой', category: 'nature', icon: '🌲' },
    ]
  },
  {
    title: 'Монполимер Таун, 2 өрөө шинэ',
    description: 'Монполимер Таун хотхон, Баянголын хамгийн сүүлийн үеийн орон сууцны хороолол. 2 өрөө бүрэн шинэ, засвар хийгдсэн. Дэлгүүр, номын сан, спортын талбай бүхий иж бүрэн дэд бүтэц.',
    type: 'APARTMENT', transaction: 'SALE', price: 185000000, currency: 'MNT',
    totalArea: 65, livingArea: 54, rooms: 2, bedrooms: 1, bathrooms: 1,
    floor: 4, totalFloors: 16, buildingYear: 2024,
    heating: 'CENTRAL', condition: 'NEW', furniture: 'UNFURNISHED',
    balcony: true, elevator: true, security: true, playground: true,
    address: 'Монполимер Таун, D блок', city: 'Улаанбаатар', district: 'Баянгол', khoroo: '20-р хороо',
    latitude: 47.9058, longitude: 106.862,
    amenities: [
      { name: 'Спортын талбай', category: 'amenity', icon: '⚽' },
      { name: 'Номын сан', category: 'amenity', icon: '📚' },
    ]
  },
  {
    title: 'Гачуурт, 250 м² газартай мод бетон байшин',
    description: 'Гачуурт тосгонд байрлах мод-бетон холимог байшин. 250 м² хашаатай, ногоон талбайтай. Амралтын газар, хот орчмын зуслан болгоход тохиромжтой.',
    type: 'HOUSE', transaction: 'SALE', price: 180000000, currency: 'MNT',
    totalArea: 100, livingArea: 80, landArea: 250, rooms: 3, bedrooms: 2, bathrooms: 1,
    totalFloors: 1, buildingYear: 2020,
    heating: 'WOOD', condition: 'GOOD', furniture: 'PARTIALLY_FURNISHED',
    address: 'Гачуурт тосгон', city: 'Улаанбаатар', district: 'Баянзүрх',
    latitude: 47.98, longitude: 107.05,
    amenities: [
      { name: 'Ногоон талбай', category: 'outdoor', icon: '🌳' },
    ]
  },
];

// ─── 3. Demo дуудлага худалдаа ───
function createAuctions(propertyIds: string[]) {
  const now = new Date();
  const future = (days: number) => new Date(now.getTime() + days * 86400000).toISOString();

  return [
    {
      propertyId: propertyIds[0], // Зайсан хотхон
      title: 'Зайсан хотхон 3 өрөө - дуудлага худалдаа',
      description: 'Зайсан хотхоны 3 өрөө орон сууцны дуудлага худалдаа. Эхлэх үнэ 400 сая ₮.',
      type: 'ENGLISH', startingPrice: 400000000, reservePrice: 430000000,
      bidIncrement: 5000000, buyNowPrice: 500000000,
      startTime: future(1), endTime: future(8),
      depositRequired: true, depositAmount: 20000000, depositPercent: 5,
      antiSnipingEnabled: true, antiSnipingMinutes: 5,
      isPublic: true, autoExtend: true, maxExtensions: 10,
      terms: 'Барьцааны мөнгийг дуудлага худалдааны өмнө төлсөн байх шаардлагатай.',
    },
    {
      propertyId: propertyIds[3], // Баянзүрх хашаа
      title: 'Баянзүрх хашаа байшин - нууц дуудлага',
      description: 'Баянзүрх дүүргийн хашаа байшингийн нууц дуудлага худалдаа.',
      type: 'SEALED', startingPrice: 250000000,
      bidIncrement: 10000000,
      startTime: future(3), endTime: future(10),
      depositRequired: true, depositPercent: 10,
      isPublic: true,
      terms: 'Нууц дуудлага - саналаа нэг удаа тавина.',
    },
    {
      propertyId: propertyIds[8], // Skytel пентхаус
      title: 'Skytel Town пентхаус - шилдэг дуудлага',
      description: 'Skytel Town хотхоны хамгийн шилдэг пентхаус байрны дуудлага худалдаа. Premium сегмент.',
      type: 'ENGLISH', startingPrice: 1000000000, reservePrice: 1100000000,
      bidIncrement: 20000000, buyNowPrice: 1500000000,
      startTime: future(2), endTime: future(14),
      depositRequired: true, depositAmount: 50000000,
      antiSnipingEnabled: true, antiSnipingMinutes: 10,
      isPublic: true, autoExtend: true, maxExtensions: 15,
      terms: 'Оролцогч нь KYC баталгаажуулалт хийсэн байх ёстой.',
    },
  ];
}

// ─── Main ───
async function main() {
  console.log('╔═══════════════════════════════════════════╗');
  console.log('║  ELAND Platform - Demo Data Seeder       ║');
  console.log('╚═══════════════════════════════════════════╝\n');

  // ── Step 1: Хэрэглэгчид бүртгэх + нэвтрэх ──
  console.log('📋 1. Хэрэглэгчид бүртгэж байна...');
  const tokens: string[] = [];
  const userIds: string[] = [];

  for (const u of USERS) {
    const regResult = await post(`${AUTH_URL}/auth/register`, u);
    if (regResult.data?.accessToken) {
      tokens.push(regResult.data.accessToken);
      // Get user info
      const me = await get(`${AUTH_URL}/auth/me`, regResult.data.accessToken);
      userIds.push(me.data?.id || '');
      console.log(`  ✅ ${u.firstName} ${u.lastName} (${u.role}) бүртгэгдлээ`);
    } else {
      // Already registered? Try login
      const loginResult = await post(`${AUTH_URL}/auth/login`, { email: u.email, password: u.password });
      if (loginResult.data?.accessToken) {
        tokens.push(loginResult.data.accessToken);
        const me = await get(`${AUTH_URL}/auth/me`, loginResult.data.accessToken);
        userIds.push(me.data?.id || '');
        console.log(`  ✅ ${u.firstName} ${u.lastName} (аль хэдийн бүртгэлтэй) нэвтэрлээ`);
      } else {
        tokens.push('');
        userIds.push('');
        console.log(`  ⚠️ ${u.firstName} ${u.lastName} - алдаа: ${regResult.message || 'unknown'}`);
      }
    }
  }

  const ownerToken = tokens[0] || tokens[3]; // Батбаяр эсвэл Оюука
  const agentToken = tokens[1] || tokens[5]; // Сарнай эсвэл Энхжин
  const buyerToken = tokens[2] || tokens[4]; // Түвшин эсвэл Тэмүүлэн

  // ── Step 2: Зарууд оруулах ──
  console.log('\n🏠 2. Зарууд оруулж байна...');
  const propertyIds: string[] = [];
  const creatorTokens = [
    ownerToken, ownerToken, agentToken, ownerToken, agentToken,  // 0-4
    ownerToken, agentToken, ownerToken, ownerToken, agentToken,  // 5-9
    ownerToken, agentToken, ownerToken, agentToken, ownerToken,  // 10-14
  ];

  for (let i = 0; i < PROPERTIES.length; i++) {
    const token = creatorTokens[i] || ownerToken;
    const result = await post(`${PROPERTY_URL}/properties`, PROPERTIES[i], token);
    const propId = result.data?.id;
    propertyIds.push(propId || '');
    if (propId) {
      // Publish
      await post(`${PROPERTY_URL}/properties/${propId}/publish`, {}, token);
      // Approve
      await post(`${PROPERTY_URL}/properties/${propId}/approve`, {}, token);
      console.log(`  ✅ #${i+1} "${PROPERTIES[i].title.slice(0, 30)}..." (${PROPERTIES[i].type})`);
    } else {
      console.log(`  ❌ #${i+1} "${PROPERTIES[i].title.slice(0, 30)}..." - алдаа`);
    }
  }

  // ── Step 3: Дуудлага худалдаа ──
  const validPropertyIds = propertyIds.filter(id => id);
  if (validPropertyIds.length >= 9) {
    console.log('\n🔨 3. Дуудлага худалдаа үүсгэж байна...');
    const auctions = createAuctions(propertyIds);
    for (const auction of auctions) {
      const result = await post(`${AUCTION_URL}/auctions`, auction, ownerToken);
      if (result.data?.id) {
        console.log(`  ✅ "${auction.title.slice(0, 40)}..."`);
      } else {
        console.log(`  ❌ "${auction.title.slice(0, 40)}..." - ${result.message || 'алдаа'}`);
      }
    }
  }

  // ── Summary ──
  console.log('\n╔═══════════════════════════════════════════╗');
  console.log('║  ✅ Demo өгөгдөл амжилттай оруулагдлаа!  ║');
  console.log('╠═══════════════════════════════════════════╣');
  console.log(`║  👥 Хэрэглэгч: ${USERS.length} бүртгэгдсэн             ║`);
  console.log(`║  🏠 Зар:       ${PROPERTIES.length} үүсгэгдсэн             ║`);
  console.log(`║  🔨 Дуудлага:  3 үүсгэгдсэн              ║`);
  console.log('╠═══════════════════════════════════════════╣');
  console.log('║  Demo нэвтрэх мэдээлэл:                  ║');
  console.log('║  📧 bat@eland.mn / Demo1234! (эзэмшигч)  ║');
  console.log('║  📧 sarnai@eland.mn / Demo1234! (агент)   ║');
  console.log('║  📧 tuvshin@eland.mn / Demo1234! (худ.авч)║');
  console.log('╚═══════════════════════════════════════════╝');
  console.log('\n🌐 http://localhost:3000 дээр шалгана уу!');
}

main().catch(console.error);
