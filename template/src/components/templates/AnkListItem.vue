<template>
    <div class="item" :class="{'striped': (($vnode.key % 2 == 0) && striped) }" :style="{ height: height }">
        <div v-if="selected" class="item__selected"/>

        <div class="item--content" :class="{ 'item--content__clickable': hasClickListenner }"  @click="$emit('click')">
            <slot/>
        </div>

        <div class="item--actions">
            <slot name="actions"/>
        </div>

        <div v-if="divider" class="item--divider"/>
    </div>
</template>

<script>
export default {
    props: {
        selected: {
            type: Boolean,
            required: false,
            default: false
        },
        height: {
            type: String,
            required: false,
            default: '40px'
        },
        divider: {
            type: Boolean,
            required: false,
            default: true
        },
        striped: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        hasClickListenner() {
            return this.$listeners && this.$listeners.click
        }
    }
}
</script>

<style lang="scss" scoped>
$primary-color: #1F74FF;
$disabled-color: #00000010;
$selected-color: #74B9FF15;

.striped {
	background-color: $selected-color;
	border: 1px solid $selected-color;
}

.item {
    position: relative;
	width: 100%;

    &__selected {
        position: absolute;
        left: 0;
        height: 100%;
        min-width: 5px;
        background-color: $primary-color;
        border-radius: 0px 5px 5px 0px;
    }

    &--content {
        position: absolute;
        top: 0;
        bottom: 0;
        padding: 0 10px;
        width: 100%;
        display: flex;
		flex-direction: row;

        &__clickable {
            cursor: pointer;

            &:hover {
                background-color: $selected-color
            }
        }

        * {
            align-self: center;
            vertical-align: -webkit-baseline-middle
        }
    }

    &--actions {
        position: absolute;
        top: 5px;
        right: 5px;
        bottom: 5px;
        display: flex;
        flex-direction: row;

        * {
            float: right;
            align-self: center;
        }
    }

    &--divider {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 0.6px;
        background-color: $disabled-color;
    }
}
</style>
