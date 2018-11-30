<template>
  <div>
    <div class="row  ">
      <div class="col-lg-6 col-12 mx-auto">
        <div class="card h-100 ">
          <div class="card-body">
            <div class="form-group">
              <label for="exampleTitle">Title</label>
              <input
                type="text"
                class="form-control"
                id="exampleTitle"
                v-model="title"
                placeholder="Enter Title"
              />
            </div>
            <div class="form-group">
              <label for="exampleContent">Content</label>
              <input
                type="input"
                class="form-control"
                id="exampleContent"
                placeholder="content"
              />
            </div>
            <button v-on:click="addEvent" class="btn btn-primary">Add</button>
            <button v-on:click="cancelEvent" class="m-5 btn btn-primary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditCard",
  sync: ["title2", "icon"],
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    // maybe onchagne may onclick whatever..
    addEvent: function() {
      console.log("addEvent");
      this.$emit("addItem", { title: this.title, content: this.content }); // handle data and give it back to parent by interface
    },
    cancelEvent: function() {
      console.log("cancelEvent");
      this.$emit("cancelEdit"); // handle data and give it back to parent by interface
    }
  }
};
</script>
