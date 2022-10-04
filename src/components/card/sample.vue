<script  setup>
const user = reactive({
  name: "",
  surname: "",
});
</script>


<template>
  <div>
    <input
      type="text"
      placeholder="enter something"
      v-model="user.name"
    /><input type="text" placeholder="enter something" v-model="user.surname" />
  </div>
</template>