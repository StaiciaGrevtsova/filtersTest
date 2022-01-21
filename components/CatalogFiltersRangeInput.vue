<template>
  <div class="range">
    <input
      type="tel"
      maxlength="12"
      class="range__input"
      :placeholder="placeholder"
      @input="onChange"
      @keypress="isNumber($event)"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CatalogFiltersRangeInput',
  props: ['value', 'placeholder'],
  data () {
    const checkedItems: Array<any> = [];

    return {
      checkedItems,
    }
  },
  methods: {
    onChange(e: any) {
      this.$emit('input', e.target.value);
    },
    isNumber(e: any) {
      e = (e) ? e : window.event;
      const charCode = (e.which) ? e.which : e.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        e.preventDefault();
      } else {
        return true;
      }
    }
  }
})
</script>

<style lang="scss">
.range {
  display: inline-block;
  vertical-align: top;
  margin: 0;
  border-radius: 0;
  width: 50%;
  position: relative;
  &:first-child:after {
    top: 13px;
    bottom: 0;
    height: 12px;
    background: rgba(0,0,0,.15);
    transform: rotate(90deg);
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 6px;
    bottom: 6px;
    width: 1px;
    background-color: #cbcbcb;
    z-index: 1;
  }

  &__input {
    border: none;
    padding: 6px 12px;
    width: 108px;
    height: 38px;
    margin-right: 20px;
    padding-right: 0;
    border-radius: 4px;
    font-size: 14px;
    background-color: transparent;
    outline: none;
  }
}
</style>

