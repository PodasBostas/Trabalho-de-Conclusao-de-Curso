<template>
    <div id="formSignin">
        <header>
            <IconCent />
        </header>
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <label for="nome">Nome</label>
                <input type="text" placeholder="Digite um nome para o seu usuário" v-model="name">
            </div>
            <div>
                <label for="nome">Senha</label>
                <input type="password" placeholder="Digite uma senha" v-model="password">
            </div>
            <div>
                <label for="nome">Confirmar senha</label>
                <input type="password" placeholder="Digite a mesma senha" v-model="password">
            </div>
            <div>
                <Submit/>
            </div>
        </form>
    </div>
</template>

<script>
import IconCent from './IconCent.vue';

export default{
    name: "FormSignin",
    components: {
        IconCent
    }
}
</script>

<style scoped>

</style>
