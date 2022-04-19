<template>
  <header>
    <h2>{{ title }}</h2>
    <track-button buttonType="add" text="Add Task" />
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
  },
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