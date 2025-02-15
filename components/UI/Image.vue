<template>
  <div :class="wrapperClass" v-if="wrapperClass.length > 0">
    <NuxtImg
      :src="currentSrc"
      :alt="alt"
      :loading="loading"
      :fetchpriority="fetchpriority"
      :decoding="decoding"
      :class="[imageClass, fitClass]"
      :width="width"
      :height="height"
      :quality="quality"
      :format="format"
      @error="handleError"
      v-bind="$attrs"
    />
  </div>
  <NuxtImg
    v-else
    :src="currentSrc"
    :alt="alt"
    :loading="loading"
    :fetchpriority="fetchpriority"
    :decoding="decoding"
    :class="[imageClass, fitClass]"
    :width="width"
    :height="height"
    :quality="quality"
    :format="format"
    @error="handleError"
    v-bind="$attrs"
  />
</template>

<script setup>
  import { computed, ref } from "vue";

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
    fetchpriority: {
      type: String,
      default: "low",
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
    quality: {
      type: [String, Number],
      default: 100,
    },
    format: {
      type: String,
      default: "webp",
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

  const currentSrc = computed(() => {
    return hasError.value ? props.placeholder : encodeURI(props.src);
  });

  const handleError = () => {
    hasError.value = true;
  };
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
</style>
