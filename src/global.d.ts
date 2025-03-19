/// <reference types="svelte" />

// For Svelte components in TypeScript
declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    [key: string]: any;
  }
}

// For SvelteKit
declare namespace App {
  interface Locals {
    user?: {
      id: string;
      email: string;
      fullName: string;
      role: string;
    };
  }

  interface PageData {
    user?: {
      id: string;
      email: string;
      fullName: string;
      role: string;
    };
  }

  interface Error {
    message: string;
    code?: string;
  }

  interface Platform {}
}

// For Svelte Native JSX
declare namespace svelteNative.JSX {
  interface ElementClass {
    $$prop_def: any;
  }
  interface ElementAttributesProperty {
    $$prop_def: any;
  }
  interface IntrinsicElements {
    [name: string]: any;
  }
}

// For bcryptjs
declare module 'bcryptjs' {
  export function genSalt(rounds?: number): Promise<string>;
  export function hash(s: string, salt: string | number): Promise<string>;
  export function compare(s: string, hash: string): Promise<boolean>;
  export function genSaltSync(rounds?: number): string;
  export function hashSync(s: string, salt: string | number): string;
  export function compareSync(s: string, hash: string): boolean;
}
