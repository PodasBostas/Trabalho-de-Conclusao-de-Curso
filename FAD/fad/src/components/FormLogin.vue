<template>
    <div class="formLogin">
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="password" v-model="password">
            </div>
            <div>
                <Submit/>
            </div>
        </form>
    </div>
</template>

<script>
import Submit from './Submit.vue';

export default {
    name: "FormLogin",
    components: {
        Submit
    },
    data(){
        return{
            name: "",
            password: ""
        }
    },
    methods: {
        enviarFormulario(e) {
            
            e.preventDefault();

            const name = this.name;
            const password = this.password;

            console.log("Formulário Enviado!")
            console.log("Nome: " +name+ "\nSenha: " +password)
        }
    }
}
</script>
