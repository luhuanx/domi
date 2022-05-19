<template>
    <div>
        <label class="notes">
            <span class="name">{{this.fieldName}}</span>
            <input type="text" 
                v-model="value"
                :placeholder="this.placeholder">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    
    @Component
    export default class Notes extends Vue {
        value='';

        @Prop({required: true}) fieldName!: string;
        @Prop() placeholder?: string;


        @Watch('value')
        onValueChanged(value: string){
            this.$emit('update:value', value)
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .notes {
        font-size: 14px;
        color: $color-highlight;
        display: block;
        padding: 0 16px;
        display: flex;
        align-items: center;
        .name {
            padding-right: 16px;
        }
        input {
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            color: #FC94B4;
            &::placeholder {
                color: #FC94B4;
            }
        }  
    }
</style>