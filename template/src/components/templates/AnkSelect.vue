<template>
    <vs-select autocomplete :label="label" v-model="currentContent" width="100%">
        <vs-select-item :value="item" :text="item[attrView]" v-for="(item,i) in options" :key="i"/>
    </vs-select>
</template>

<script>
export default {
    model: {
        prop: 'content',
        event: 'change'
    },
    props: {
        label: {
            type: String,
            required: false,
            default: ''
        },
        content: {
            type: Object,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        attrView: {
            type: String,
            required: true
        },
        valueKey: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            currentContent: this.content
        }
    },
    mounted() {
        if (this.currentContent && this.currentContent[this.valueKey]) {
            this.selectCurrentContent(this.currentContent)
        }
    },
    beforeUpdate() {
        if (this.currentContent[this.valueKey]) {
            this.selectCurrentContent(this.currentContent)
        }
    },
    methods: {
        selectCurrentContent(content) {
            this.currentContent = this.options.filter(item => {
                return item[this.valueKey] === content[this.valueKey]
            })[0]
        }
    },
    watch: {
        content(v) {
            this.currentContent = v
        },
        currentContent(v) {
            this.$emit('change', v)
        }
    }
}
</script>

<style>

</style>
