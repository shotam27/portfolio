<template>
  <section id="contact" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-primary mb-16 animate-item"
        data-delay="0"
      >
        Future Goals
      </h2>
      <div class="max-w-4xl mx-auto text-center">
        <p
          class="text-lg text-secondary leading-relaxed animate-item bg-white p-8 rounded-2xl shadow-lg"
          data-delay="200"
          v-html="formattedGoals"
        ></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    futureGoals: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.setupItemAnimations()
  },
  computed: {
    formattedGoals() {
      return this.futureGoals.replace(/\n/g, '<br>')
    },
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
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
