<template>
  <button :class="buttonType"> {{text}} </button>
</template>

<script>
export default {
    name: 'TrackButton',
    props:{
        text: {
            type: String,
            required: true
        },
        buttonType:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.add{
    background-color: green;
    color: white;
}

.del{
    background-color: crimson;
    color: white;
}

</style>