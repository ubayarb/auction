import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

const roles = [
  { name: 'BUYER', displayName: 'Худалдан авагч', description: 'Худалдан авагч' },
  { name: 'OWNER', displayName: 'Эзэмшигч', description: 'Үл хөдлөх хөрөнгийн эзэмшигч' },
  { name: 'AGENT', displayName: 'Агент', description: 'Зуучлагч агент' },
  { name: 'COMPANY', displayName: 'Компани', description: 'Үл хөдлөх хөрөнгийн компани' },
  { name: 'BANK', displayName: 'Банк', description: 'Банк / Санхүүгийн байгууллага' },
  { name: 'NOTARY', displayName: 'Нотариат', description: 'Нотариатч' },
  { name: 'GOVERNMENT', displayName: 'Засгийн газар', description: 'Засгийн газрын байгууллага' },
  { name: 'ADMIN', displayName: 'Админ', description: 'Системийн админ' },
];

const permissions = [
  // Property
  { name: 'property:create', resource: 'property', action: 'create', description: 'Зар нэмэх' },
  { name: 'property:read', resource: 'property', action: 'read', description: 'Зар харах' },
  { name: 'property:update', resource: 'property', action: 'update', description: 'Зар засах' },
  { name: 'property:delete', resource: 'property', action: 'delete', description: 'Зар устгах' },
  { name: 'property:approve', resource: 'property', action: 'approve', description: 'Зар баталгаажуулах' },
  { name: 'property:verify', resource: 'property', action: 'verify', description: 'Зар шалгах' },
  // Auction
  { name: 'auction:create', resource: 'auction', action: 'create', description: 'Дуудлага худалдаа үүсгэх' },
  { name: 'auction:bid', resource: 'auction', action: 'bid', description: 'Үнийн санал өгөх' },
  { name: 'auction:manage', resource: 'auction', action: 'manage', description: 'Дуудлага худалдаа удирдах' },
  // Contract
  { name: 'contract:create', resource: 'contract', action: 'create', description: 'Гэрээ үүсгэх' },
  { name: 'contract:sign', resource: 'contract', action: 'sign', description: 'Гэрээ гарын үсэг зурах' },
  { name: 'contract:notarize', resource: 'contract', action: 'notarize', description: 'Гэрээ нотариатаар батлах' },
  // Payment
  { name: 'payment:process', resource: 'payment', action: 'process', description: 'Төлбөр боловсруулах' },
  { name: 'escrow:manage', resource: 'escrow', action: 'manage', description: 'Эскро удирдах' },
  // User
  { name: 'user:manage', resource: 'user', action: 'manage', description: 'Хэрэглэгч удирдах' },
  { name: 'user:kyc_verify', resource: 'user', action: 'kyc_verify', description: 'KYC баталгаажуулах' },
  // Admin
  { name: 'admin:dashboard', resource: 'admin', action: 'dashboard', description: 'Админ хяналтын самбар' },
  { name: 'admin:reports', resource: 'admin', action: 'reports', description: 'Тайлан харах' },
  { name: 'admin:settings', resource: 'admin', action: 'settings', description: 'Системийн тохиргоо' },
];

const rolePermissions: Record<string, string[]> = {
  BUYER: ['property:read', 'auction:bid', 'contract:sign', 'payment:process'],
  OWNER: ['property:create', 'property:read', 'property:update', 'property:delete', 'auction:create', 'contract:create', 'contract:sign', 'payment:process'],
  AGENT: ['property:create', 'property:read', 'property:update', 'auction:create', 'contract:create', 'contract:sign'],
  COMPANY: ['property:create', 'property:read', 'property:update', 'property:delete', 'auction:create', 'auction:manage', 'contract:create', 'contract:sign'],
  BANK: ['property:read', 'escrow:manage', 'payment:process', 'contract:sign'],
  NOTARY: ['property:read', 'contract:notarize', 'contract:sign'],
  GOVERNMENT: ['property:read', 'property:verify', 'admin:reports'],
  ADMIN: permissions.map((p) => p.name),
};

async function main() {
  console.log('🌱 Seed эхэллээ...');

  // Roles үүсгэх
  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: { description: role.description },
      create: role,
    });
  }
  console.log(`✅ ${roles.length} роль үүсгэлээ`);

  // Permissions үүсгэх
  for (const perm of permissions) {
    await prisma.permission.upsert({
      where: { name: perm.name },
      update: { description: perm.description },
      create: perm,
    });
  }
  console.log(`✅ ${permissions.length} зөвшөөрөл үүсгэлээ`);

  // Role-Permission mapping
  for (const [roleName, permNames] of Object.entries(rolePermissions)) {
    const role = await prisma.role.findUnique({ where: { name: roleName } });
    if (!role) continue;

    for (const permName of permNames) {
      const perm = await prisma.permission.findUnique({ where: { name: permName } });
      if (!perm) continue;

      await prisma.rolePermission.upsert({
        where: {
          roleId_permissionId: { roleId: role.id, permissionId: perm.id },
        },
        update: {},
        create: { roleId: role.id, permissionId: perm.id },
      });
    }
  }
  console.log('✅ Роль-зөвшөөрлийн хамаарал үүсгэлээ');

  // Admin хэрэглэгч үүсгэх
  const bcrypt = await import('bcryptjs');
  const adminPassword = await bcrypt.hash('Admin@123', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@eland.mn' },
    update: {},
    create: {
      email: 'admin@eland.mn',
      phone: '+97699999999',
      passwordHash: adminPassword,
      status: 'ACTIVE',
      kycStatus: 'VERIFIED',
      emailVerified: true,
      phoneVerified: true,
      profile: {
        create: {
          firstName: 'System',
          lastName: 'Admin',
        },
      },
    },
  });

  const adminRole = await prisma.role.findUnique({ where: { name: 'ADMIN' } });
  if (adminRole) {
    await prisma.userRole.upsert({
      where: {
        userId_roleId: { userId: admin.id, roleId: adminRole.id },
      },
      update: {},
      create: { userId: admin.id, roleId: adminRole.id },
    });
  }
  console.log('✅ Админ хэрэглэгч үүсгэлээ (admin@eland.mn / Admin@123)');

  console.log('🎉 Seed амжилттай дууслаа!');
}

main() // NOSONAR
  .catch((e) => {
    console.error('❌ Seed алдаа:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
