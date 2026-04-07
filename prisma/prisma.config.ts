// prisma/prisma.config.ts
import { defineConfig } from '@prisma/cli'

export default defineConfig({
  datasources: {
    db: {
      adapter: 'sqlite',
      url: 'file:./dev.db',  // <- esta línea es obligatoria
    },
  },
})