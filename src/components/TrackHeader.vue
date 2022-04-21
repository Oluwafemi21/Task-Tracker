<template>
  <header>
    <h2>{{ title }}</h2>
    <track-button
      v-show="homePage"
      @btn-click="$emit('toggle-view')"
      :buttonType="showAddTask ? 'close' : 'add'"
      :text="showAddTask ? 'Close' : 'Add Task'"
    />
  </header>
</template>

<script>
import TrackButton from "./TrackButton.vue";

export default {
  name: "TrackHeader",
  components: {
    "track-button": TrackButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showAddTask:{
      type: Boolean
    }
  },
  computed:{
    homePage(){
      if(this.$route.path === '/'){
        return true
      } else {
        return false
      }
    }
  }
};
</script>

<style scoped>
header {
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>