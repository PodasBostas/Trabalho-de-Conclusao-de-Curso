<template>
    <div class="interface">
        <div class="input-requeriments">
            <input type="file">
        </div>
        <div class="input-images">
            <label class="options">Escolha a imagem base</label>
            <div class="top">
                <img src="../assets/img/python-icon.svg">
                <label for="rad1">Python</label>
                <input type="radio" name="base-image" class="radio" id="rad1" value="python:latest">
            </div>
            <div class="mid">
                <img src="../assets/img/ubuntu-icon.svg">
                <label for="rad2">Ubuntu</label>
                <input type="radio" name="base-image" class="radio" id="rad2" value="ubuntu:latest">
            </div>
            <div class="mid">
                <img src="../assets/img/pytorch-icon.svg">
                <label for="rad3">Pytorch</label>
                <input type="radio" name="base-image" class="radio" id="rad3" value="pytorch/pytorch:latest">
            </div>
            <div class="mid">
                <img src="../assets/img/tensorflow-icon.svg">
                <label for="rad4">Tensorflow</label>
                <input type="radio" name="base-image" class="radio" id="rad4" value="tensorflow/tensorflow:latest">
            </div>
            <div class="bottom">
                <img src="../assets/img/langchain.svg">
                <label for="rad5">Langchain</label>
                <input type="radio" name="base-image" class="radio" id="rad5" value="langchain/langchain:latest">
            </div>
        </div>
        <div class="input-door">
            <input class="door" type="text" placeholder="Insira qual porta deseja utilizar">
        </div>
        <div class="input-commands">
            <input class="commands" type="text" placeholder="Insira os comandos que vão ser utilizados">
        </div>
    </div>
</template>

<style scoped>

::placeholder{
    color: #e7e7e7;
}

input[type=radio], input[type=flexbox]{
    transform: scale(1.5);
    float: right;
}

input[type=text]{
    background-color: #243C3E;
    border: none;
    outline: none;
    width: 60%;
    height: 70px;
    border-radius: 50px;
    padding-left: 2.5%;
    padding-right: 2.5%;
    font-size: 16px;
    margin-top: 2.5%;
}

img{
    background-color: transparent;
    height: 45px;
    width: 45px;
    margin-right: 5%;
}

label{
    background-color: transparent;
    font-size: 16px;
}

.options{
    padding: 2.5%;
}

.interface{
    background-color: #111D1E;
    width: 80%;
    height: 80vh;
    border-radius: 50px;
    margin-top: 1%;
}

.top{
    width: 60%;
    height: 80px;
    background-color: #243C3E;
    border-radius: 50px 50px 0 0;
    border-bottom: 2px solid #111D1E;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.mid{
    width: 60%;
    height: 80px;
    background-color: #243C3E;
    border-bottom: 2px solid #111D1E;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.bottom{
    width: 60%;
    height: 80px;
    background-color: #243C3E;
    border-radius: 0 0 50px 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

</style>