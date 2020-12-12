<template>
    <div class="modal" v-show="value">
        <div class="container">
            <h2>Real World Purchases</h2>
            <p>"Buy" real world things at real world prices. Many items are just an opportunity to blow some of your hard earned cash. Others have a return on investment. Make sure you really want it though because you cannot sell a real world "purchase" after buying it.</p>
            <p>Check "More info" on each card or filter by utility to see if you are investing for the future. Please note that not all category types have a return on investment so its best to filter by all categories if looking to make an investment.</p>
            <button @click.prevent="close" class="">
                Close
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            value: {
                required: true
            }
        },

        methods: {
            close() {
                this.$emit("input", !this.value);
            }         
        }
    };
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .modal {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.9);
    }

    .container {
        background-color: $color-green-dark;
        box-shadow: $box-shadow-lg;
        width: calc(100% - 2rem);
        max-width: 450px;
        padding: 2rem 1rem;
        margin: 1rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        * {
            text-align: center;
        }

        h2 {
            font-size: $font-header-sm;
            color: $color-cream;
            font-weight: 500;
        }

        p {
            margin: $vertical-spacing-sm auto;
            line-height: $line-height-paragraph;
            color: $color-cream;
            font-size: $font-paragraph-sm;
        }

        button {
            @include buttonDefaultStyling;
            background: $color-red-user-action;
        }
    }
</style>