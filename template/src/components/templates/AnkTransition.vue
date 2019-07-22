<template>
    <transition :enter-active-class="this.in" :leave-active-class="this.out">
        <slot/>
    </transition>
</template>

<script>
export default {
    name: 'AnkTransition',
    props: {
        in: {
            type: String,
            required: false,
            default: 'bottomIn'
        },
        out: {
            type: String,
            required: false,
            default: 'bottomOut'
        }
    }
}
</script>

<style lang="scss" scoped>
.fadeIn {
    position: relative;
    animation: fadein 300ms ease-in-out;
    -moz-animation: fadein 300ms ease-in-out; /* Firefox */
    -webkit-animation: fadein 300ms ease-in-out; /* Safari and Chrome */
    -o-animation: fadein 300ms ease-in-out; /* Opera */
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.fadeOut {
    position: relative;
    animation: fadeout 200ms ease-in-out;
    -moz-animation: fadeout 200ms ease-in-out; /* Firefox */
    -webkit-animation: fadeout 200ms ease-in-out; /* Safari and Chrome */
    -o-animation: fadeout 200ms ease-in-out; /* Opera */
}

@keyframes fadeout {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@-moz-keyframes fadeout { /* Firefox */
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@-webkit-keyframes fadeout { /* Safari and Chrome */
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@-o-keyframes fadeout { /* Opera */
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.bottomIn {
    position: relative;
    animation: bottomin 300ms ease-in-out;
    -moz-animation: bottomin 300ms ease-in-out; /* Firefox */
    -webkit-animation: bottomin 300ms ease-in-out; /* Safari and Chrome */
    -o-animation: bottomin 300ms ease-in-out; /* Opera */
}
@keyframes bottomin {
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
}
@-moz-keyframes bottomin { /* Firefox */
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
}
@-webkit-keyframes bottomin { /* Safari and Chrome */
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
}
@-o-keyframes bottomin { /* Opera */
    from {
        opacity: 0;
        top: -20px;
    }
    to {
        opacity: 1;
        top: 0px;
    }
}

.bottomOut {
    position: relative;
    animation: bottomout 200ms ease-in-out;
    -moz-animation: bottomout 200ms ease-in-out; /* Firefox */
    -webkit-animation: bottomout 200ms ease-in-out; /* Safari and Chrome */
    -o-animation: bottomout 200ms ease-in-out; /* Opera */
}
@keyframes bottomout {
    from {
        opacity: 1;
        top: 0px;
    }
    to {
        opacity: 0;
        top: 20px;
    }
}
@-moz-keyframes bottomout { /* Firefox */
    from {
        opacity: 1;
        top: 0px;
    }
    to {
        opacity: 0;
        top: 20px;
    }
}
@-webkit-keyframes bottomout { /* Safari and Chrome */
    from {
        opacity: 1;
        top: 0px;
    }
    to {
        opacity: 0;
        top: 20px;
    }
}
@-o-keyframes bottomout { /* Opera */
    from {
        opacity: 1;
        top: 0px;
    }
    to {
        opacity: 0;
        top: 20px;
    }
}
</style>
