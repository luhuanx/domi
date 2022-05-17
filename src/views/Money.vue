<template>
    <layout class-prefix="layout">     
        <NumberPad/>
        <Types/>
        <Notes/>
        <Tags/>   
    </layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Layout from '@/components/Layout.vue'
    import Types from '@/components/Money/Types.vue'
    import Notes from '@/components/Money/Notes.vue'
    import Tags from '@/components/Money/Tags.vue'
    import NumberPad from '@/components/Money/NumberPad.vue'

    export default Vue.extend({
    components: { Layout, NumberPad, Types, Tags, Notes},
        name: 'Money',
    })
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;

    }
</style>
