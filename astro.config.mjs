import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import starlight from '@astrojs/starlight';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Site with DocSearch',
      // plugins: [
      //   starlightDocSearch({
      //     appId: 'MAM15PO3N4',
      //     apiKey: 'a5d4344c07f11031a5943c14e9b2ebc7',
      //     indexName: 'posts',
      //   }),
      // ],
      components: {
        // Override the default `Search` component.
        Search: './src/components/search/Search.astro'
      }
    }),
    tailwind(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
  ]
});