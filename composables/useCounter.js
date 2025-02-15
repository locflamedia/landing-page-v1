import { ref, computed, onUnmounted } from "vue";

export default function useCounter() {
  const rawCounter = ref(0);

  let tween = null;

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const formattedCounter = computed(() =>
    formatNumber(Math.floor(rawCounter.value))
  );

  const animateCounter = async (targetValue, duration = 2) => {
    if (typeof targetValue !== "number") {
      throw new Error("[useCounter] targetValue phải là số");
    }

    const { gsap } = await import("gsap");

    if (tween?.isActive()) tween.kill();

    tween = gsap.to(rawCounter, {
      duration,
      value: targetValue,
      ease: "power2.out",
      onUpdate: () => {
        rawCounter.value = Math.floor(rawCounter.value);
      },
      onComplete: () => {
        rawCounter.value = Math.floor(targetValue);
      },
    });
  };

  onUnmounted(() => {
    tween?.kill();
  });

  return {
    counter: formattedCounter,
    animateCounter,
  };
}
