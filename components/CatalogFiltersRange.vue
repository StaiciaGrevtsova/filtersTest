<template>
  <div class="input-group">
    <catalog-filters-range-input
      :placeholder="placeholderFrom"
      :value="Math.max(value)"
      @input="onChangeFrom"
    />
    <catalog-filters-range-input
      :placeholder="placeholderTo"
      :value="Math.min(value)"
      @input="onChangeTo"
    />
    <div class="input-group__type">
      {{ type }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CatalogFiltersRange',
  props: ['placeholderFrom', 'placeholderTo', 'value', 'type'],
  data () {
    const range: Array<number | null> = [null, null];

    return {
      range,
    }
  },
  methods: {
    onChangeFrom(value: number) {
      this.range[0] = value;
      this.onChangeRange();
    },
    onChangeTo(value: number) {
      this.range[1] = value;
      this.onChangeRange();
    },
    onChangeRange() {
      this.$emit('input', this.range);
    }
  }
})
</script>

<style lang="scss">
.input-group {
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.15);
  display: flex;
  justify-content: space-between;
  &__type {
    display: inline-block;
    vertical-align: top;
    margin: 0;
    padding: 0;
    width: 38px;
    min-width: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 14px;
  }
}
</style>
