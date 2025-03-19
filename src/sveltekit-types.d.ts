/// <reference types="@sveltejs/kit" />

// Declare SvelteKit module types
declare module '$app/navigation' {
  export function goto(
    href: string,
    opts?: {
      replaceState?: boolean;
      noscroll?: boolean;
      keepfocus?: boolean;
      state?: any;
    }
  ): Promise<void>;
  
  export function invalidate(url: string): Promise<void>;
  export function prefetch(href: string): Promise<void>;
  export function prefetchRoutes(hrefs?: string[]): Promise<void>;
}

declare module '$app/environment' {
  export const browser: boolean;
  export const dev: boolean;
  export const building: boolean;
  export const version: string;
}

declare module '$app/stores' {
  import { Readable } from 'svelte/store';
  
  export const page: Readable<{
    url: URL;
    params: Record<string, string>;
    routeId: string | null;
    status: number;
    error: Error | null;
    data: Record<string, any>;
    form: Record<string, any> | null;
  }>;
  
  export const navigating: Readable<{
    from: {
      url: URL;
      params: Record<string, string>;
      routeId: string | null;
    } | null;
    to: {
      url: URL;
      params: Record<string, string>;
      routeId: string | null;
    } | null;
  } | null>;
  
  export const updated: Readable<{
    url: URL;
    type: 'init' | 'update';
  }>;
}

declare module '$env/static/public' {
  export const PUBLIC_SUPABASE_URL: string;
  export const PUBLIC_SUPABASE_ANON_KEY: string;
  export const PUBLIC_APP_URL: string;
}
