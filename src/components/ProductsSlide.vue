<script lang="ts">
import ProductCard from './ProductCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['products'],
  components: {
    ProductCard
  },

})

</script>

<template>
  <div class="section-products__slider--slide">
    <ProductCard v-for="(prod, idx) in products" :key="idx" :product="prod">
    </ProductCard>
  </div>
</template>