<template>
  <section class="bg-gradient-to-b from-white to-green-50 py-24">
    <div class="container mx-auto px-4">
      <div class="mx-auto max-w-4xl">
        <div class="mb-12 text-center">
          <span class="font-medium tracking-wider text-green-800">PRICING</span>
          <h2 class="mb-6 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            自然の恵みを、あなたの日常に
          </h2>
          <p class="mb-8 text-xl text-gray-600">
            Fermyの魅力を毎日の生活に。今なら初回限定の特別価格でお試しいただけます。
          </p>
        </div>

        <div class="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Fermy 500ml</h3>
              <div class="mb-4 flex items-baseline">
                <span class="text-4xl font-bold text-green-800">¥498</span>
                <span class="ml-2 text-gray-500 line-through">¥49,880</span>
              </div>
              <ul class="mb-8 space-y-3">
                <li
                  v-for="(feature, index) in features"
                  :key="index"
                  class="flex items-center"
                >
                  <IconCheck />
                  {{ feature }}
                </li>
              </ul>
              <button
                class="w-full rounded bg-green-800 px-6 py-3 text-white duration-300 hover:bg-green-900"
              >
                今すぐ購入
              </button>
              <p class="mt-4 text-center text-sm text-gray-500">
                ※ 初回限定99%OFF 通常価格¥49,880
              </p>
            </div>
            <div class="relative">
              <ImageLoadLazy
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NbQp5FxeGuiKOmwMpVkqvFO28tXwIY.png"
                alt="Fermy ボトル"
              />
              <div class="absolute inset-0 bg-black/10" />
              <div
                class="absolute right-4 top-4 animate-pulse rounded-full bg-red-600 px-4 py-2 text-lg font-bold text-white"
              >
                初回99%OFF
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <h3 class="mb-4 text-xl font-bold text-gray-900">
            定期購入でさらにお得に
          </h3>
          <p class="mb-6 text-gray-600">
            毎月お届けの定期購入なら、10%OFFの¥44,892でご利用いただけます。
            <br />
            いつでも解約可能で、2回目以降のお届けからお得な価格が適用されます。
          </p>
          <button
            class="bg-destructive rounded border border-green-800 px-6 py-2 text-green-800 duration-300 hover:bg-green-800 hover:text-white"
          >
            定期購入について詳しく見る
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const features = [
    "500ml 約10日分",
    "100%オーガニック原料",
    "特許取得の発酵製法",
    "無添加・砂糖不使用",
  ];
</script>
