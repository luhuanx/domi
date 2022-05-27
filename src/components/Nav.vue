<template>
  <nav>

    <router-link to="/labels"
                 class="item"
                 active-class="selected">
      <Icon name='label' />
      标签
    </router-link>
    <router-link to="/money"
                 class="item"
                 active-class="selected">
      <Icon name='money' />
      记一笔
    </router-link>
    <router-link to="/statistics"
                 class="item"
                 active-class="selected">
      <Icon name='statistics' />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Nav',
})
</script>

<style lang="scss" scoped>
@import '~@/assets/style/helper.scss';
nav {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fc94b4;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
</style>