# MAVR App - Quick Start Guide

## 🚀 Getting Started (2 minutes)

### Prerequisites
- Node.js 18+ or Bun installed
- PostgreSQL running locally

### Step 1: Install Dependencies
```bash
cd /vercel/share/v0-project
bun install
```

### Step 2: Set Up Database
```bash
# Create PostgreSQL database
createdb mavr

# Run migrations (if any exist)
bunx prisma migrate dev
```

### Step 3: Start Development Server
```bash
bun run dev
```

The app is now running at **http://localhost:3000** ✅

---

## 📍 What's Accessible

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Homepage with hero & sections | ✅ Working |
| `/blog` | Blog listing page | ✅ Working |
| `/blog/[slug]` | Blog post detail | ✅ Working |
| `/login` | Admin login | ✅ Working |
| `/admin` | Admin dashboard | ✅ Protected |
| `/*` | 404 page | ✅ Working |

---

## 🔐 Admin Access

### First Login
1. Go to http://localhost:3000/login
2. Enter email: **admin@mavr.in**
3. Enter any password
4. On first login, an admin account is automatically created

### Subsequent Logins
- Use the same credentials created on first login

---

## 🗄️ Database Schema

### Users Table
```
id: UUID (primary key)
email: String (unique)
password: String (hashed)
name: String (optional)
role: Enum (ADMIN, EDITOR, AUTHOR)
createdAt: DateTime
updatedAt: DateTime
```

### Posts Table
```
id: UUID (primary key)
title: String
slug: String (unique)
content: Text (HTML/Markdown)
excerpt: Text (optional)
published: Boolean (default: false)
publishedAt: DateTime (optional)
authorId: UUID (foreign key to Users)
categoryId: UUID (optional, foreign key)
createdAt: DateTime
updatedAt: DateTime
```

### Categories & Tags
Available for future expansion

---

## 📝 Creating Blog Posts

### Via Server Actions
The `createPost` server action in `src/actions/blog.ts` handles post creation. It:
- Auto-generates slug from title
- Ensures slug uniqueness with timestamp suffix
- Creates post as published
- Stores author as first admin user
- Clears cache for all related pages

### Using Direct Database Access
```typescript
import prisma from '@/lib/prisma';

await prisma.post.create({
  data: {
    title: "My Post",
    slug: "my-post-123",
    content: "<p>Post content</p>",
    excerpt: "Summary",
    published: true,
    publishedAt: new Date(),
    authorId: adminUserId,
  }
});
```

---

## 🔑 Environment Variables

Create `.env.development.local`:
```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mavr"

# Authentication
JWT_SECRET="your-secret-key-min-32-chars-long"

# Forms (Optional)
FORMSPREE_FORM_ID="xpqnlgvl"
```

---

## 🛠️ Development Commands

```bash
# Start dev server with hot reload
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run linter
bun run lint

# Format code
bun run format

# Generate Prisma Client
bunx prisma generate

# Open Prisma Studio (database GUI)
bunx prisma studio
```

---

## 📱 Testing the App

### Homepage
- Click "Join Waitlist" to test form
- Scroll through sections with animations
- View achievements calculator
- Check leaderboard

### Blog
- View blog posts (empty until posts are created)
- Click on a post to see detail page
- Back button to return to listing

### Admin
1. Login at `/login`
2. Access dashboard at `/admin`
3. See quick action cards
4. Manage blog posts

---

## 🐛 Troubleshooting

### "Connection refused" on localhost:5432
- PostgreSQL is not running
- Start PostgreSQL: `brew services start postgresql` (macOS)

### "ECONNREFUSED" in browser
- Dev server crashed or didn't start
- Check terminal for errors
- Run `bun run dev` again

### "JWT_SECRET is not set"
- Missing environment variable
- Add JWT_SECRET to `.env.development.local`

### "Database does not exist"
- Run: `createdb mavr`
- Or check DATABASE_URL in .env.development.local

---

## 📚 File Structure Overview

```
app/                    # Next.js 16 routes (NEW - THIS IS WHAT WAS ADDED)
├── layout.tsx         # Root HTML structure
├── page.tsx           # Homepage
├── not-found.tsx      # 404 fallback
├── login/page.tsx     # Login form
├── admin/page.tsx     # Protected dashboard
└── blog/
    ├── page.tsx       # Blog listing
    └── [slug]/page.tsx # Blog post detail

src/
├── components/        # Reusable React components
├── actions/          # Server actions (forms, DB operations)
├── lib/              # Utilities (auth, database, Prisma)
├── hooks/            # Custom React hooks
└── assets/           # Images and global styles

prisma/
├── schema.prisma     # Database schema definition
└── migrations/       # Database migration files
```

---

## ✅ Verification Checklist

- [x] App directory created with all routes
- [x] Global CSS and styling configured
- [x] Database schema set up
- [x] Authentication system implemented
- [x] Blog system functional
- [x] Admin dashboard accessible
- [x] Environment variables configured
- [x] Dev server running successfully
- [x] All pages accessible via browser
- [x] Forms integrated with Formspree

---

## 🚀 Next Steps

1. **Connect real database**: Replace local PostgreSQL with Neon or Supabase
2. **Deploy**: Push to GitHub and deploy to Vercel
3. **Add more pages**: Ecosystem, About, Build Log, Investors
4. **Configure domain**: Set up custom domain
5. **Enable analytics**: Vercel Analytics already integrated

---

## 💡 Tips

- Use `bunx prisma studio` to browse and edit database directly
- Check `middleware.ts` for auth route protection logic
- Animations use Framer Motion - customize in components
- Tailwind v4 configured - modify `src/assets/globals.css` for theme

---

## 📞 Support

All code is documented with comments. Key files:
- `src/lib/auth.ts` - JWT token management
- `src/lib/prisma.ts` - Database client setup
- `src/actions/auth.ts` - Login/logout logic
- `src/actions/blog.ts` - Blog CRUD operations

Have questions? Check the SETUP.md for more details.
