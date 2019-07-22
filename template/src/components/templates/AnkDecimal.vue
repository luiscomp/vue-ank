<template>
    <div class="vs-component vs-con-input-label vs-input vs-input-primary">
        <label for="" class="vs-input--label">\{{ label }}</label>
        <div class="vs-con-input">
            <money v-model="numberValue" v-bind="moneyFormat" class="vs-inputx vs-input--input normal" :style="{'text-align': right ? 'end' : 'start'}" style="border: 1px solid rgba(0, 0, 0, 0.2);" @keyup.enter.native="enter"/>
        </div>
    </div>
</template>

<script>
import { Money } from 'v-money'
export default {
    components: {
        Money
    },
    model: {
        prop: 'valor',
        event: 'change'
    },
    props: {
        label: {
            type: String,
            required: false,
            default: ''
        },
        valor: {
            type: Number,
            required: false,
            default: 0.00
        },
        precisao: {
            required: false,
            default: 2
        },
        right: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            numberValue: this.valor,
            moneyFormat: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                precision: this.precisao,
                masked: false
            }
        }
    },
    methods: {
        enter() {
            this.$emit('enter')
        }
    },
    watch: {
        numberValue: function(v) {
            this.$emit('change', v)
        },
        valor: {
            handler(v) {
                this.numberValue = v
            }
        }
    }
}
</script>
