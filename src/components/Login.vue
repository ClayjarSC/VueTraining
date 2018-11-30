<template>
  <div>
    <div class="container">
      <h2 class="text-center">Entity Name</h2>
      <div class="float-right" v-on:click="closeEvent">
        <i class="fas fa-times-circle"></i>
      </div>
      <div class="row  ">
        <div class="col-lg-6 col-12 mx-auto">
          <div class="card h-100 ">
            <div class="card-body">
              <h1>Login</h1>
              <div>
                <div class="form-group">
                  <label for="inputEmailForm" class="sr-only form-control-label"
                    >Email</label
                  >
                  <div class="mx-auto col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmailForm"
                      placeholder="email"
                      v-model="email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label
                    for="inputPasswordForm"
                    class="sr-only form-control-label"
                    >Password</label
                  >
                  <div class="mx-auto col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPasswordForm"
                      placeholder="password"
                      v-model="pw"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="mx-auto col-sm-10">
                    <div
                      class="checkbox form-control form-control-sm text-center small"
                    >
                      <label class=""
                        ><input type="checkbox" v-model="remember" class="" />
                        remember me</label
                      >
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="mx-auto col-sm-10 pb-3 pt-2">
                    <button
                      v-on:click="loginEvent"
                      class="btn btn-outline-secondary btn-lg btn-block"
                    >
                      Sign-in
                    </button>
                  </div>
                </div>
              </div>
              <div class="text-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col"><div class="text-center"></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "youremail@email.com",
      pw: "",
      remember: false
    };
  },
  methods: {
    loginEvent: function(event) {
      console.log("login Event", this.email, this.pw, this.remember);
    },
    closeEvent: function(event) {
      console.log("close");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
