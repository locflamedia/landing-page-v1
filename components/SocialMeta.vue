<template>
  <span v-if="false"></span>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  keywords: {
    type: String,
    default: "",
  },
  robots: {
    type: String,
    default: "",
  },
  canonical: {
    type: String,
    default: "",
  },
  seo: {
    type: Object,
    default: () => {
      return {};
    },
  },
  created_at: {
    type: String,
    default: null,
  },
  updated_at: {
    type: String,
    default: null,
  },
  inject: {
    type: Object,
    default: () => {
      return {};
    },
  },
  ogType: {
    type: String,
    default: "website", // article, website, product, profile, book, video
  },
});

const route = useRoute();

const { frontendUrl, isProduction } = useRuntimeConfig().public;
const { t, locale } = useI18n();
const {
  title,
  description,
  image,
  keywords,
  robots,
  canonical,
  seo,
  inject,
  created_at,
  updated_at,
  ogType,
} = toRefs(props);

const currentUrl = ref(`${frontendUrl}${route.path}`);
const imageCover = computed(() =>
  image.value ? image.value : `${frontendUrl}/cover.jpg`
);

const schemaStructures = [];

const schemaScripts = schemaStructures.map((schema) => {
  const uniqueId = `${schema["@type"]}-structured-data-script`.toLowerCase();
  return {
    id: uniqueId,
    children: schema,
    type: "application/ld+json",
    tagPosition: "bodyClose",
  };
});
useHead({
  title: title.value || t("social-meta.home.title"),
  meta: [
    {
      property: "og:type",
      content: ogType.value,
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      property: "og:locale",
      content: locale.value === "vi" ? "vi_VN" : "en_US",
    },
    {
      property: "og:locale:alternate",
      content: locale.value === "vi" ? "en_US" : "vi_VN",
    },
    {
      name: "robots",
      content: robots.value ? robots.value : isProduction ? "index" : "noindex",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "description",
      content: description.value || t("social-meta.home.description"),
    },
    {
      name: "keywords",
      content: keywords.value || "Easy AI",
    },
    {
      property: "og:title",
      content: title.value || t("social-meta.home.title"),
    },
    {
      property: "og:description",
      content: description.value || t("social-meta.home.description"),
    },
    { property: "og:image", content: imageCover.value },
    {
      property: "og:site_name",
      content: "Easy AI",
    },
    { property: "og:image:secure_url", content: imageCover.value },
    {
      property: "og:image:alt",
      content: title.value,
    },
    {
      name: "twitter:title",
      content: title.value,
    },
    {
      name: "twitter:description",
      content: description.value,
    },
    { name: "twitter:image", content: imageCover.value },
    {
      name: "format-detection",
      content: "telephone=no",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      property: "og:url",
      content: currentUrl,
    },
    ...(created_at.value
      ? [
          {
            property: "article:published_time",
            content: created_at.value,
          },
        ]
      : []),
    ...(updated_at.value
      ? [
          {
            property: "article:modified_time",
            content: updated_at.value,
          },
        ]
      : []),
  ],
  link: [
    {
      rel: "canonical",
      href: canonical.value ? canonical.value : currentUrl.value,
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon-152x152.png",
      sizes: "152x152",
    },
    {
      name: "msapplication-TileImage",
      content: "/mstile-144x144.png",
    },
    {
      name: "msapplication-TileColor",
      content: "#FFFFFF",
    },
  ],
  script: schemaScripts,
});
</script>
