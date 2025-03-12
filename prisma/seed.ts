// primsa.対象テーブル名.メソッド のように記述 
import { PrismaClient } from '@prisma/client' // PrismaClientをインポート
import * as bcrypt from 'bcryptjs' // bcryptをインポート

const prisma = new PrismaClient() // PrismaClientのインスタンスを作成
async function main() { 
    // クリーンアップ 
    await prisma.post.deleteMany()   
    await prisma.user.deleteMany()   
    const hashedPassword = await bcrypt.hash('password123', 12) // 暗号化  

    // ダミー画像のURL
    const dummyImages = [ 'https://picsum.photos/seed/post1/600/400',   
    'https://picsum.photos/seed/post2/600/400' 
    ] 
  
    // ユーザーの作成
    const user = await prisma.user.create({
        data: {
            email: 'test@example.com',
            name: 'Test User',
            password: hashedPassword,
            posts: {
                create: [
                    {
                        title: '初めてのブログ投稿',
                        content: 'これは最初のブログ投稿です。Next.jsとPrismaでブログを作成しています。',
                        topImage: dummyImages[0],
                        published: true,
                    },
                    {
                        title: '２番目のブログ投稿',
                        content: 'ブログの機能を少しずつ追加していきます。認証機能やダッシュボードなども実装予定です。',
                        topImage: dummyImages[1],
                        published: true,
                    }]} }
    })
    console.log({ user });
}
  
main().catch((e) => { console.error(e); process.exit(1); }) 
  .finally(async () => {  await prisma.$disconnect()  });

