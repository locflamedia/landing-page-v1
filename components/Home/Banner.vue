<template>
  <section class="relative min-h-screen overflow-hidden bg-[#FAF6F3] pt-24">
    <div
      class="from-secondary/30 absolute inset-0 bg-gradient-to-br to-transparent"
    />

    <div class="container mx-auto px-4 pb-24 pt-12">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div class="relative z-10 space-y-8">
          <div class="bg-primary/10 inline-block rounded-full px-4 py-2">
            <span class="text-primary text-sm font-medium tracking-wider">
              {{ $t("home.banner.tagline") }}
            </span>
          </div>

          <h1
            class="text-4xl leading-tight text-gray-900 md:text-5xl lg:text-6xl"
          >
            <span class="block">{{ $t("home.banner.title.line1") }}</span>
            <span class="text-primary block">{{
              $t("home.banner.title.line2")
            }}</span>
            <span class="block">{{ $t("home.banner.title.line3") }}</span>
          </h1>

          <p class="max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
            {{ $t("home.banner.description.part1") }}
            <span class="mt-2 block">
              {{ $t("home.banner.description.part2") }}
            </span>
          </p>

          <div class="sm:flex-row flex flex-col gap-4">
            <button
              class="bg-primary hover:bg-primary/90 inline-flex items-center rounded-full px-8 py-3 text-white duration-300"
            >
              {{ $t("home.banner.buttons.viewProduct") }}
              <IconArrowRight class="ml-2 h-4 w-4" />
            </button>
            <button
              class="border-primary text-primary hover:bg-primary inline-flex items-center rounded-full border px-8 py-3 duration-300 hover:text-white"
            >
              {{ $t("home.banner.buttons.learnMore") }}
            </button>
          </div>

          <div ref="statsRef" class="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div class="text-primary mb-2 text-3xl font-bold">
                {{ satisfactionRate }}%
              </div>
              <p class="text-sm leading-snug text-gray-600">
                {{ $t("home.banner.stats.satisfaction") }}
              </p>
            </div>
            <div>
              <div class="text-primary mb-2 text-3xl font-bold">
                {{ organicRate }}%
              </div>
              <p class="text-sm leading-snug text-gray-600">
                {{ $t("home.banner.stats.organic") }}
              </p>
            </div>
            <div>
              <div class="text-primary mb-2 text-3xl font-bold">
                {{ repeatRate }}%
              </div>
              <p class="text-sm leading-snug text-gray-600">
                {{ $t("home.banner.stats.repeat") }}
              </p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="aspect-square relative mx-auto max-w-md">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbQp5FxeGuiKOmwMpVkqvFO28tXwIY.png"
              alt="Fermy Bottle"
              imageClass="w-[500px] transform picture-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <!-- Decorative elements -->
          <div
            class="bg-primary/5 absolute -right-1/4 top-1/4 h-72 w-72 rounded-full blur-3xl"
          />
          <div
            class="bg-secondary/30 absolute -left-1/4 bottom-1/4 h-72 w-72 rounded-full blur-3xl"
          />

          <!-- Product badges -->
          <div
            class="absolute right-8 top-8 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm"
          >
            <span class="text-primary font-medium">{{
              $t("home.banner.badges.patented")
            }}</span>
          </div>
          <div
            class="absolute bottom-8 left-8 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm"
          >
            <span class="text-primary font-medium">{{
              $t("home.banner.badges.natural")
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
      <div class="flex flex-col items-center gap-2">
        <span class="text-sm text-gray-600">{{
          $t("home.banner.scroll")
        }}</span>
        <div class="from-primary h-8 w-px bg-gradient-to-b to-transparent" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import useCounter from "@/composables/useCounter";

  const statsRef = ref(null);
  const { counter: satisfactionRate, animateCounter: animateSatisfaction } =
    useCounter();
  const { counter: organicRate, animateCounter: animateOrganic } = useCounter();
  const { counter: repeatRate, animateCounter: animateRepeat } = useCounter();

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSatisfaction(96);
            animateOrganic(100);
            animateRepeat(89);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.value) {
      observer.observe(statsRef.value);
    }
  });
</script>
