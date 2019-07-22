<template>
    <div class="ank-full-content">
        <div class="login-bg">

        </div>
        <div class="login-form" v-bind:class="{ 'login-form__visivel': loginVisible }">
            <div class="login-form--formulario">
                <vs-progress :indeterminate="loading" color="primary" style="top: -12px"/>

                <div class="conteudo-formulario">
                    <h1>\{{ $t('login') }}</h1>
                    <vs-input icon="verified_user" :label-placeholder="$t('codigo')" v-model="usuario.empresa.codigo"/>
                    <vs-input icon="fingerprint" :label-placeholder="$t('cpf')" v-model="usuario.cpf" v-mask="'###.###.###-##'"/>
                    <vs-input icon="lock" :label-placeholder="$t('senha')" type="password" style="margin: 20px 0px 10px 0px" v-model="usuario.senha"/>

                    <ank-alert :icon="iconError" v-if="erroLogin" color="#E74C3C35" lineColor="#E74C3C" textColor="#E74C3C" style="margin-bottom: 10px; width: 98%">
                        <span>\{{ erroLogin }}</span>
                    </ank-alert>

                    <div class="login-form--formulario__acoes">
                        <span style="float: left; font-size: 14px; line-height: 26px; height: 26px; flex: 2">\{{ $t('esqueceu_sua_senha') }}</span>
                        <vs-button size="small" :disabled="loading" style="flex: 1; margin-left: 10px" @click="signIn()">\{{ $t('entrar') }}</vs-button>
                    </div>
                </div>
            </div>
            <div class="login-form--footer">
                <span>\{{ $t('corporacao') }}</span>
            </div>
        </div>
    </div>
</template>

<script src="./login"></script>
