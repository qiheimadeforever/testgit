<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                radio: "1",
            };
        },
    };
</script>
<style lang="scss">
    #app {
        height: 100vh;
    }
</style>