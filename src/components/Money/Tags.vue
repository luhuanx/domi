<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag.id"
                :class="{selected: selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)">{{tag.name}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    type Tag = {
        id: string
        name: string
    }

    import createId from '@/lib/createId';
    import tagListModel from '@/models/tagListModel';
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    
    @Component
    export default class Tags extends Vue {
        @Prop() readonly dataSource: Tag[] | undefined;
        selectedTags: Tag[] = [];
        
        toggle(tag: Tag){
            const index = this.selectedTags.findIndex(t => t.id === tag.id);
            if(index>=0){
                this.selectedTags.splice(index, 1);
            }else{
                this.selectedTags.push(tag);
            }
            this.$emit('update:value', this.selectedTags);
        }

        create(){
            const name = window.prompt('请输入标签名');
            if(name === '' || !name){
              window.alert('标签名不能为空');
            }else if(this.dataSource){
              tagListModel.create(name)
              this.$emit(
                'update:dataSource', 
                [...this.dataSource, {id: createId().toString(), name}]
              );
            }
                
        }
    }
</script>

<style lang="scss" scoped>
    @use "sass:math";
    .tags {
        flex-grow: 1;
        font-size: 14px;
        padding: 16px;
        background-color: #fff;
        display: flex;
        flex-direction: column-reverse;
        > .current {
            display: flex;
            flex-wrap: wrap;
            > li {
                font-size: 16px;
                $bg:#F4CCCC;
                background: $bg;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: math.div($h, 2);
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
                &.selected {
                    background: darken($bg, 20%);
                    color:#FFE9E9;
                }
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
