<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: ['product'],

})
</script>

<template>
  <div class="section-products__product-card">
    <figure class="section-products__product-card--figure">
      <img :alt="product.name" src="@/assets/logo.svg" class="section-products__product-card--img">


    </figure>

    <div class="section-products__product-card--content">
      <h1 class="heading-secondary section-products__product-card--title">
        {{ product.name }}
      </h1>

      <p class="section-products__product-card--description">
        {{ product.description }}
      </p>
      <span class="section-products__product-card--price">
        Only ${{ product.price }}
      </span>
      <a class="section-products__product-card--link" :href="product.link">
        Try&rarr;
      </a>
    </div>
  </div>
  <slot></slot>
</template>


<style lang="scss">
@import "@/assets/sass/mixins";

.section-products__product-card {
  // margin: 0 auto;
  display: inline-block;
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.5);
  width: 30%;
  min-height: 50rem;
  max-height: 60rem;
  margin-top: 2rem;
  border-radius: 3px;
  background-image: linear-gradient(to right,
      rgba(var(--color-primary-rgb), 0.9),
      rgba(var(--color-secondary-rgb), 0.4));

  @include respond(md) {
    width: 45%;
  }

  @include respond(sm) {
    width: 90%;
  }

  &:nth-child(2n) {
    background-image: linear-gradient(to right,
        rgba(var(--color-secondary-rgb), 0.9), rgba(var(--color-primary-rgb), 0.4),
      );


  }

  &:nth-child(2n) &--price {
    color: var(--color-text);
  }


  &--content {
    padding: 2rem;
    display: flex;
    flex-direction: column;

    &>* {
      margin-bottom: 1rem;
    }
  }

  &--figure {
    padding-top: 2rem;
    background-image: linear-gradient(to right,
        rgba(var(--color-primary-rgb), 0.9),
        rgba(var(--color-secondary-rgb), 1));
    clip-path: circle(7rem);
    display: flex;
    justify-content: center;

  }

  &--img {
    width: 15rem;
    height: 20rem;
    object-position: center;
    margin: 0 auto;
  }

  &--description {
    font-size: 1.6rem;
  }

  &--price {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-secondary);
  }

  &--link {
    width: fit-content;
    text-decoration: none;
    font-size: 2rem;
    border-bottom: 2px solid transparent;
    color: var(--color-text);
    font-weight: bold;
    transition: all .2s;

    &:hover {
      transform: translateX(4px);
      border-bottom: 2px solid currentColor
    }
  }
}
</style>