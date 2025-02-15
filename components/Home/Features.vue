<template>
  <section class="bg-gradient-to-b from-white to-gray-50 py-24">
    <div class="container mx-auto px-4">
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <span class="text-primary font-medium tracking-wider">FEATURES</span>
        <h2 class="mb-6 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
          伝統と科学が証明する、
          <br />
          Fermyの4つの特徴
        </h2>
        <p class="leading-relaxed text-gray-600">
          奄美大島の伝統的な発酵技術と最新の研究成果を組み合わせることで、
          より効果的で飲みやすい発酵ドリンクが誕生しました。
        </p>
      </div>

      <div class="mb-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div
          class="aspect-video relative overflow-hidden rounded-2xl shadow-xl"
        >
          <ImageLoadLazy
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GbYQwUVU7qAINjv4Z5H8OlhqsoT3sK.png"
            alt="乳酸菌の電子顕微鏡写真"
          />
          <div class="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
        </div>
        <div class="space-y-8">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900">特許取得の発酵技術</h3>
            <p class="leading-relaxed text-gray-600">
              独自の低温発酵プロセスにより、有用な乳酸菌を最大限に活性化。
              科学的な研究に基づき、腸内環境を整える最適な発酵環境を実現しました。
            </p>
          </div>
          <ul class="space-y-4">
            <li
              v-for="(item, index) in features"
              :key="index"
              class="flex items-center gap-3"
            >
              <IconCheckCircle class="h-5 w-5 flex-shrink-0 text-green-800" />
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="relative">
          <div class="mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
            <ImageLoadLazy
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NyQbxH7hgpo48PWQccxxwnvpUSE8fI.png"
              alt="Fermyの飲用イメージ"
            />
          </div>
          <h4 class="mb-3 text-xl font-bold text-gray-900">飲みやすい味わい</h4>
          <p class="text-gray-600">
            ほのかな甘みと爽やかな後味。毎日続けやすい、
            やさしい味わいに仕上げました。
          </p>
        </div>

        <div class="relative">
          <div class="mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
            <ImageLoadLazy
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uvTlVqL6zdl3rxG3ValUpgRBIBKT0z.png"
              alt="奄美大島の自然"
            />
          </div>
          <h4 class="mb-3 text-xl font-bold text-gray-900">厳選された原材料</h4>
          <p class="text-gray-600">
            奄美大島の豊かな自然が育んだ原料を使用。
            添加物・砂糖は一切使用していません。
          </p>
        </div>

        <div class="relative md:col-span-2 md:mt-8 lg:col-span-1 lg:mt-0">
          <div class="mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
            <ImageLoadLazy
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fmxw27mFWpKqjlfYZppsqTfJsFNryU.png"
              alt="奄美大島の夕景"
            />
          </div>
          <h4 class="mb-3 text-xl font-bold text-gray-900">伝統の知恵</h4>
          <p class="text-gray-600">
            何世代にもわたって受け継がれてきた
            発酵の技術と知恵を現代に活かしています。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const features = [
    "生きた乳酸菌を100億個以上配合",
    "特許取得の低温発酵製法",
    "腸内環境改善効果を確認",
    "研究機関との共同研究実績",
  ];
</script>
