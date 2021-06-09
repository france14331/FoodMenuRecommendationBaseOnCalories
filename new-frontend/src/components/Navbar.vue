<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          FOOD RECOMENDATION
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMainMenu"
          aria-controls="navbarMainMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse right justify-content-end"
          id="navbarMainMenu"
        >
          <div class="navbar-nav" v-if="user === null">
            <router-link class="nav-item nav-link" to="/signup"
              >สมัครสมาชิก</router-link
            >
            <a class="nav-link disabled"> | </a>
            <router-link class="nav-item nav-link" to="/signin"
              >เข้าสู่ระบบ</router-link
            >
          </div>
          <div class="navbar-nav" v-if="user !== null">
            <router-link class="nav-item nav-link" to="/main">
              หน้าแรก
            </router-link>
            <a class="nav-link disabled"> | </a>
            <router-link class="nav-item nav-link" to="/recommend">
              แนะนำเมนู
            </router-link>
            <a class="nav-link disabled"> | </a>
            <router-link class="nav-item nav-link" to="/history">
              ประวัติการแนะนำ
            </router-link>
            <a class="nav-link disabled"> | </a>
            <router-link
              :to="'#'"
              v-on:click.native="signOut"
              class="nav-item nav-link"
              >ออกจากระบบ</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Navbar",
  created() {
    this.getUser();
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUser() {
      let user = JSON.parse(localStorage.getItem("user"));
      this.user = user;
    },
    signOut() {
      this.user = {};
      localStorage.clear();
      router.push({ name: "SignIn" });
    },
  },
};
</script>
