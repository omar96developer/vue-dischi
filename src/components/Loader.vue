<template>
    <div class="loader">
        <div>
            <img src="@/assets/logo3.png" alt="">
            <h1>LOADING...</h1>
        </div>

        
    </div>
</template>

<script>
export default {
    name: 'Loader',
    data(){
        return {

        }
    }

    
}
</script>
<style scoped lang="scss">
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: black;
        img {
            animation: pulse 1s infinite;
        }
        @keyframes pulse {
            from {
                transform: scale(0.5);
            }
            to {
                transform: scale(1);
            }
        }
        h1 {
            color:white;
            text-align: center;
        }
        

    }
</style>