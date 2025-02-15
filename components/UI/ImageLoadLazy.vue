<template>
  <div :class="wrapperClass" v-if="wrapperClass.length > 0">
    <VLazyImage
      :src="encodeURI(src) || placeholder"
      :alt="alt"
      :decoding="decoding"
      :class="[imageClass, fitClass]"
      :loading="priority ? 'eager' : loading"
      :width="width"
      :height="height"
      format="webp"
      @error="handleError"
      :intersection-options="intersectionOptions"
      v-bind="$attrs"
    />
  </div>
  <VLazyImage
    v-else
    :src="encodeURI(src) || placeholder"
    :alt="alt"
    :decoding="decoding"
    :class="[imageClass, fitClass]"
    :loading="priority ? 'eager' : loading"
    :width="width"
    :height="height"
    format="webp"
    @error="handleError"
    :intersection-options="intersectionOptions"
    v-bind="$attrs"
  />
</template>

<script setup>
  import VLazyImage from "v-lazy-image";

  const props = defineProps({
    src: {
      type: String,
      default: "/placeholder.jpg",
    },
    alt: {
      type: String,
      default: "image",
    },
    loading: {
      type: String,
      default: "lazy",
    },
    imageClass: {
      type: String,
      default: "",
    },
    width: [String, Number],
    height: [String, Number],
    fit: {
      type: String,
      default: "cover",
      validator: (value) =>
        ["cover", "contain", "fill", "none"].includes(value),
    },
    placeholder: {
      type: String,
      default: "/placeholder.jpg",
    },
    wrapperClass: {
      type: String,
      default: "",
    },
    decoding: {
      type: String,
      default: "async",
      validator: (value) => ["async", "sync", "auto"].includes(value),
    },
    priority: {
      type: Boolean,
      default: false,
    },
  });

  const hasError = ref(false);

  const fitClass = computed(() => {
    if (hasError.value) return "";
    return {
      "picture-cover": props.fit === "cover",
      "picture-contain": props.fit === "contain",
      "picture-fill": props.fit === "fill",
      "picture-none": props.fit === "none",
    };
  });

  const handleError = () => {
    hasError.value = true;
  };

  const intersectionOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  onMounted(() => {
    if ("IntersectionObserver" in window) {
      const images = document.querySelectorAll(".v-lazy-image");
      images.forEach((img) => {
        if (img._observer) {
          img._observer.disconnect();
          img._observer.observe(img);
        }
      });
    }
  });
</script>

<style lang="scss">
  .picture-cover {
    @apply h-full w-full object-cover;
  }
  .picture-contain {
    @apply h-full w-full object-contain;
  }
  .picture-fill {
    @apply h-full w-full object-fill;
  }
  .picture-none {
    @apply h-full w-full object-none;
  }
  .v-lazy-image {
    opacity: 0;
    will-change: opacity;
    transition: opacity 0.3s ease-in-out;
  }
  .v-lazy-image-loaded {
    opacity: 1;
  }
  .v-lazy-image:not(.v-lazy-image-loaded) {
    background: #f0f0f0;
    @media (prefers-reduced-motion: no-preference) {
      background: linear-gradient(
        90deg,
        #f0f0f0 0px,
        #f7f7f7 50%,
        #f0f0f0 100%
      );
      background-size: 200% 100%;
      animation: pulse 1.2s ease-in-out infinite;
    }
  }

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -200% 0%;
    }
  }
</style>
