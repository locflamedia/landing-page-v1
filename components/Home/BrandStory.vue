<template>
  <section id="about" class="relative overflow-hidden bg-white py-24">
    <div class="container mx-auto px-4">
      <div class="mx-auto mb-16 max-w-xl text-center">
        <span class="text-primary font-medium tracking-wider">ABOUT FERMY</span>
        <h2 class="mb-6 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
          伝統と革新が出会い、
          <br />
          新しい発酵文化が生まれる。
        </h2>
        <p class="leading-relaxed text-gray-600">
          奄美大島に古くから伝わる発酵飲料「ミキ」。
          その知恵と現代のテクノロジーを組み合わせることで、
          より多くの人々に健康をお届けしたい。 そんな想いから Fermy
          は誕生しました。
        </p>
      </div>

      <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div class="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <ImageLoadLazy
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uvTlVqL6zdl3rxG3ValUpgRBIBKT0z.png"
            alt="奄美大島の豊かな自然"
          />
          <div class="absolute inset-0 bg-black/10" />
        </div>
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900">
            奄美大島の豊かな自然が育む、
            <br />
            伝統の発酵文化
          </h3>
          <p class="leading-relaxed text-gray-600">
            写真のような美しい自然に囲まれた奄美大島。
            温暖な気候と豊かな環境に恵まれたこの地で、
            古来より島民の健康を支えてきた発酵飲料「ミキ」は、
            その土地の恵みと先人の知恵が結晶化したものです。
          </p>
          <p class="leading-relaxed text-gray-600">
            Fermyは、この伝統的な発酵技術に着目。
            最新の研究により、その健康効果が科学的にも
            証明されつつある「ミキ」の可能性を、
            現代のライフスタイルに合わせて進化させました。
          </p>
          <button
            class="border-primary text-primary hover:bg-primary mt-4 inline-flex items-center rounded-full border px-6 py-2.5 duration-300 hover:text-white"
          >
            Fermyの開発ストーリー
            <IconArrowRight class="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      <div class="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="space-y-4 text-center">
          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50"
          >
            <span class="text-3xl"> 🌱 </span>
          </div>
          <h4 class="text-xl font-bold text-gray-900">自然との調和</h4>
          <p class="text-gray-600">
            奄美大島の自然環境に配慮した 原料調達と製造プロセス
          </p>
        </div>
        <div class="space-y-4 text-center">
          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50"
          >
            <span class="text-3xl"> 🔬 </span>
          </div>
          <h4 class="text-xl font-bold text-gray-900">科学的アプローチ</h4>
          <p class="text-gray-600">伝統的な発酵技術と 最新の研究成果の融合</p>
        </div>
        <div class="space-y-4 text-center">
          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50"
          >
            <span class="text-3xl">💫</span>
          </div>
          <h4 class="text-xl font-bold text-gray-900">未来への継承</h4>
          <p class="text-gray-600">伝統文化の価値を 次世代に伝えていく使命</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
