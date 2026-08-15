import bcrypt from "bcryptjs";

export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string | null;
  authorId: string;
  author?: User;
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
};

// Global in-memory storage to persist across hot reloads in development
declare global {
  var inMemoryUsers: User[] | undefined;
  var inMemoryPosts: Post[] | undefined;
}

const DEFAULT_USERS: User[] = [];
const DEFAULT_POSTS: Post[] = [
  {
    id: "post_1",
    slug: "philosophy-of-athlete-operating-system",
    title: "The Philosophy of the Athlete Operating System",
    excerpt: "Why standard fitness apps fail the modern Indian athlete, and how MAVR is building a unified infrastructure layer for training, nutrition, and recovery.",
    content: `
      <p>Look at any fitness app on your phone right now. You will notice a recurring theme: they are built for the casual user who wants to track steps or count calories. But for the serious athlete, this is not enough. You do not just need to count steps; you need to track discipline, progression, nutrition, and recovery in sync.</p>
      
      <h2>The Fragmentation Problem</h2>
      <p>Today, the training journey of a serious gym-goer is completely fragmented. You log your workouts in a notes app, you manage your diet in a tracking app with an outdated database, your coach sends you plans via WhatsApp voice notes, and your recovery metrics stay locked inside your smart watch. This is a mess of screenshots, lost links, and disjointed statistics.</p>
      
      <p><strong>MAVR is the first Athlete Operating System built to solve this fragmentation.</strong></p>
      
      <h2>Three Pillars of the OS</h2>
      <ol>
        <li><strong>Unified Tracking:</strong> Log sets, reps, load, RPE, and macro-nutrition inside a single premium interface.</li>
        <li><strong>Coach Connect:</strong> A real-time link between athletes and trainers. Edit a plan on the dashboard, and it updates in the athlete's app in under 500 milliseconds.</li>
        <li><strong>The Identity Layer:</strong> A unique MAVR ID that serves as your athletic badge. Earn achievements, level up, and find training partners based on proof of work, not social media clout.</li>
      </ol>
      
      <p>By connecting these pillars, MAVR helps you training harder, track better, and progress faster. It is time to upgrade your system.</p>
    `,
    authorId: "user_admin",
    published: true,
    publishedAt: new Date("2026-08-10T12:00:00Z"),
    createdAt: new Date("2026-08-10T12:00:00Z")
  },
  {
    id: "post_2",
    slug: "cracking-the-macro-code-indian-nutrition",
    title: "Cracking the Macro Code in Indian Nutrition",
    excerpt: "No more guessing how many macros are in your home-cooked meals. We look at why tracking dal chawal, paneer, and roti has been notoriously difficult and how we resolved it.",
    content: `
      <p>If you have ever tried to hit 150 grams of protein while eating home-cooked Indian meals, you know the frustration. You search for "dal tadka" in a popular app and get 200 different entries ranging from 50 calories to 500 calories. One entry says 2g of protein, another says 15g. How do you track accurately?</p>
      
      <h2>The Complexity of Indian Cooking</h2>
      <p>Indian cooking is not standardized. The macros in a bowl of dal depend heavily on the oil/ghee used for tempering, the variety of lentils, and cooking styles across regions. Furthermore, standard databases rely heavily on western food items, making local food tracking a guessing game.</p>
      
      <h2>How MAVR Standardizes Nutrition</h2>
      <p>Our team spent months working with sports nutritionists to build India's most accurate database of local foods. We split entries into raw and cooked states, providing clear guidance on standard serving sizes (like cups, plates, rotis, and standard bowls).</p>
      <p>Inside the database, you'll find accurate macros for:</p>
      <ul>
        <li>Roti (different grains: wheat, ragi, jowar)</li>
        <li>Dal (Makhani, Tadka, Masoor, Moong)</li>
        <li>Paneer dishes (Bhurji, Tikka, Raw)</li>
        <li>Local breakfasts (Poha, Idli, Upma, Dosa)</li>
      </ul>
      
      <p>With MAVR, tracking your macros is as simple as logging your workout. No more guessing, just pure, clean progress.</p>
    `,
    authorId: "user_admin",
    published: true,
    publishedAt: new Date("2026-08-12T09:30:00Z"),
    createdAt: new Date("2026-08-12T09:30:00Z")
  },
  {
    id: "post_3",
    slug: "science-behind-performance-compression-gear",
    title: "The Science Behind Performance Compression Gear",
    excerpt: "How premium performance gear improves blood flow, reduces muscle oscillation, and accelerates recovery times under extreme training loads.",
    content: `
      <p>Compression gear is not a fashion statement. For the dedicated athlete, it is a tool designed to increase recovery, enhance performance, and protect joints. Let's look at the actual physiological science behind why high-quality compression gear works.</p>
      
      <h2>1. Venous Return and Blood Circulation</h2>
      <p>During heavy lifting or high-intensity sprints, your muscles require oxygen-rich blood. Compression garments apply graduated pressure—tighter at the extremities—which helps veins return blood back to the heart. This increases oxygen delivery to active muscle tissue and speeds up the removal of lactic acid.</p>
      
      <h2>2. Muscle Oscillation Reduction</h2>
      <p>Every time your foot hits the ground or you lift a weight, a shockwave travels through your muscle fibers. This is called muscle oscillation, and it is a leading cause of micro-tears and soreness (DOMS). Quality compression wraps the muscle groups tightly, reducing vibration and preventing early fatigue.</p>
      
      <h2>3. Temperature Regulation in Indian Climates</h2>
      <p>Many athletes avoid compression gear because of the heat. That is why MAVR compression is built using a custom polyamide-elastane blend that wicks moisture away from the skin and provides a cooling effect, even in hot Indian gym environments.</p>
      
      <p>Combined with our MAVR Pro software suite, MAVR apparel closes the loop between physical gear and digital performance metrics.</p>
    `,
    authorId: "user_admin",
    published: true,
    publishedAt: new Date("2026-08-14T15:15:00Z"),
    createdAt: new Date("2026-08-14T15:15:00Z")
  }
];

