<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      title: `Welcome to Landing Page`,
      paragraph: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem provident explicabo accusamus, fugit nostrum sint tempore nulla ea, dolor excepturi dolores earum voluptas nam eligendi perspiciatis aliquid quidem reprehenderit non.`,
    };
  },
  methods: {
    ctaHandler() {
      document.getElementById('#contact')?.scrollIntoView({
        behavior: 'smooth',
      });
    },
  },
});
</script>

<template>
  <section id="#about" class="section-about">
    <div class="section-about__image-background">&nbsp;</div>
    <div class="section-about__content">
      <h1
        class="section-about__content--header heading-primary heading-primary"
      >
        {{ title }}
      </h1>
      <p class="section-about__content--paragraph">
        {{ paragraph }}
      </p>
      <button @click="ctaHandler" class="section-about__content--cta cta">
        Book a Demo &rarr;
      </button>
    </div>
    <div class="section-about__logo">
      <img
        class="section-about__logo--img"
        src="@/assets/logo.svg"
        alt="App logo"
      />
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/sass/mixins';

.section-about {
  min-height: 70vh;
  line-height: 2;

  padding: 4rem;
  background-color: rgba(var(--color-grey-light-rgb), 0.5);
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  align-items: center;
  column-gap: 10rem;
  position: relative;
  overflow: hidden;

  @include respond(md) {
    padding: 3rem;
  }

  @include respond(sm) {
    padding: 1rem;
    grid-template-columns: 1fr;
  }

  &__image-background {
    position: absolute;
    right: -40%;
    top: 0;
    clip-path: circle(50%);
    background-image: linear-gradient(
      to right bottom,
      rgba(var(--color-primary-rgb), 0.9),
      rgba(var(--color-secondary-rgb), 0.9)
    );
    width: 100%;
    height: 100%;

    @include respond(sm) {
      right: -50%;
      opacity: 0.4;
    }

    @include respond(xs) {
      border-radius: 100%;
      clip-path: none;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    // width: 60%;

    &--header {
      margin-bottom: 3rem;
    }

    &--paragraph {
      color: var(--color-grey-dark);
      font-size: 1.6rem;
      margin-bottom: 2rem;
    }
  }

  &__logo {
    width: 100%;
    display: flex;
    justify-content: end;
    z-index: 1;

    @include respond(sm) {
      display: none;
    }

    &--img {
      width: 43rem;
      height: 43rem;

      // margin: 0 auto;
      // padding-left: 4rem;
      @include respond(md) {
        width: 33rem;
        height: 33rem;
      }

      @include respond(sm) {
        display: none;
      }
    }
  }
}
</style>
