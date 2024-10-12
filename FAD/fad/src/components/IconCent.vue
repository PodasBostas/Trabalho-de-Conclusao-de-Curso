<template>
    <header>
        <router-link to="/" id="logo-url">
            <img src="../assets/favicon.png" id="logo">
        </router-link>
    </header>
</template>

<style scoped>

header{
    background-color: #091010;
    padding: 15px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#logo{
    height: 50px;
    width: 60px;
}

</style>

<script>
export default{
    name: "IconCent"
}
</script>
