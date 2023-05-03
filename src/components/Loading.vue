<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script>
export default {
    name: "loading",
};
</script>

<style lang="scss" scoped>
.app{
    width: initial !important; 
    margin-left: initial !important;
}
.loading{
    top: 0;
    z-index: 101;
    height: 1000px;
    width: 1800px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: -250px;
    @keyframes spin{
        to{
            transform: rotateZ(360deg);
        }
    }

    span{
        display: block;
        width: 60px;
        height: 60px;
        margin-right: 100px;
        border: 3px solid transparent;
        border-top-color: #fff;
        border-bottom-color: #fff;
        border-radius: 50%;
        animation: spin ease 1000ms infinite;    
    }
}
</style>