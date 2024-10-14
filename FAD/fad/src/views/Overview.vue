<template>
    <div class="overview-page">
        <Sidebar />
        <div class="container">
            <h1>Deseja criar seu dockerfile com quais opções de imagem base abaixo?</h1>
            
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default{
  name: "Overview",
  components: {
    Sidebar
  }
}
</script>


<style scoped>

h1{
    color: #000;
    font-size: 22px;
}

#options{
    background-color: #1245A8;
    width: 100%;
    height: 80px;
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

</style>