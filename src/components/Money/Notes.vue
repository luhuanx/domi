<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" :value="value"
                @input="onChange"
                placeholder="在这里添加备注">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    
    @Component
    export default class Notes extends Vue {
        value='';

        onChange(event:KeyboardEvent){
            const input = event.target as HTMLInputElement;
            this.value = input.value;
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