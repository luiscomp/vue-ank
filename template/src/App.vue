<template>
    <div id="app" class="full-content">
        <router-view/>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'App',
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            loading: state => state.loading
        })
    },
    methods: {
        ...mapActions([
            'showLoading'
        ])
    }
}
</script>
