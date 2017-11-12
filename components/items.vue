<template>
  <div class="f1 code">
    <h3 class="f3">First 8 Items:</h3>
    <ul class="list item-list pa1">
      <li class="item" v-for="(item, index) in items" :key="item.id">
        {{index + 1}}. {{item.title}}

        <div class="item-time f5">
          {{item.time | timeSince}} ago
        </div>
      </li>
    </ul>

    <h3 class="f3">Products:</h3>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id">
        {{product.name}}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  h3 {
    margin: 0 0 10px;
  }

  ul {
    margin: 20px 0 50px 10px;
    padding: 0;

    li {
      margin-bottom: 40px;

      &.item {
        display: flex;

        .item-time {
          align-self: flex-end;
        }
      }
    }

    &.product-list {
      li {
        margin-right: 30px;
        list-style: none;
      }
    }
  }
</style>

<script>
  import axios from '~/plugins/axios';
  import { mapState } from 'vuex';

  export default {
    computed: mapState([
      'products',
      'ids',
      'items'
    ]),

    asyncData() {
      return axios.get('users')
        .then(res => ({
          users: res.data
        }));
    }
  };
</script>
