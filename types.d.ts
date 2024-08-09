// types/meta.d.ts
import { type PageMeta } from 'nuxt/app'

declare module 'nuxt/app' {
  interface PageMeta {
    navBar?: boolean // Exemplo de nova propriedade
  }
}
