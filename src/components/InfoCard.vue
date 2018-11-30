<template>
  <div class="card" style="width: 18rem;">
    <img
      class="card-img-top"
      src="https://dummyimage.com/280x120/000/fff"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text"><slot></slot></p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  props: ["title", "icon"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
