<template>
  <div class="f1 code">
    <h3>Ids:</h3>
    {{ids}}

    <h3>Products:</h3>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id">
        {{product.name}}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  h3 {
    margin: 0 0 10px;
  }

  ul {
    margin: 20px 0 50px 10px;
    padding: 0;

    &.user-list {
      li {
        display: inline-block;
        margin-right: 30px;
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
      'ids'
    ]),

    asyncData() {
      return axios.get('users')
        .then(res => ({
          users: res.data
        }));
    }
  };
</script>
