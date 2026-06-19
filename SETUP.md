# MAVR App - Setup & Fix Documentation

## What Was Fixed

### 1. **Missing App Directory** ✅
The project was missing the `/app` directory (Next.js 16 App Router), which is critical for the application to run.
- Created `/app` directory structure
- Added `app/layout.tsx` - Root layout with metadata
- Added `app/page.tsx` - Homepage with cinematic hero and sections
- Added `app/not-found.tsx` - 404 page

### 2. **Missing Blog Routes** ✅
Blog pages were not accessible because routes weren't defined.
- Created `app/blog/page.tsx` - Blog listing page
- Created `app/blog/[slug]/page.tsx` - Individual blog post page

### 3. **Missing Admin Routes** ✅
Admin dashboard and authentication pages were missing.
- Created `app/login/page.tsx` - Login page for admin
- Created `app/admin/page.tsx` - Admin dashboard

### 4. **Missing Global CSS** ✅
Styling and Tailwind configuration was missing.
- Created `src/assets/globals.css` with Tailwind setup and custom utility classes
- Configured semantic design tokens and component classes

### 5. **Missing Environment Variables** ✅
Database and authentication configuration was incomplete.
- Added `DATABASE_URL` for PostgreSQL connection
- Added `JWT_SECRET` for token signing
- Added `FORMSPREE_FORM_ID` for form submissions

### 6. **Missing Sections Export** ✅
The Sections component wasn't properly exported from sections.tsx.
- Added export function that combines all section components

## Project Structure

```
mavr-app/
├── app/                          # Next.js 16 App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # 404 page
│   ├── login/
│   │   └── page.tsx             # Login page
│   ├── admin/
│   │   └── page.tsx             # Admin dashboard
│   └── blog/
│       ├── page.tsx             # Blog listing
│       └── [slug]/
│           └── page.tsx         # Blog post detail
│
├── src/
│   ├── components/              # React components
│   ├── actions/                 # Server actions (auth, blog)
│   ├── lib/                     # Utility functions & config
│   ├── assets/                  # Images & styling
│   └── hooks/                   # Custom React hooks
│
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Database migrations
│
└── middleware.ts               # Next.js middleware for auth
```

## Key Features

### ✅ Frontend
- Cinematic hero section with video backgrounds
- Interactive food database search with Indian cuisine
- Achievement calculator with dynamic scoring
- Referral leaderboard system
- FAQ accordion component
- Responsive design with Tailwind CSS

### ✅ Backend
- PostgreSQL database with Prisma ORM
- Server actions for authentication and blog management
- JWT-based admin authentication
- Secure password hashing with bcryptjs
- Cookie-based session management

### ✅ Blog System
- Create, read, and publish blog posts
- Markdown/HTML content support
- SEO-friendly slug generation
- Author and publication date tracking
- Dynamic blog listing and detail pages

### ✅ Admin Panel
- Protected routes with middleware authentication
- Dashboard with quick statistics
- Blog management interface
- Settings area (ready for expansion)

## Environment Variables

Set these in `.env.development.local`:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mavr"
JWT_SECRET="your_secret_key_here"
FORMSPREE_FORM_ID="your_form_id"
```

## Running Locally

```bash
# Install dependencies
bun install

# Generate Prisma Client
bunx prisma generate

# Start development server
bun run dev
```

The app will be available at `http://localhost:3000`

## Database Setup

1. Ensure PostgreSQL is running locally
2. Create a database named `mavr`:
   ```sql
   CREATE DATABASE mavr;
   ```
3. Run migrations (if any):
   ```bash
   bunx prisma migrate dev
   ```
4. The schema includes:
   - Users table (with roles: ADMIN, EDITOR, AUTHOR)
   - Posts table (with slug, content, published status)
   - Categories and Tags (for future expansion)

## Testing

- **Homepage**: http://localhost:3000
- **Blog**: http://localhost:3000/blog
- **Login**: http://localhost:3000/login (use admin@mavr.in)
- **Admin**: http://localhost:3000/admin (protected route)
- **404**: http://localhost:3000/nonexistent

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: PostgreSQL + Prisma ORM
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: JWT + bcryptjs
- **UI Components**: shadcn/ui + Radix UI
- **Package Manager**: Bun

## Common Issues & Solutions

### "Couldn't find any app directory"
✅ Fixed - App directory structure is now complete

### Database connection errors
- Ensure PostgreSQL is running locally
- Check DATABASE_URL in .env.development.local
- Verify database exists

### Authentication errors
- Ensure JWT_SECRET is set in .env.development.local
- First login with admin@mavr.in creates admin account
- Cookies are stored in browser (httpOnly, secure in production)

## Next Steps

- Set up live database (Neon, Supabase, or managed PostgreSQL)
- Configure Formspree for form submissions
- Add more pages (About, Ecosystem, Build Log, Investors)
- Set up CI/CD pipeline
- Deploy to Vercel
