import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 既存のデータをクリア
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});

  await prisma.user.create({
    data: {
      email: "test@example.com",
      name: "Test User",
    },
  });

  await prisma.post.create({
    data: {
      title: "Test Post",
      content: "Test Content",
    },
  });
}

main()
  .catch((e) => {
    console.error("シードデータの作成中にエラーが発生しました:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
