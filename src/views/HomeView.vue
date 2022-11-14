<script lang="ts">
import AboutView from './AboutView.vue';
import ProductsView from './ProductsView.vue';
import ContactView from './ContactView.vue';
import DocsView from './DocsView.vue';
import { defineComponent } from 'vue';
import headerBgObserver from '@/utils/headerBgObserver'
import mainObserver from '@/utils/mainObserver'
export default defineComponent({
  components: {
    AboutView, ProductsView, ContactView, DocsView
  },
  mounted() {
    headerBgObserver();
    mainObserver()
  }
})

</script>

<template>
  <main class="main">
    <AboutView />
    <ProductsView />
    <ContactView />
    <DocsView />
  </main>
</template>
