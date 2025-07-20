<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white"
  >
    <div class="text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-item" data-delay="0">
        {{ title }}
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-light/90 animate-item" data-delay="200">
        {{ subtitle }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-item" data-delay="400">
        <a
          href="#projects"
          class="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105"
        >
          プロジェクトを見る
        </a>
        <a
          href="#contact"
          class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all transform hover:scale-105"
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
    subtitle: {
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
