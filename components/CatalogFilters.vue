<template>
  <div class="catalog-filters">
    <catalog-filters-group
      :value="roomsSelected"
      :controls="roomsControls"
      @input="onChangeRooms"
    />
    <catalog-filters-range
      placeholder-from="Цена от"
      placeholder-to="до"
      :value="priceRange"
      type="₽"
      @input="onChangePriceRange"
    />
    <catalog-filters-dropdown
      placeholder="Отделка"
      :value="facingSelected"
      :controls="facingControls"
      @input="onChangeFacing"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'CatalogFilters',
  computed: {
    ...mapGetters({
      roomsControls: 'rooms/getRooms',
      roomsSelected: 'rooms/getChecked',
      priceRange: 'price/getPriceRange',
      facingControls: 'facing/getFacingList',
      facingSelected: 'facing/getChecked',
    })
  },
  methods: {
    ...mapMutations({
      setRoomsChecked: 'rooms/SET_CHECKED_ROOMS',
      setPriceRange: 'price/SET_PRICE_RANGE',
      setFacingChecked: 'facing/SET_CHECKED_FACING',
    }),
    onChangeRooms(values: any) {
      this.setRoomsChecked(values);
    },
    onChangePriceRange(values: any) {
      this.setPriceRange(values);
    },
    onChangeFacing(values: any) {
      this.setFacingChecked(values);
    },
  }
})
</script>

<style>
.catalog-filters {
  display: flex;
  justify-content: space-between;
}
</style>
