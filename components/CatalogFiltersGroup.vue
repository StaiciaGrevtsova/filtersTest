<template>
  <div class="buttons-group">
    <span class="buttons-group__controls" v-for="item in controls" :key="item.value">
      <label class="buttons-group__label" :class="{ active: value.includes(item.value) }">
        <input
          class="buttons-group__checkbox"
          type="checkbox"
          :name="item.value"
          :value="item.value"
          v-model="checkedItems"
          @change="onChange"
        />
        {{ item.label }}
      </label>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CatalogFiltersGroup',
  props: ['value', 'controls'],
  data () {
    const checkedItems: Array<any> = [];

    return {
      checkedItems,
    }
  },
  methods: {
    onChange() {
      this.$emit('input', this.checkedItems);
    }
  }
})
</script>

<style lang="scss">
.buttons-group {
  background: #fff;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 4px;
  padding: 6px 10px;
  display: flex;
  vertical-align: middle;
  &__controls {
    padding: 0;
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 1.5;
    border-color: #ccc;
    color: #000;
  }
  &__label {
    font-size: 14px;
    border-radius: 4px;
    padding: 6px 9px;
    line-height: 1;
    transition: all .3s ease;
    margin-left: 1px;
    display: inline-block;
    cursor: pointer;
    &:hover:not(.active) {
      background: #f5f4f0;
    }
    &.active {
      background: #dfebff;
    }
  }
  &__checkbox {
    display: none;
  }
}
</style>
