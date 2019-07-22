<template>
    <div class="content">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'AnkBox'
}
</script>

<style lang="scss" scoped>
.content {
    margin: 10px;
    padding: 10px;
    border: 1px solid #00000030;
    border-radius: 5px;
}
</style>
