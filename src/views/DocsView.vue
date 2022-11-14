<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {

    return {
      title: 'Docs',
      docs: [
        {
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corrupti natus maiores vero ab saepe tempora illum nesciunt excepturi quisquam ipsum sit amet veritatis, eos ea a facilis animi voluptatibus!',
          link: '#'
        },
        {
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corrupti natus maiores vero ab saepe tempora illum nesciunt excepturi quisquam ipsum sit amet veritatis, eos ea a facilis!',
          link: '#'
        },
        {
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corrupti natus maiores vero ab saepe tempora illum nesciunt excepturi quisquam ipsum sit amet veritatis, eos ea a facilis!  ab saepe tempora',
          link: '#'
        },
        {
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corrupti natus maiores vero ab saepe ',
          link: '#'
        }
      ]
    }
  }
})
</script>
<template>
  <section class="section-docs" id="#docs">
    <h1 class="heading-primary text-absolute-center heading-underline">
      {{ title }}
    </h1>
    <ul class="section-docs__list">
      <li class="section-docs__list-item" v-for="(doc, i) in docs" :key="i">
        <p class="section-docs__list--paragraph">
          {{ doc.paragraph }}
        </p>
        <a class="section-docs__list--link cta" :href="doc.link">Visit&rarr;</a>
      </li>
    </ul>
  </section>

</template>


<style lang="scss">
@import "@/assets/sass/mixins";

.section-docs {
  padding: 3rem;

  @include respond(md) {
    padding: 2rem;
  }

  @include respond(sm) {
    padding: 1rem;
  }

  &__list {
    margin-top: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    list-style: none;

    @include respond(sm) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond(xs) {
      grid-template-columns: 1fr;
    }

    &-item {
      height: max-content;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &--paragraph {
      font-size: 1.6rem;
    }

    &--link {

      &:link,
      &:visited,
      &:active {
        text-decoration: none;
        font-size: 2rem;
        color: var(--color-primary);
      }
    }
  }
}
</style>