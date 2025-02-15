<template>
  <section class="bg-gradient-to-b from-gray-50 to-white py-24">
    <div class="container mx-auto px-4">
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <span class="font-medium tracking-wider text-green-800">VOICE</span>
        <h2 class="mb-6 mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Fermyを愛用する方々の声
        </h2>
        <p class="leading-relaxed text-gray-600">
          毎日の健康習慣として取り入れていただいている方々から、
          たくさんの喜びの声をいただいています。
        </p>
      </div>

      <div class="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div
          class="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
        >
          <ImageLoadLazy
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KZxMVixr7qeQLP1cObvOpD5bHHv6o1.png"
            alt="Fermyを飲む女性"
          />
        </div>
        <div class="space-y-8">
          <div class="flex gap-1">
            <IconStar
              v-for="n in 5"
              :key="n"
              name="lucide:star"
              class="h-5 w-5 fill-yellow-400 text-yellow-400"
            />
          </div>
          <blockquote class="text-xl font-medium italic text-gray-900">
            "毎朝の習慣として飲み始めて3ヶ月。お通じが良くなり、
            肌の調子も良くなってきました。自然な甘みで飲みやすいので、
            続けやすいのが良いですね。"
          </blockquote>
          <div>
            <p class="font-bold text-gray-900">佐藤 美咲さん（32歳）</p>
            <p class="text-gray-600">会社員 / 愛用歴3ヶ月</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="(review, index) in testimonials"
          :key="index"
          class="rounded-2xl bg-white p-8 shadow-lg"
        >
          <div class="mb-4 flex gap-1">
            <IconStar
              v-for="n in 5"
              :key="n"
              class="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          </div>
          <p class="mb-6 text-gray-700">"{{ review.comment }}"</p>
          <div>
            <p class="font-bold text-gray-900">{{ review.name }}</p>
            <p class="text-sm text-gray-600">
              {{ review.role }} / {{ review.period }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const testimonials = [
    {
      comment: "ジムの後に飲んでいます。スッキリして体が軽く感じます。",
      name: "田中 健一",
      role: "フィットネストレーナー",
      period: "愛用歴6ヶ月",
    },
    {
      comment:
        "腸内環境が気になっていましたが、飲み始めてから調子が良くなりました。",
      name: "山田 優子",
      role: "栄養士",
      period: "愛用歴1年",
    },
    {
      comment: "朝食代わりに飲んでいます。手軽に栄養が取れて便利です。",
      name: "鈴木 美穂",
      role: "フリーランス",
      period: "愛用歴2ヶ月",
    },
  ];
</script>
