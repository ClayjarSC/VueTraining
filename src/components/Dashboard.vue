<template>
  <div>
    <header><NavBar @addCard="showAddCard"></NavBar></header>

    <div class="container">
      <h3 class="pt-4 mb-5">Dashboard</h3>
      <!-- Content here -->
      <div v-if="!showAdd" class=" row">
        <InfoCard v-for="item in cards" :key="item.title" :title="item.title">
          {{ item.content }}</InfoCard
        >
      </div>

      <div v-if="showAdd">
        <h3>Add Card</h3>
        <EditCard @cancelEdit="closeAdd" @addItem="addCard"></EditCard>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
import NavBar from "./NavBar.vue";
import EditCard from "./EditCard.vue";

export default {
  name: "Dashboard",
  components: {
    InfoCard,
    NavBar,
    EditCard
  },
  data() {
    return {
      showAdd: false,
      cards: [
        { title: "Student GPA", content: "1.2" },
        { title: "Balance", content: "$12,0000" },
        { title: "Courses", content: "C101, C202" }
      ]
    };
  },
  methods: {
    // maybe onchagne may onclick whatever..
    showAddCard: function() {
      console.log("addEvent Parent");
      this.showAdd = true;
    },
    addCard: function(event) {
      console.log("addItem Dashboard", event);
      let i = this.cards.length;
      this.$set(this.cards, i, event);
      this.showAdd = false;
    },
    closeAdd: function() {
      console.log("close Add Parent");
      this.showAdd = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
