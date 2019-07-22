<template>
    <div class="content">
        <div class="content--line" :style="{ 'background-color': lineColor }"/>
        <div class="content--main" :style="{ 'color': textColor, 'background-color': color }">
            <vs-icon v-if="icon" :icon="icon"></vs-icon>
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false,
            default: '#1F75FF20'
        },
        textColor: {
            type: String,
            required: false,
            default: '#1F74FF'
        },
        lineColor: {
            type: String,
            required: false,
            default: '#1F74FF'
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    position: relative;
    min-height: 35px;
    height: auto;
    width: 100%;
    border-radius: 5px;

    &--line {
        position: absolute;
        height: 100%;
        left: 0;
        width: 6px;
        float: left;
        border-radius: 5px 0px 0px 5px;
    }

    &--main {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 6px;
        padding: 0px 10px;
        border-radius: 0px 5px 5px 0px;
        display: flex;

        * {
            padding-right: 10px;
            display: inline-block;
            margin: auto 0;
        }
    }
}
</style>
