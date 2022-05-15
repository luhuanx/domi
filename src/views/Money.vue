<template>
    <div class="nav-wrapper">
        <div class="content">
            Money.vue
        </div>
        <Nav></Nav>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Money',
    })
</script>

<style lang="scss" scoped>
    .nav-wrapper{
        border-bottom: 1px solid green;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        flex-grow: 1;
        overflow: auto;
    }
</style>