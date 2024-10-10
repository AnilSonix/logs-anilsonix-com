import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "logs.anilsonix.com",
  description: "My logs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Readings", link: "/readings" },
      { text: "Blog", link: "/blog" },
      { text: "Learning", link: "/learning" },
      { text: "Projects", link: "/Projects" },
    ],

    sidebar: [
      {
        text: "Readings",
        items: [
          { text: "Math", link: "/math" },
          { text: "Phyics", link: "/phyics" },
          { text: "Chemistry", link: "/chemistry" },
          { text: "Biology", link: "/biology" },
          { text: "Finance", link: "/finance" },
          { text: "CS", link: "/cs" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/AnilSonix/logs-anilsonix-com",
      },
    ],
    search: {
      provider: "local",
    },
  },
  srcDir: "./src",
  outDir: "./dist",
});
