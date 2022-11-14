<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { handelScroll } from '@/utils/handleNav';
export default defineComponent({

  data() {
    return {
      title: 'Longevity InTime',
      footerText: 'By Longevity InTime 2022',
      navItems: [
        {
          name: 'About',
          link: '#about',
        },
        {
          name: 'Products',
          link: '#products',
        }
        ,
        {
          name: 'Contact',
          link: '#contact',
        },
        {
          name: 'Docs',
          link: '#docs',
        }
      ]
    }
  },
  mounted() {
    const navList = document.querySelector('.header__nav--list')!;

    navList.addEventListener('click', handelScroll);

  },
  methods: {
    toggleNav() {
      const nav = document.querySelector('.header__nav')!;
      nav.classList.toggle('header__nav--open');
    }
  }
});
</script>

<template>
  <div class="invisible">&nbsp;</div>
  <header class="header">
    <div class="header__toggle">
      <input type="checkbox" id="header__checkbox" class="header__toggle--checkbox" />
      <label for="header__checkbox" class="header__toggle--button" @click="toggleNav">
        <span class="header__toggle--icon">&nbsp;</span>
      </label>
    </div>
    <h1 class="header__title heading-secondary">{{ title }}</h1>
    <nav class="header__nav">
      <ul class="header__nav--list">

        <li class="header__nav--link" v-for="(item, i) in navItems" :key="i">
          <a :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />

  <footer class="footer text-center">
    &copy; {{ footerText }}
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/mixins';

.invisible {
  height: 0;
}



.header {
  // height: 5rem;
  line-height: 2;
  width: 100vw;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr 3fr;

  align-content: center;
  background-color: transparent;
  color: var(--color-primary);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 1rem 3rem;
  width: 100%;
  transition: all .2s;
  box-shadow: 0 0.1rem 1.5rem rgba(0, 0, 0, 0.5);

  @include respond(sm) {
    grid-template-columns: 3fr 1fr;
  }

  &__toggle {
    display: none;
    opacity: 0;

    &--checkbox {
      display: none;
    }

    @include respond(sm) {
      display: block;
      opacity: 1;
      position: fixed;
      top: 0rem;
      right: 3rem;
      left: auto;
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      padding: 0.5rem;
      z-index: 1000;

      transition: all 0.2s;

      &--button {
        cursor: pointer;
      }

      &--icon {
        position: relative;
        margin-top: 3.5rem;

        &,
        &::before,
        &::after {
          width: 3rem;
          height: 2px;
          background-color: currentColor;
          display: inline-block;
        }

        &::before,
        &::after {
          content: '';
          position: absolute;
          left: 0;
          transition: all 0.2s;
        }

        &::before {
          top: -0.8rem;
        }

        &::after {
          top: 0.8rem;
        }
      }

      &--checkbox:checked+&--button &--icon {
        background-color: transparent;
      }

      &--checkbox:checked+&--button &--icon::before {
        top: 0;
        transform: rotate(135deg);
      }

      &--checkbox:checked+&--button &--icon::after {
        top: 0;
        transform: rotate(-135deg);
      }
    }
  }

  &__nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @include respond(sm) {
      visibility: hidden;
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      z-index: -10000;
      opacity: 0;
      transform: translateY(-100%) scale(0);
      transition: all 0.2s;
      flex-direction: column;
      background-color: var(--color-grey-light);
      padding: 2rem 0;

      &--open {
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        z-index: 999;
      }
    }

    &--list {
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      //@at-root

      @include respond(sm) {
        flex-direction: column;
        // justify-content: center;
        align-items: center;
      }
    }

    &--link {
      line-height: 1.5;
      font-size: 1.6rem;
      text-decoration: none;
      color: currentColor;
      transition: all 0.2s;
      border-bottom: 2px solid transparent;
      transform: translateY(2px);
      cursor: pointer;

      a {
        text-decoration: none;
        color: currentColor;
      }

      &:hover {
        transform: translateY(0px);
      }

      &__active-from-top {
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          animation: slideIn .3s;
        }
      }

      &__active-from-bottom {
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          animation: slideOut 0.3s;
        }
      }
    }
  }

  &__bg {
    background-color: var(--color-primary);
    color: var(--color-text);
  }

  &__title {
    // margin-right: auto;
    display: inline-block;
    width: fit-content;
    color: currentColor;
  }
}

.footer {
  background-color: var(--color-primary);
  color: var(--color-text);
  font-size: 2.4rem;
  line-height: 1;
  border-radius: 2px;
  padding: 2rem 0;
}
</style>
