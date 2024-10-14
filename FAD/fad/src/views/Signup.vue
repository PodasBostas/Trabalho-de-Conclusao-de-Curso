<template>
    <div class="signin-page">
      <FormSignin />
    </div>
</template>

<style scoped>

</style>

<script>
import FormSignin from '../components/FormSignin.vue';
import IconCent from '../components/IconCent.vue';

export default{
    name: "Signin",
    components: {
        FormSignin,
        IconCent
    }
}
</script>