if (!globalThis.inMemoryUsers) {
  // Hash password for default admin
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync("admin123", salt);
  globalThis.inMemoryUsers = [
    {
      id: "user_admin",
      email: "admin@mavr.in",
      password: passwordHash,
      name: "MAVR Admin",
      role: "ADMIN",
      createdAt: new Date()
    }
  ];
}

if (!globalThis.inMemoryPosts) {
  globalThis.inMemoryPosts = DEFAULT_POSTS;
}

export const db = {
  users: {
    findUnique: async (query: { where: { email: string } }) => {
      const users = globalThis.inMemoryUsers || [];
      const user = users.find((u) => u.email.toLowerCase() === query.where.email.toLowerCase());
      return user || null;
    },
    findFirst: async (query: { where: { role: "ADMIN" } }) => {
      const users = globalThis.inMemoryUsers || [];
      const user = users.find((u) => u.role === query.where.role);
      return user || null;
    },
    count: async () => {
      return (globalThis.inMemoryUsers || []).length;
    },
    create: async (query: { data: { email: string; passwordHash?: string; password?: string; name: string; role: "ADMIN" | "USER" } }) => {
      const users = globalThis.inMemoryUsers || [];
      const newUser: User = {
        id: "user_" + Math.random().toString(36).slice(2, 9),
        email: query.data.email,
        password: query.data.passwordHash || query.data.password || "",
        name: query.data.name,
        role: query.data.role,
        createdAt: new Date()
      };
      users.push(newUser);
      globalThis.inMemoryUsers = users;
      return newUser;
    }
  },
  posts: {
    findMany: async (options?: { orderBy?: { createdAt: "desc" | "asc" } }) => {
      let posts = [...(globalThis.inMemoryPosts || [])];
      if (options?.orderBy?.createdAt === "desc") {
        posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      } else {
        posts.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
      }
      // Populate author
      const users = globalThis.inMemoryUsers || [];
      posts = posts.map(p => ({
        ...p,
        author: users.find(u => u.id === p.authorId)
      }));
      return posts;
    },
    findUnique: async (query: { where: { slug: string } }) => {
      const posts = globalThis.inMemoryPosts || [];
      const post = posts.find((p) => p.slug === query.where.slug);
      if (!post) return null;
      const users = globalThis.inMemoryUsers || [];
      return {
        ...post,
        author: users.find(u => u.id === post.authorId)
      };
    },
    create: async (query: { data: { title: string; slug: string; content: string; excerpt?: string; authorId: string; published: boolean; publishedAt: Date } }) => {
      const posts = globalThis.inMemoryPosts || [];
      const newPost: Post = {
        id: "post_" + Math.random().toString(36).slice(2, 9),
        slug: query.data.slug,
        title: query.data.title,
        content: query.data.content,
        excerpt: query.data.excerpt || null,
        authorId: query.data.authorId,
        published: query.data.published,
        publishedAt: query.data.publishedAt,
        createdAt: new Date()
      };
      posts.push(newPost);
      globalThis.inMemoryPosts = posts;
      
      const users = globalThis.inMemoryUsers || [];
      return {
        ...newPost,
        author: users.find(u => u.id === newPost.authorId)
      };
    }
  }
};
