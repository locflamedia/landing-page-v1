<template>
  <header
    :class="[
      'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
      isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="relative aspect-[1/1] size-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbQp5FxeGuiKOmwMpVkqvFO28tXwIY.png"
            alt="Fermy"
            imageClass="picture-contain"
          />
        </div>

        <nav
          :class="[
            'fixed right-0 top-0 h-screen w-full md:relative md:h-auto md:w-auto',
            'transform bg-white transition-transform duration-300 ease-in-out md:bg-transparent',
            'md:flex md:items-center md:space-x-8',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0',
          ]"
        >
          <button
            class="absolute right-6 top-6 text-gray-800 md:hidden"
            @click="isMenuOpen = false"
          >
            <IconX class="h-6 w-6" />
          </button>
          <div
            class="flex h-full flex-col items-center justify-center space-y-8 md:h-auto md:flex-row md:space-x-8 md:space-y-0"
          >
            <a
              v-for="(item, index) in [
                { href: '#about', text: t('header.about') },
                { href: '#features', text: t('header.features') },
                { href: '#how-to-use', text: t('header.howToUse') },
                { href: '#reviews', text: t('header.reviews') },
              ]"
              :key="index"
              :href="item.href"
              class="hover:text-primary font-serif text-gray-800 transition-colors duration-300"
              @click="isMenuOpen = false"
            >
              {{ item.text }}
            </a>
            <div
              class="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0"
            >
              <button
                class="border-primary text-primary hover:bg-primary rounded-md border px-4 py-2 transition-colors hover:text-white"
              >
                {{ t("header.contact") }}
              </button>
              <button
                class="bg-primary hover:bg-primary/90 rounded-md px-4 py-2 text-white transition-colors"
              >
                {{ t("header.purchase") }}
              </button>
            </div>
          </div>
        </nav>

        <button class="text-gray-800 md:hidden" @click="isMenuOpen = true">
          <IconMenu class="h-6 w-6" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
  const { t } = useI18n();
  const isScrolled = ref(false);
  const isMenuOpen = ref(false);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>
