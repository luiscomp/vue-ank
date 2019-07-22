<template>
    <div class="estatisticas-content">
        <vs-row class="estatisticas-content--header">
            <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
                <h1>\{{ $t('visao_global') }}</h1>
            </vs-col>
        </vs-row>

        <vs-row>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <estatistica-card :titulo="$t('total_pedidos').concat('/').concat($t('mes'))" icone="arrow_upward" corIcone="#27AE60" rentabilidade="13,8%" valor="320"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <estatistica-card :titulo="$t('ticket_medio').concat('/').concat($t('mes'))" icone="arrow_upward" corIcone="#27AE60" rentabilidade="5,4%" valor="65,27"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <estatistica-card :titulo="$t('faturamento_total').concat('/').concat($t('mes'))" icone="arrow_downward" corIcone="#C0392B" rentabilidade="9,2%" valor="5.748,29"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-xs="12">
                <estatistica-card :titulo="$t('pedidos_com_cupom').concat('/').concat($t('mes'))" icone="arrow_downward" corIcone="#C0392B" rentabilidade="2%" valor="3%"/>
            </vs-col>
        </vs-row>

    </div>
</template>

<script src="./estatisticas.js" />
