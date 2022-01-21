<template>
  <div class="container">
    <catalog-filters />
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexPage',
  async asyncData({ store }: any) {
    const rooms = await store.dispatch('rooms/getRoomsFilterList');
    const facing = await store.dispatch('facing/getFacingFilterList');
    return { rooms, facing };
  },
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 0;
  margin: 0;
}
*, :after, :before {
  box-sizing: border-box;
}
.container {
  width: 80%;
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
</style>
