<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {

    return {
      title: 'Contact Us'
    }
  }
})
</script>

<template>
  <section class="section-contact" id="#contact">
    <h1 class="heading-secondary text-absolute-center  text-uppercase">{{ title }}</h1>
    <div class="section-contact__background"></div>
    <img class="section-contact__img" src="@/assets/logo.svg" alt="App logo" />
    <div class="section-contact__form-container">
      <form class="section-contact__form">
        <div class="form-group section-contact__form-group">
          <input autocomplete="off" type="text" class="section-contact__input section-contact__input--name" id="name"
            placeholder="name" />
          <label for="name" class="section-contact__label section-contact__label--name">name</label>
        </div>
        <div class="form-group section-contact__form-group">
          <input autocomplete="off" type="email" class="section-contact__input section-contact__input--email" id="email"
            placeholder="email" />
          <label for="email" class="section-contact__label section-contact__label--email">email</label>
        </div>
        <div class="form-group section-contact__form-group">
          <input autocomplete="off" type="text" class="section-contact__input section-contact__input--phone" id="phone"
            placeholder="phone" />
          <label for="phone" class="section-contact__label section-contact__label--phone">phone</label>
        </div>

        <div class="form-group section-contact__form-group">
          <textarea class="section-contact__input section-contact__input--content" id="content"
            placeholder="content"></textarea>
          <label for="content" class="section-contact__label section-contact__label--content">content</label>
        </div>

        <button class="btn section-contact__submit" type="submit">Send</button>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/sass/mixins";

.section-contact {
  background-color: var(--color-primary);
  padding: 3rem;
  position: relative;

  @include respond(md) {
    padding: 2rem;
  }

  @include respond(sm) {
    padding: 1rem;
  }

  &__img {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: inline-block;
    width: 30rem;
    height: 30rem;

    @include respond(sm) {
      display: none;

    }
  }

  &__background {
    position: absolute;
    left: -40%;
    top: 0;
    clip-path: circle(45%);
    background-image: linear-gradient(to right bottom,
        rgba(var(--color-secondary-rgb), .8),
        rgba(var(--color-secondary-rgb), .9));
    width: 100%;
    height: 100%;

    @include respond(sm) {
      left: -60%;
      opacity: .3;
      // display: none;
    }
  }

  &__form {

    &-container {
      width: 100%;
      display: flex;
      justify-content: end;
    }

    padding: 0 2rem;
    width: 50%;

    @include respond(sm) {
      width: 80%;
    }

    &-group:not(:last-child) {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column-reverse;
    }

    &-group:first-of-type {
      margin-top: 3rem;
    }

    &-group:last-child {
      margin-top: 0rem;
    }
  }

  &__input {
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba(white, 0.4);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all 0.3s;

    &:focus {
      outline: none;

      border-bottom: 3px solid var(--color-text);

      &:invalid {
        border-bottom: 3px solid var(--color-error);
      }
    }

    &::-moz-placeholder,
    &::placeholder,
    &::-ms-input-placeholder,
    &:-ms-input-placeholder {
      color: black;
      opacity: 0.7;
    }

    &::-webkit-input-placeholder {
      color: black;
      opacity: 0.7;
    }

    &--content {
      resize: vertical;
    }
  }

  &__label {
    font-size: 1.6rem;
    font-weight: 700;
    margin-left: 1.6rem;
    margin-top: 0.7rem;
    display: block;
    text-transform: uppercase;
    transition: all 0.3s;
    // transform: translateY(-8.5rem);
    color: var(--color-text);
  }

  &__input:placeholder-shown+&__label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(5rem);
  }
}
</style>
