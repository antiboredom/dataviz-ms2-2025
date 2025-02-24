<script>
export default {
    props: ["name"]
}
</script>

<template>
    <h2>Hello {{name}} !!</h2>
    <p>It's a nice day today</p>
</template>

<style scoped>
    h2 {
        color: blue;
    }
</style>