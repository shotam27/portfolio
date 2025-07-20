<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white"
  >
    <div class="text-center px-6 max-w-5xl mx-auto">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-relaxed animate-item whitespace-pre-line"
        data-delay="0"
      >
        {{ title }}
      </h1>
      <div class="flex flex-col sm:flex-row gap-6 justify-center animate-item" data-delay="200">
        <a
          href="#projects"
          class="bg-accent text-primary px-10 py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-all transform hover:scale-105 shadow-lg"
        >
          プロジェクトを見る
        </a>
        <a
          href="#contact"
          class="border-2 border-white text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-lg"
        >
          お問い合わせ
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.setupItemAnimations()
  },
  methods: {
    setupItemAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px',
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, delay)
          }
        })
      }, observerOptions)

      document.querySelectorAll('.animate-item').forEach((item) => {
        observer.observe(item)
      })
    },
  },
}
</script>

<style scoped>
.animate-item {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 個別のアニメーション */
.animate-item:nth-child(1) {
  transform: translateY(50px) scale(0.9);
}

.animate-item:nth-child(1).animate-in {
  transform: translateY(0) scale(1);
}

.animate-item:nth-child(3) {
  transform: translateY(30px);
}

.animate-item:nth-child(3).animate-in {
  transform: translateY(0);
}
</style>
