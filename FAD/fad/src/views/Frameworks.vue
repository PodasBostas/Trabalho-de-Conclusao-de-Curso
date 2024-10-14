<template>
    <div class="frameworks-page">
        <Sidebar />
        <div class="container">
            <Back />
            <form class="interface">
                <h1>Crie seu dockerfile</h1>
                <div class="input-requeriments">
                    <input type="file">
                </div>
                <h2>Escolha a imagem base</h2>
                <div class="input-base-image">
                    <div class="top">
                        <img class="base-logo" src="../assets/img/tensorflow-icon.svg">
                        <label for="rad1">Tensorflow</label>
                        <input type="radio" name="base-image" class="radio" id="rad1" value="tensorflow/tensorflow:latest">
                    </div>
                    <div class="mid">
                        <img class="base-logo" src="../assets/img/pytorch-icon.svg">
                        <label for="rad4">Pytorch</label>
                        <input type="radio" name="base-image" class="radio" id="rad2" value="pytorch/pytorch:latest">
                    </div>
                    <div class="mid">
                        <img class="base-logo" src="../assets/img/langchain-icon.svg">
                        <label for="rad4">Langchain</label>
                        <input type="radio" name="base-image" class="radio" id="rad3" value="langchain/langchain:latest">
                    </div>
                    <div class="mid">
                        <img class="base-logo" src="../assets/img/deeplearning4j-icon.svg">
                        <label for="rad4">Deeplearning4j</label>
                        <input type="radio" name="base-image" class="radio" id="rad3" value="deeplearning4j/deeplearning4j:latest">
                    </div>
                    <div class="bottom">
                        <img class="base-logo" src="../assets/img/nvidia-icon.svg">
                        <label for="rad4">Nvidia CUDA</label>
                        <input type="radio" name="base-image" class="radio" id="rad4" value="nvidia/cuda:latest">
                    </div>
                </div>
                <div class="input-door">
                    <input class="door" type="text" placeholder="Insira qual porta deseja utilizar">
                </div>
                <div class="input-commands">
                    <input class="commands" type="text" placeholder="Insira os comandos que vão ser utilizados">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Back from '../components/Back.vue';

export default{
  name: "Frameworks",
  components: {
    Sidebar,
    Back
  }
}
</script>

<style scoped>

.frameworks-page{
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

::placeholder{
    color: #e7e7e7;
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
    }

    .sidebar{
        padding-top: 45px;
        width: 60px;
        height: 100vh;
        gap: 35px;
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