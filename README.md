# Next.js + Hono + Prisma プロトタイプテンプレート

このプロジェクトは、Next.js、Hono、Prisma を使用した高速プロトタイピングのためのテンプレートです。

## 機能

- **Next.js 15**: React フレームワーク
- **Hono**: 高速な Web フレームワーク
- **Prisma**: タイプセーフな ORM とデータベース操作
- **SQLite**: 開発用データベース（他のデータベースにも簡単に切り替え可能）
- **Zod**: スキーマ検証

## 始め方

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

サーバーが起動したら、[http://localhost:3000](http://localhost:3000) にアクセスしてください。

## データベース操作

このプロジェクトでは Prisma を使用してデータベースを操作します。初期設定では SQLite を使用していますが、PostgreSQL、MySQL、SQL Server、MongoDB、CockroachDB など他のデータベースにも簡単に切り替えることができます。

### データベースの変更方法

1. `prisma/schema.prisma` ファイルの `datasource` ブロックを編集します:

```prisma
datasource db {
  provider = "postgresql" // または "mysql", "sqlserver", "mongodb", "cockroachdb"
  url      = env("DATABASE_URL")
}
```

2. `.env` ファイルの `DATABASE_URL` を変更します:

```
# PostgreSQLの例
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"

# MySQLの例
DATABASE_URL="mysql://username:password@localhost:3306/mydb"
```

3. マイグレーションを実行します:

```bash
npx prisma migrate dev --name init
```

## API エンドポイント

このテンプレートには以下の API エンドポイントが含まれています:

- `GET /api/users`: ユーザー一覧の取得
- `POST /api/users`: 新しいユーザーの作成
- `GET /api/posts`: 投稿一覧の取得
- `POST /api/posts`: 新しい投稿の作成

## Prisma スタジオの使用

Prisma スタジオを使用してデータベースを視覚的に管理できます:

```bash
npx prisma studio
```

ブラウザで [http://localhost:5555](http://localhost:5555) にアクセスしてデータベースを管理できます。
