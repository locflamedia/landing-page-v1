<template>
  <div :class="['jam-accordion', { active: isOpen }]">
    <div @click="toggleAccordion" class="jam-accordion-title">
      <slot name="title" v-bind="{ isOpen }"></slot>
    </div>
    <div class="jam-accordion-content grid grid-rows-[0fr]">
      <div class="overflow-hidden">
        <slot name="content" v-bind="{ isOpen }"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    defaultOpen: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(["update:isOpen"]);
  const isOpen = ref(props.defaultOpen);

  const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
    emit("update:isOpen", isOpen.value);
  };
</script>

<style lang="scss">
  .jam-accordion-title {
    @apply flex cursor-pointer items-center;
  }
  .jam-accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 300ms;
  }
  .jam-accordion-content {
    .active & {
      grid-template-rows: 1fr;
    }
  }
</style>
