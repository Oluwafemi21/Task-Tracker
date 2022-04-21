<template>
  <footer>
      <p>Copyright Fexavier &copy; 2022</p>
      <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
name:'TaskFooter'
}
</script>

<style scoped>
footer{
    font-weight: 600;
    text-align: center;
}

a{
  color: darkblue;
}
</style>