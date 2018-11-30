<template>
  <nav class="navbar navbar-light fixed-top" style="background-color: #e3f2fd;">
    <i class="fas fa-air-freshener"></i>
    <span class="navbar-brand ml-2">MyApp</span>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link " to="/"> Home </router-link>
      </li>
    </ul>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <span class="nav-link" v-on:click="addEvent"> Add Card </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ["title", "icon"],
  data() {
    return {
      test: "App"
    };
  },
  methods: {
    // maybe onchagne may onclick whatever..
    addEvent: function() {
      console.log("addEvent NavBar");
      this.$emit("addCard"); // handle data and give it back to parent by interface
    }
  }
};
</script>
