<template>
  <div class="login-page">
      <div class="container" id="um">
          <form class="interface" @submit.prevent="submitForm">
              <Back />
              <h1>Faça seu sign up</h1>
              <div class="input-name">
                  <h3>Nome</h3>
                  <input class="name" type="text" placeholder="Insira seu nome de usuário" v-model="name">
              </div>
              <div v-if="errorName" class="error">
                  {{ errorName }}
              </div>
              <div class="input-password">
                  <h3>Senha</h3>
                  <input class="password" type="password" placeholder="Insira sua senha" v-model="password">
              </div>
              <div v-if="errorPassword" class="error">
                  {{ errorPassword }}
              </div>
              <div class="input-submit">
                  <input class="submit" type="submit" value="Fazer Sign up">
              </div>
          </form>
      </div>
      <div class="container" id="dois">

      </div>
  </div>
</template>

<script>
import Back from '../components/Back.vue';

export default{
  name: "Login",
    components: {
        Back
  },
  data(){
    return{
        name: "",
        password: "",
        errorName: "",
        errorPassword: ""
    };
  },
  methods: {
    submitForm() {
      this.errorName = !this.name ? "Seu nome de usuário deve ter pelo menos uma letra" : "";
      this.errorPassword = !this.password ? "Senha incorreta" : "";

      if (this.errorName || this.errorPassword) {
        return;
      }

      const formLoginJson = JSON.stringify({
        name: this.name,
        password: this.password
      });

      console.log(formLoginJson);
    }
  }
}
</script>

<style scoped>

h3{
    margin-top: 50px;
    padding-left: 2.5%;
    color: #000;
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
    margin-bottom: 80px;
    margin-top: 10px;
}

input[type=password]{
    background-color: #1245A8;
    border: none;
    outline: none;
    width: 100%;
    height: 70px;
    border-radius: 50px;
    padding-left: 2.5%;
    padding-right: 2.5%;
    font-size: 18px;
    margin-bottom: 80px;
    margin-top: 10px;
}

.input-submit{
    padding-right: 25%;
    padding-left: 25%;
}

#um{
    height: 100vh;
    width: 40%;
}

#dois{
    background: #1245A8;
    height: 100vh;
    width: 60%;
}

.submit{
    background-color: #148f60;
    border: none;
    outline: none;
    width: 100%;
    height: 70px;
    border-radius: 50px;
    font-size: 18px;
    cursor: pointer;
}

.submit:hover{
    background-color: #14af74;
}

.interface{
    padding-right: 5%;
    padding-left: 5%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    height: 800px;
    border-radius: 50px;
}

h1{
    margin-top: 30px;
    color: #000;
    margin-bottom: 50px;
}

.error{
  color: #ff2c2c;
  padding-left: 2.5%;
  margin-top: 5px;
}

.login-page{
    width: 100%;
    display: flex;
    flex-direction: row;
}

.container{
    padding: 2.5%;
    padding-right: 5%;
    padding-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 1024px){
    h3{
        margin-top: 40px;
        padding-left: 1.5%;
    }

    input[type=text]{
        height: 65px;
        border-radius: 35px;
        padding-left: 5%;
        padding-right: 5%;
        font-size: 14px;
        margin-top: 6px;
        margin-bottom: 60px;
    }

    input[type=password]{
        height: 65px;
        border-radius: 35px;
        padding-left: 5%;
        padding-right: 5%;
        font-size: 14px;
        margin-top: 6px;
        margin-bottom: 60px;
    }

    .input-submit{
        padding-right: 15%;
        padding-left: 15%;
    }

    #um{
        height: 100vh;
        width: 100%;
    }

    #dois{
        height: 0px;
        width: 0px;
        opacity: 0;
    }

    .submit{
        height: 65px;
        border-radius: 35px;
        font-size: 14px;
        margin-top: 46px;
    }

    .interface{
        padding-right: 5%;
        padding-left: 5%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        height: 800px;
        border-radius: 50px;
    }

    h1{
        margin-top: 50px;
        color: #000;
    }

    .error{
        color: #ff2c2c;
        padding-left: 2.5%;
        margin-top: 5px;
    }

    .login-page{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .container{
        padding: 2.5%;
        padding-right: 5%;
        padding-left: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

}

</style>

