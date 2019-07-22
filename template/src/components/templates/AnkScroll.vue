<template>
    <div class="content-scroll" >
        <div class="scroll" style="overflow-x: hidden;">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content-scroll {
    height: 100%;
    position: relative;

    .scroll {
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        overflow: auto;
    }
}
</style>
