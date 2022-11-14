<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  }
})
</script>
<template>
  <div class="error-404-layout">
    <h1 class="heading-secondary">
      404
    </h1>
    <h2 class="heading-primary">
      Page Not Found
    </h2>
    <button class="btn" @click="navigateToHome">Go Home</button>
  </div>
</template>

<style lang="scss">
.error-404-layout {
  background-image: linear-gradient(to right bottom,
      rgba(var(--color-primary-rgb), .4), rgba(var(--color-primary-rgb), .6),
    );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 5rem;
  }
}
</style>