<template>
  <div class="dropdown-filter">
    <div
      class="dropdown-filter__control"
      :class="{ active: isChecked }"
      @click="isDropdownShow = !isDropdownShow"
    >
      {{ placeholder }}
      <div v-if="isChecked" class="dropdown-filter__active">
        <span>{{ checkedListByValue[0].label }}</span>
        <span v-if="checkedListByValue.length >= 2" class="dropdown-filter__counter">...({{ checkedListByValue.length }})</span>
      </div>
    </div>
    <div v-if="isDropdownShow" class="dropdown-filter__list">
      <div v-for="item in controls" :key="item.value" class="dropdown-filter__item">
        <div class="dropdown-filter__checkbox-block">
          <input
            class="dropdown-filter__checkbox"
            type="checkbox"
            :id="item.value"
            :name="item.value"
            :value="item.value"
            v-model="checkedItems"
            @change="onChange"
          />
          <label class="dropdown-filter__label" :for="item.value">
            {{ item.label }}
            <p class="dropdown-filter__description">{{ item.description }}</p>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CatalogFiltersDropdown',
  props: ['value', 'controls', 'placeholder'],
  data () {
    const checkedItems: Array<any> = [];
    const isDropdownShow: boolean = false;

    return {
      checkedItems,
      isDropdownShow,
    }
  },
  computed: {
    isChecked() {
      return this.value.length;
    },
    checkedListByValue() {
      return this.controls.filter((item) => this.value.includes(item.value));
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
.dropdown-filter {
  position: relative;
  &__control {
    border-radius: 4px;
    width: 200px;
    padding: 9px 35px 9px 12px;
    position: relative;
    text-align: left;
    height: 40px;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid rgba(0,0,0,.15);
    &:after {
      content: "";
      position: absolute;
      background: url('~assets//icon-arrow-down.svg') no-repeat;
      background-size: cover;
      width: 15px;
      height: 18px;
      right: 12px;
      top: 9px;
      opacity: .6;
    }
    &.active {
      font-size: 0;
      padding-right: 14px;
      padding-bottom: 0;
      &:after {
        display: none;
      }
    }
  }
  &__list {
    border-radius: 4px;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
    border: none;
    padding: 16px 0;
    min-width: 350px;
    top: 38px;
    margin-top: 0;
    right: 0;
    position: absolute;
    left: 0;
    z-index: 1000;
    float: left;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
  }
  &__item {
    padding: 0 18px 8px;
    line-height: 16px;
    height: auto;
    font-size: 14px;
    color: #000;
  }
  &__checkbox-block {
    padding-left: 22px;
    position: relative;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
  }
  &__checkbox {
    position: absolute;
    top: 0;
    left: 0;
  }
  &__label {
    white-space: nowrap;
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 400;
    cursor: pointer;
    display: inline-block;
    max-width: 100%;
  }
  &__description {
    color: #a7a7a7;
    margin: 2px 0 0;
  }
  &__active {
    background: #dfebff;
    color: #000;
    border-radius: 4px;
    padding: 4px 10px 3px 8px;
    margin-right: 0;
    margin-bottom: 8px;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
    text-align: left;
    font-size: 14px;
    position: relative;
    float: left;
  }
  &__counter {
    margin-left: -3px;
  }
}
</style>
