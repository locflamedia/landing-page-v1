<template>
  <section class="bg-white py-16">
    <footer class="container mx-auto px-4 text-center">
      <h2 class="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
        Fermyコミュニティに参加しよう
      </h2>
      <p class="mb-8 text-xl text-gray-600">
        最新情報やキャンペーン、健康レシピをお届けします！
      </p>
      <div class="mb-8 flex justify-center gap-4">
        <button
          class="bg-destructive hover:bg-accent/80 flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 duration-300 hover:text-white"
        >
          <IconInstagram class="h-5 w-5" />
          Instagramをフォロー
        </button>
        <button
          class="bg-destructive hover:bg-accent/80 flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 duration-300 hover:text-white"
        >
          <IconTwitter class="h-5 w-5" />
          Xをフォロー
        </button>
      </div>
      <p class="mb-4 text-gray-600">#Fermy習慣 でシェアしてください！</p>
      <div class="mx-auto max-w-2xl">
        <input
          v-model="email"
          type="email"
          placeholder="メールアドレスを入力"
          class="mb-4 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          @click="handleSubscribe"
          class="w-full rounded-md bg-green-800 px-4 py-2 text-white duration-300 hover:bg-green-900"
        >
          メルマガに登録
        </button>
      </div>
    </footer>
  </section>
</template>

<script setup>
  const email = ref("");

  const handleSubscribe = () => {
    console.log("Subscribe with email:", email.value);
  };
</script>
