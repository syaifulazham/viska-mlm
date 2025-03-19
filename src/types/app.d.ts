/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  // interface Error {}
  interface Locals {
    user?: {
      id: string;
      email: string;
      fullName: string;
      role: string;
    };
  }
  // interface PageData {}
  interface PageData {
    user?: {
      id: string;
      email: string;
      fullName: string;
      role: string;
    };
  }
  // interface Platform {}
}

// For Svelte components in TypeScript
declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    [key: string]: any;
  }
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
