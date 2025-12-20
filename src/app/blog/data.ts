export type BlogPost = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  minutes: number;
  date: string; // ISO date
  image: string;
  content?: string;
};

export const posts: BlogPost[] = [
  {
    id: "ultimate-waterproofing",
    category: "Design",
    title: "Ultimate Guide to Bathroom Waterproofing",
    excerpt: "Protect your walls and floors with proper waterproofing techniques.",
    minutes: 7,
    date: "2025-12-10",
    image: "/assets/insight/2.jpg",
    content:
      "Learn the essentials of bathroom waterproofing including planning, materials, and best practices to ensure a long-lasting, mold-resistant finish.",
  },
  {
    id: "tile-maintenance-basics",
    category: "Maintenance",
    title: "Tile Maintenance Basics",
    excerpt: "Keep your tiles looking brand new with easy maintenance routines.",
    minutes: 5,
    date: "2025-12-15",
    image: "/assets/insight/3.jpg",
    content:
      "Simple weekly routines and periodic deep cleaning tips to preserve tile sheen and grout integrity without harsh chemicals.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.id === slug);
}
