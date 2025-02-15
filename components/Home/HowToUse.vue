<template>
  <section id="how-to-use" class="bg-white py-16">
    <div class="container mx-auto px-4">
      <h2
        class="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl"
      >
        Fermyの飲み方・活用法
      </h2>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div v-for="(usage, index) in usages" :key="index" class="text-center">
          <div class="relative mb-4 h-64 w-full overflow-hidden rounded-lg">
            <ImageLoadLazy
              :src="usage.image || '/placeholder.svg'"
              :alt="usage.title"
              imageClass="h-[256px] w-[400px] transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 class="mb-2 text-xl font-semibold text-gray-800">
            {{ usage.title }}
          </h3>
          <p class="text-gray-600">{{ usage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const usages = [
    {
      title: "朝食に置き換え",
      description: "忙しい朝に、手軽に栄養補給",
      image: "/morning-usage.jpg",
    },
    {
      title: "スポーツ・ジム後",
      description: "プロテイン代わりに素早く栄養チャージ",
      image: "/sports-usage.jpg",
    },
    {
      title: "スイーツ・デザートとして",
      description: "シェーブルチーズ風スムージーなどアレンジ自在",
      image: "/dessert-usage.jpg",
    },
  ];
</script>
