<template>
  <div class="pa1">
    <h1 class="code f1">New</h1>
    <Items></Items>
  </div>
</template>

<style lang="scss">

</style>

<script>
  import Items from '~/components/items.vue';

  export default {
    components: {
      Items
    },
    async fetch({ store }) {
      await store.dispatch('LOAD_ITEMS', 'newstories.json');
    }
  }
</script>
