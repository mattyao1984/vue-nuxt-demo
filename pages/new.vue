<template>
  <Items></Items>
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
