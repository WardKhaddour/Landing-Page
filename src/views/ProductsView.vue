<script lang="ts">
import { defineComponent } from 'vue';
import ProductsSlide from '@/components/ProductsSlide.vue';

export default defineComponent({
  data() {
    return {
      title: 'Our Products',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, expedita?Enim aliquam molestiae ipsum est ullam officia veniam natus non repellat nulla, debitis provident fugiat  unde error id deleniti earum!',
      windowWidth: 0,
      curSlide: 0,
      maxSlides: 0,
      slides: [] as HTMLDivElement[],
      products: [
        {
          id: 1,
          name: 'Patient Data Depersonalization',
          description:
            'An service to remove data that can connect a patient to his data',
          img: './src/assets/logo.svg',
          link: '#',
          price: '5.99'
        },
        {
          id: 2,
          name: 'Clinical trials AI simulation',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing',
          img: './src/assets/logo.svg',
          link: '#',
          price: '10.99'
        },
        {
          id: 3,
          name: 'Predictions endpoints',
          description:
            'make predictions for a set of given parameters',
          img: './src/assets/logo.svg',
          link: '#',
          price: '4.99'
        }, {
          id: 4,
          name: 'Document analysis (lab test)',
          description:
            'OCR, Data recognition and extraction from lab tests from physical or digital formats, expecte support: PDF, PNG, JPG (and other image formats), CSV',
          img: './src/assets/logo.svg',
          link: '#',
          price: '49.99'
        },
        {
          id: 5,
          name: 'Product 5',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.      Perferendis Lorem dolor',
          img: './src/assets/logo.svg',
          link: '#',
          price: '99.99'
        },
        {
          id: 6,
          name: 'Product 6',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.      Perferendis Lorem dolor',
          img: './src/assets/logo.svg',
          link: '#',
          price: '4.99'
        },
        {
          id: 7,
          name: 'Product 7',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.      Perferendis Lorem dolor',
          img: './src/assets/logo.svg',
          link: '#',
          price: '12.99'
        },
      ],
    };
  },
  components: {
    ProductsSlide,
  },
  computed: {
    productsSlides() {
      const newArray: {}[][] = [];
      const len = this.products.length;
      if (this.windowWidth <= 700) {
        this.products.forEach(prod => newArray.push([prod]));
        this.maxSlides = newArray.length;
        return newArray;
      }
      if (this.windowWidth <= 1000) {
        for (let i = 0; i < len; i += 2) {
          let slideElements;
          if (i + 1 >= len) {
            slideElements = [this.products[i]]
          }
          else {
            slideElements = [this.products[i], this.products[i + 1]]
          }
          newArray.push(slideElements)
        }
        this.maxSlides = newArray.length;
        return newArray;
      }

      for (let i = 0; i < len; i += 3) {
        let slideElements;
        if (i + 1 >= len) {
          slideElements = [this.products[i]]
        }
        else if (i + 2 >= len) {

          slideElements = [this.products[i], this.products[i + 1]]
        }
        else {
          slideElements = [this.products[i], this.products[i + 1], this.products[i + 2]]
        }
        newArray.push(slideElements)
      }
      this.maxSlides = newArray.length;
      return newArray;
    }

  },

  methods: {
    goToRightSlide() {
      if (this.curSlide === this.maxSlides - 1) {
        this.curSlide = 0;
      } else {
        this.curSlide++;
      }
      this.changeSlide();

    },
    goToLeftSlide() {
      if (this.curSlide === 0) {
        this.curSlide = this.maxSlides - 1;
      } else {
        this.curSlide--;
      }

      this.changeSlide();
    },
    changeSlide() {
      const slides = document.querySelectorAll('.section-products__slider--slide')!

      slides.forEach((slide, idx) => {
        slide.classList.forEach(cl => {
          if (cl.split('-')[0] === 'slide') {
            slide.classList.remove(cl)
          }
        })
        slide.classList.add(`slide-${idx - this.curSlide}`);

      })

    },

    onResize() {
      this.windowWidth = window.innerWidth

    }

  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize)
  },

});
</script>

<template>
  <section id="#products" class="section-products">
    <h1 class="heading-primary text-absolute-center heading-underline text-uppercase">
      {{ title }} </h1>
    <p class="section-products__paragraph text-center">
      {{ paragraph }}
    </p>

    <div class="section-products__slider">
      <ProductsSlide v-for="(productSlide, i) in productsSlides" :key="i" :products="productSlide"
        :class="`slide-${i}`">
      </ProductsSlide>
    </div>

    <div class="section-products__slider-navigation">
      <div class="section-products__slider-navigation--btns"><button @click="goToLeftSlide"
          class="section-products__slider-navigation--btn">&lt;</button>
        <button @click="goToRightSlide" class="section-products__slider-navigation--btn">&gt;</button>
      </div>
      <div class="section-products__slider-navigation--number"><span
          class="section-products__slider-navigation--cur-slide">
          {{ curSlide + 1 }} -
        </span> <span class="section-products__slider-navigation--max-slides">{{ maxSlides }}</span> </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/sass/mixins';

.section-products {
  padding: 3rem;

  @include respond(md) {
    padding: 2rem;
  }

  @include respond(sm) {
    padding: 1rem;
  }

  &__paragraph {
    padding: 2rem;
    padding-top: 7rem;
    font-size: 1.6rem;
  }

  &__slider {
    width: 100%;

    position: relative;
    height: 62rem;
    overflow: hidden;


    &--slide {
      display: flex;
      justify-content: space-between;
      height: fit-content;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transition: all 1s;

      @include respond(sm) {
        justify-content: center;
      }
    }

    &-navigation {
      width: 40%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;

      @include respond(xs) {
        width: 100%;
      }

      &--number {
        margin-left: 3rem;
        font-size: 2rem;
      }

      &--cur-slide {
        color: var(--color-primary);
        font-weight: bold;
      }

      &--btn {
        all: unset;
        cursor: pointer;
        font-size: 1.6rem;
        margin: 0 1rem;
        color: var(--color-text);
        background-image: linear-gradient(to left top, rgba(var(--color-primary-rgb), .6),
            rgba(var(--color-primary-rgb), .9));
        border-radius: 50%;
        padding: 1.5rem;
        line-height: 1;
        transition: all .2s;

        &:hover {
          // padding: 1.6rem;
          background-image: linear-gradient(to left top, rgba(var(--color-primary-rgb), .9),
              rgba(var(--color-primary-rgb), 1));
          transform: translateY(-3px);
        }
      }
    }
  }

  @include slideTranslate
}
</style>
