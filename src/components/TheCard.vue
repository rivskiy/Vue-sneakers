<template>
  <li class="card">
    <img
      class="card__img"
      :src="require(`@/assets/img/sneakers/${product.img}`)"
      alt="Sneakers"
    />
    <h3 class="card__title">{{ product.title }}</h3>
    <div class="card__bottom">
      <div>
        <p class="card__subtitle">Цена</p>
        <p class="card__price">{{ product.price }} руб.</p>
      </div>
      <button
        :class="!product.inCart ? 'icon-btn add-btn' : 'icon-btn add-btn add-btn--active'"
        type="button"
        @click="emit('addCartItem', product)"
      >
        <BaseIcon name="add" v-if="!product.inCart"/>
        <BaseIcon name="added" v-if="product.inCart"/>
        <span class="visually-hidden">Добавить в корзину</span>
      </button>
    </div>
    <button
      :class="!product.inFavorites ? 'icon-btn like-btn' : 'icon-btn like-btn like-btn--active'"
      type="button"
      @click="emit('addFavorites', product)"
    >
      <BaseIcon name="like"/>
    </button>
  </li>
</template>

<script setup>
import BaseIcon from "@/components/BaseIcon.vue";

const props = defineProps({
  product: {
    type: Object,
    require: true,
  },
});

const emit = defineEmits(["addCartItem", "addFavorites"]);

</script>

<style lang="scss">

.card {
  position: relative;
  width: 210px;
  padding: 28px;

  border: 1px solid #f3f3f3;
  border-radius: 40px;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-5px);
  }
  &__img {
    width: 133px;
    height: 112px;
  }
  &__title {
    font-size: inherit;
    font-weight: 400;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
  }
  &__subtitle,
  &__price {
    margin: 0;
  }
  &__subtitle {
    font-size: 11px;
    font-weight: 500;
    color: #bdbdbd;
  }
  &__price {
    font-weight: 700;
  }
}

.add-btn {
  border: 2px solid #dadada;
  &:hover {
    background-color: #b4ecbe;
  }
  & svg:hover {
    stroke: #fff
  }
  &--active {
    border: none;
    background: rgb(137,240,156);
    background: linear-gradient(180deg, rgba(137,240,156,1) 0%, rgba(60,199,85,1) 100%);
    & svg {
      stroke: #fff;
      stroke-width: 3px;
    }
  }
}

.like-btn {
  position: absolute;
  top: 30px;
  left: 30px;

  border: 2px solid #dadada;
  &:hover {
    background-color: #FEF0F0;
  }
  & svg {
    fill: #fff;
  }
  &--active {
    border: none;
    background-color: #FEF0F0;
    & svg {
      fill: #FF8585;
      stroke: #FF8585;
    }
  }
}
</style>