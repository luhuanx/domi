<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @use "sass:math";
    .tags {
        flex-grow: 1;
        font-size: 14px;
        padding: 16px;
        background-color: #FFE9E9;
        display: flex;
        flex-direction: column-reverse;
        > .current {
            display: flex;
            flex-wrap: wrap;
            > li {
                font-size: 16px;
                background: #FCACA4;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: math.div($h, 2);
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
            }
        }
        > .new {
            padding-top: 16px;
            button {
                background: transparent;
                border: none;
                border-bottom: 1px solid #999;
                color: #E35084;
                padding: 0 3px;
            }
        }
    }
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>