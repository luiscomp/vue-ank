<template>
    <div class="popup">
        <vs-popup :title="$t('editar_imagem')" :active.sync="ativo">
            <ank-page footer-align="right">
                <div class="container">
                    <div class="container--crop">
                        <clipper-fixed ref="clipper" :src="imagem" bg-color="black" preview="fixed-preview" class="cropper" :ratio="ratio"/>
                    </div>
                    <div class="container--prev">
                        <span>{{ $t('pre_visualizacao') }}</span>
                        <clipper-preview name="fixed-preview" :src="imagem" class="preview"/>
                        <vs-button v-if="imagem !== ''" color="primary" type="flat" style="margin-top: 10px; width: 100%" @click="concluir">{{ $t('concluir').toUpperCase() }}</vs-button>
                    </div>
                </div>

                <template slot="footer">
                    <ank-alert icon="new_releases">
                        <span>{{ $t('carregue_uma_imagem') }}</span>
                    </ank-alert>

                    <clipper-upload ref="uploadFile" v-model="imagem" class="vs-button vs-button-primary vs-button-border vs-button-flat" style="width: 180px; margin-left: 10px">{{ $t('carregar_imagem').toUpperCase() }}</clipper-upload>
                </template>
            </ank-page>
        </vs-popup>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'exibir',
        event: 'change'
    },
    props: {
        exibir: {
            type: Boolean,
            required: true
        },
        ratio: {
            type: Number,
            required: false,
            default: 4 / 4
        }
    },
    data() {
        return {
            imagem: null,
            ativo: this.exibir
        }
    },
    mounted() {
        window.addEventListener('keyup', event => {
            if (this.exibir) {
                if (event.key === 'Escape') {
                    this.fechar()
                }
            }
        })
    },
    methods: {
        fechar() {
            this.$emit('change', false)
        },
        concluir(event) {
            const canvas = this.$refs.clipper.clip()
            var resultImage = canvas.toDataURL('image/jpeg', 1)

            var blobBin = atob(resultImage.split(',')[1])
            var array = []
            for (var i = 0; i < blobBin.length; i++) {
                array.push(blobBin.charCodeAt(i))
            }

            var file = new Blob([ new Uint8Array(array) ], { type: 'image/jpeg' })

            this.$emit('cropped', { dataURL: resultImage, file: file })
            this.fechar()
        }
    },
    watch: {
        ativo(v) {
            this.$emit('change', v)
        },
        exibir(v) {
            this.ativo = v
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../scss/base/_cores.scss';
.container {
    position: relative;
    height: 350px;
    display: flex;

    &--crop {
        flex: 1;

        .cropper {
            height: 100%;
            width: 100%;
        }
    }

    &--prev {
        min-height: 180px;
        min-width: 180px;
        position: fixed;
        top: calc(50% - 126px);
        right: calc(50% - 450px - 60px);
        padding: 10px;
        background-color: $cor-card;
        border: 1px solid $cor-destaque;
        border-radius: 5px;

        .preview {
            max-height: 180px;
            max-width: 180px;
        }
    }
}

.popup {
    position: relative;
}

.acoes {
    position: fixed;
    top: calc(50% + 225px + 5px);
    right: calc(50% - 280px);

    * {
        display: inline-block;
        margin-left: 10px;
    }
}
</style>
