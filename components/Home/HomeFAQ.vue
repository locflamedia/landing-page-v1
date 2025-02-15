<template>
  <section class="bg-white py-16">
    <div class="container mx-auto px-4">
      <h2
        class="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl"
      >
        よくある質問
      </h2>
      <div class="mx-auto flex max-w-2xl flex-col space-y-4">
        <div v-for="(faq, index) in faqs" :key="index">
          <Accordion
            class="border-b"
            @update:isOpen="(val) => (accordionStates[index] = val)"
          >
            <template #title>
              <div
                class="hover-underline-animation group flex w-full justify-between"
              >
                <span class="mb-4">{{ faq.question }}</span>
                <div
                  class="plusminus"
                  :class="{ active: accordionStates[index] }"
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
            </template>
            <template #content>
              <div class="pb-4">{{ faq.answer }}</div>
            </template>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const faqs = ref([
    {
      question: "Fermyはどんな味ですか？",
      answer:
        "ほのかな甘みと発酵の爽やかさで飲みやすいです！自然な風味を楽しめます。",
    },
    {
      question: "乳アレルギーでも飲めますか？",
      answer:
        "牛乳アレルギーの方でも飲める可能性がありますが、個人差があるため、医師にご相談ください。",
    },
    {
      question: "保存方法・賞味期限は？",
      answer: "冷蔵保存で約14日間です。開封後はお早めに召し上がりください。",
    },
  ]);

  const accordionStates = ref(new Array(faqs.value.length).fill(false));
</script>
