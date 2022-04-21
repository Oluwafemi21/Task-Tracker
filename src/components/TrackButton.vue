<template>
  <button @click="onClick()" :class="buttonType"> {{text}} </button>
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
            default: 'btn'
        }
    },
    methods:{
        onClick(){
            this.$emit('btn-click')
        }
    }
}
</script>

<style scoped>
.add{
    background-color: green;
}

.btn{
    background-color: black;
    width: 100%;
}

.close{
    background-color: crimson;
}

</style>