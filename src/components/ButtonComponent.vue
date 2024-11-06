<template>
  <button class="button">Shop Now <fa icon="arrow-right" /></button>
</template>
<script>
export default{
  name:'button',
  props:['button']
}
</script>
<style scoped>
.button {
  height: 2.5rem;
  width: 8rem;
  /* background-color: rgb(79, 196, 79); */
  color: white;
  border: 0px solid;
  border-radius: 3px;
}
.button:hover{
    background-color: rgb(231, 158, 42);
}
</style>
