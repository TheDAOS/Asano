// Type declarations for importing CSS/SCSS files in TypeScript
// Place this file at the repo root (e.g. `types/css.d.ts`) so tsc picks it up.

declare module '*.css'
declare module '*.scss'

// For CSS modules that export a mapping of class names
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
