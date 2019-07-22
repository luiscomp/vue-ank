<template>
    <div class="page">
        <div class="page--header" :class="{'page--header__hidden': !hasHeader}" >
            <div class="page--header__content" :style="{ 'justify-content': headerAlign === 'center' ? 'center' : headerAlign === 'right' ? 'flex-end' : 'flex-start' }">
                <slot name="header"/>
            </div>
        </div>

        <div class="page--main" :class="{
            'page--main__with-header': !hasHeader && hasFooter,
            'page--main__with-footer': hasHeader && !hasFooter,
            'page--main__with-header-and-footer': hasHeader && hasFooter,}">
            <div class="page--main__scroll">
                <slot/>
            </div>
        </div>

        <div class="page--footer" :class="{'page--footer__hidden': !hasFooter}">
            <div class="page--footer__content" :style="{ 'justify-content': footerAlign === 'center' ? 'center' : footerAlign === 'right' ? 'flex-end' : 'flex-start' }">
                <slot name="footer"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AnkPage',
    props: {
        headerAlign: {
            type: String,
            required: false,
            default: 'left'
        },
        footerAlign: {
            type: String,
            required: false,
            default: 'left'
        }
    },
    computed: {
        hasHeader() {
            return !!this.$slots['header']
        },
        hasFooter() {
            return !!this.$slots['footer']
        }
    }
}
</script>

<style lang="scss" scoped>
$cor-sombra: #00000030;
$cor-card: #FFFFFF;
$cor-borda: #DDDFE6;
$cor-header: #F4F5F9;
$cor-main: #FFFFFF;

@mixin card_content {
    background-color: $cor-card;
    border: 0px solid $cor-card;
    border-radius: 5px;
    -webkit-box-shadow: 0px 2px 4px 0px $cor-sombra;
    -moz-box-shadow: 0px 2px 4px 0px $cor-sombra;
    box-shadow: 0px 2px 4px 0px $cor-sombra;
}

.page {
    @include card_content;
    height: 100%;
    width: 100%;
    border: 1px solid $cor-borda;

    &--header {
        position: relative;
        height: 50px;
        background-color: $cor-header;
        border-radius: 5px 5px 0px 0px;

        &__content {
            position:absolute;
            top: 0px;
            right: 16px;
            left: 16px;
            bottom: 0px;
            display: flex;
            flex-direction: row;

            * {
                align-self: center;
            }
        }

        &__hidden {
            height: 0px !important;
        }
    }

    &--main {
        height: 100%;
        background-color: $cor-main;

        &__scroll {
            height: 100%;
            overflow: auto;
        }

        &__with-header {
            height: calc(100% - 50px) !important;
            border-radius: 5px 5px 0px 0px;
        }

        &__with-footer {
            height: calc(100% - 50px) !important;
            border-radius: 0px 0px 5px 5px;
        }

        &__with-header-and-footer {
            height: calc(100% - 100px) !important;
            border-radius: 5px;
        }
    }

    &--footer {
        position: relative;
        height: 50px;
        background-color: $cor-header;
        border-radius: 0px 0px 5px 5px;

        &__content {
            position:absolute;
            top: 0px;
            right: 16px;
            left: 16px;
            bottom: 0px;
            display: flex;
            flex-direction: row;

            * {
                align-self: center;
            }
        }

        &__hidden {
            height: 0px !important;
        }
    }
}
</style>
