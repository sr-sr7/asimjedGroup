import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(url, anon);
export const supabaseAdmin = createClient(url, service);

export type Project = {
  id: string;
  title: string;
  description: string;
  category: "web" | "app" | "design";
  tags: string[];
  color: string;
  image_url?: string;
  live_url?: string;
  github_url?: string;
  created_at: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  cover_image?: string;
  category: string;
  published: boolean;
  created_at: string;
};

export type ContactRequest = {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
};
