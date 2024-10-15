<template>
    <div class="languages-page">
        <Sidebar />
        <div class="container">
            <Back />
            <form class="interface" @submit.prevent="submitForm">
                <h1>Crie seu dockerfile</h1>
                <div class="input-requeriments">
                    <input type="file">
                </div>
                <h2>Escolha a imagem base</h2>
                <div class="input-base-image">
                    <div class="top">
                        <img class="base-logo" src="../assets/img/python-icon.svg">
                        <label for="rad1">Python</label>
                        <input type="radio" name="base-image" class="radio" id="rad1" value="python:latest" v-model="baseImage">
                    </div>
                    <div class="mid">
                        <img class="base-logo" src="../assets/img/r-icon.svg">
                        <label for="rad4">R</label>
                        <input type="radio" name="base-image" class="radio" id="rad2" value="r-base:latest" v-model="baseImage">
                    </div>
                    <div class="mid">
                        <img class="base-logo" src="../assets/img/java-icon.svg">
                        <label for="rad4">Java</label>
                        <input type="radio" name="base-image" class="radio" id="rad3" value="openjdk:latest" v-model="baseImage">
                    </div>
                    <div class="bottom">
                        <img class="base-logo" src="../assets/img/julia-icon.svg">
                        <label for="rad4">Julia</label>
                        <input type="radio" name="base-image" class="radio" id="rad4" value="julia:latest" v-model="baseImage">
                    </div>
                    <div v-if="errorMessage" class="error-message">
                        {{ errorMessage }}
                    </div>
                </div>
                <div class="input-port">
                    <input class="port" type="text" placeholder="Insira qual porta deseja utilizar (Exemplo: 8080)" v-model="port">
                </div>
                <div class="input-commands">
                    <input class="commands" type="text" placeholder="Insira os comandos que vão ser utilizados (Exemplo: pip install)" v-model="commands">
                </div>
                <div class="input-submit">
                    <input class="submit" type="submit" value="Criar dockerfile">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Back from '../components/Back.vue';

export default{
  name: "Languages",
  components: {
    Sidebar,
    Back
  },
  data(){
    return{
        baseImage: "",
        port: "",
        commands: "",
        errorMessage: ""
    };
  },
  methods: {
    submitForm(){
        if (!this.baseImage) {
            this.errorMessage = "Por favor, escolha uma imagem base";
            return;
        }
        if (!this.port) {
            this.port = "8080";
        }
        this.errorMessage = "";
        const formDockerfile = {
            baseImage: this.baseImage,
            port: this.port,
            commands: this.commands
        }
        const formDockerfileJson = JSON.stringify(formDockerfile);
        console.log(formDockerfileJson);
    }
  }
}
</script>

<style scoped>

.languages-page{
    display: flex;
}

h1{
    color: #000;
    font-size: 26px;
}

h2{
    color: #000;
    font-size: 22px;
    margin-top: 30px;
}

.error-message{
    color: #ff2c2c;
    width: 100%;
    font-size: 16px;
    text-align: center;
    margin-top: 15px;
}

::placeholder{
    color: #e7e7e7;
}

label{
    font-size: 18px;
}

input[type=radio], input[type=flexbox]{
    transform: scale(1.5);
    float: right;
    margin-left: auto;
}

input[type=text]{
    background-color: #1245A8;
    border: none;
    outline: none;
    width: 100%;
    height: 70px;
    border-radius: 50px;
    padding-left: 2.5%;
    padding-right: 2.5%;
    font-size: 18px;
    margin-top: 30px;
}

.submit{
    background-color: #148f60;
    border: none;
    outline: none;
    width: 100%;
    height: 70px;
    border-radius: 50px;
    font-size: 18px;
    margin-top: 80px;
    cursor: pointer;
}

.submit:hover{
    background-color: #14af74;
}

.input-requeriments{
    margin-top: 60px;
}

.base-logo{
    height: 50px;
    width: 50px;
    margin-right: 5%;
}

.interface{
    width: 100%;
    height: 100%;
}

.container{
    width: 100%;
    padding-left: 120px;
    padding-right: 50px;
    padding-top: 2.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: 1000px;
}

.top{
    margin-top: 20px;
    width: 100%;
    height: 80px;
    background-color: #1245A8;
    border-radius: 50px 50px 0 0;
    border-bottom: 2px solid #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.mid{
    width: 100%;
    height: 80px;
    background-color: #1245A8;
    border-bottom: 2px solid #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.top:hover{
    background-color: #2662db;
}

.mid:hover{
    background-color: #2662db;
}

.bottom:hover{
    background-color: #2662db;
}

.bottom{
    width: 100%;
    height: 80px;
    background-color: #1245A8;
    border-radius: 0 0 50px 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

@media screen and (max-width: 767px){
    h1{
        font-size: 22px;
    }

    h2{
        color: #000;
        font-size: 18px;
        margin-top: 25px;
    }

    .error-message{
        color: #ff2c2c;
        font-size: 12px;
        margin-top: 10px;
    }

    label{
        font-size: 14px;
    }

    input[type=radio], input[type=flexbox]{
        transform: scale(1);
        float: right;
        margin-left: auto;
    }

    input[type=text]{
        height: 65px;
        border-radius: 35px;
        padding-left: 5%;
        padding-right: 5%;
        font-size: 14px;
        margin-top: 25px;
    }

    .submit{
        height: 65px;
        border-radius: 35px;
        font-size: 14px;
        margin-top: 75px;
        cursor: pointer;
    }

    .input-requeriments{
        margin-top: 55px;
    }

    .base-logo{
        height: 35px;
        width: 35px;
    }

    .container{
        padding-left: 115px;
        padding-right: 45px;
        gap: 25px;
        height: 900px;
    }

    .top{
        margin-top: 15px;
        height: 75px;
        border-radius: 35px 35px 0 0;
    }

    .mid{
        height: 75px;
    }

    .bottom{
        height: 75px;
        border-radius: 0 0 35px 35px;
    }
}

</style>