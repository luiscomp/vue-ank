<template>
    <div class="card">
        <vs-row class="card--header">
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="12">
                <span class="titulo">{{ titulo }}</span>
            </vs-col>
        </vs-row>

        <vs-row class="card--bottom">
            <vs-col vs-type="flex" vs-justify="left" vs-align="flex-end" vs-w="6" vs-sm="12">
                <vs-icon :icon="icone" size="small" :color="corIcone" style="float: left"></vs-icon>
                <span style="float: right" :style="{ 'color': corIcone }">{{ rentabilidade }}</span>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="6" vs-sm="12">
                <span class="valor">{{ valor }}</span>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
export default {
    props: {
        titulo: {
            type: String,
            required: true
        },
        icone: {
            type: String,
            required: true
        },
        corIcone: {
            type: String,
            required: true
        },
        rentabilidade: {
            type: String,
            required: true
        },
        valor: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
$md: 768px;
$cor-card: #FFFFFF;
$cor-sombra: #00000030;

.card {
    width: 100%;
    height: 120px;
    margin: 0px 16px 10px 0px;
    padding: 16px;
    background-color: $cor-card;
    border: 1px solid $cor-card;
    border-radius: 5px;
    -webkit-transition: all 300ms ease-in;
    -moz-transition: all 300ms ease-in;
    -ms-transition: all 300ms ease-in;
    -o-transition: all 300ms ease-in;
    transition: all 300ms ease-in;

    @media (min-width: $md) {
        margin: 0px 16px;
    }

    &:hover {
        -webkit-box-shadow: 0px 4px 25px 0px $cor-sombra;
        -moz-box-shadow: 0px 4px 25px 0px $cor-sombra;
        box-shadow: 0px 4px 25px 0px $cor-sombra;
    }

    &--header {
        height: calc(50%);

        .titulo {
            font-size: 18px;
            font-weight: bold;
        }
    }

    &--bottom {
        height: calc(50%);

        .valor {
            font-size: 28px;
            font-weight: bold;
            line-height: 18px;
        }
    }
}
</style>
