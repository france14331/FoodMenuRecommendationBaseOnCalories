<template>
  <div class="sign-in">
    <Navbar />
    <div class="container my-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-6 ms-auto me-auto">
              <div class="card bg-lightorange shadow border-0 mb-5">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <h2>เข้าสู่ระบบ</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div
                        class="alert alert-danger alert-dismissible fade show"
                        role="alert"
                        v-if="signin.msgAlert"
                      >
                        {{ signin.msgAlert }}
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Close"
                          @click="signin.msgAlert = ''"
                        ></button>
                      </div>
                    </div>
                  </div>
                  <form @submit="preSignIn">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="mb-3 row">
                          <label
                            for="inputUsername"
                            class="col-sm-3 ms-auto me-auto col-form-label"
                            ><b>ชื่อผู้ใช้งาน*:</b></label
                          >
                          <div class="col-sm-6 ms-auto me-auto">
                            <input
                              type="text"
                              class="form-control"
                              id="inputUsername"
                              placeholder="ชื่อผู้ใช้งาน"
                              v-model="signin.inputUsername"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="mb-3 row">
                          <label
                            for="inputPassword"
                            class="col-sm-3 ms-auto me-auto col-form-label"
                            ><b>รหัสผ่าน*:</b></label
                          >
                          <div class="col-sm-6 ms-auto me-auto">
                            <input
                              type="password"
                              class="form-control"
                              id="inputPassword"
                              placeholder="รหัสผ่าน"
                              v-model="signin.inputPassword"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          type="submit"
                          class="btn btn-primary col-sm-6 col-12"
                        >
                          เข้าสู่ระบบ
                        </button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12 mt-2">
                        <router-link to="/signup">
                          <button
                            type="button"
                            class="btn btn-outline-dark col-sm-6 col-12"
                          >
                            สมัครสมาชิก
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import axios from "axios";
import router from "../router";

const BASE_URL = "http://localhost:3000";

export default {
  name: "SignIn",
  components: {
    Navbar,
  },
  data() {
    return {
      signin: {
        inputUsername: "",
        inputPassword: "",
        msgAlert: "",
      },
    };
  },
  methods: {
    preSignIn(evt) {
      evt.preventDefault();
      var username = this.signin.inputUsername;
      var password = this.signin.inputPassword;
      if (username == "" || password == "") {
        this.signin.msgAlert = "กรุณากรอกชื่อผู้ใช้งานหรือรหัสผ่านให้ครบถ้วน";
      } else {
        const payloads = {
          username: username,
          password: password,
        };
        this.signIn(payloads);
      }
    },
    signIn(payloads) {
      const path = BASE_URL + "/signin";
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(path, payloads, { headers: headers })
        .then((res) => {
          if (res.data.isError) {
            this.signin.msgAlert = res.data.message;
          } else {
            this.signin.msgAlert = null;
            localStorage.setItem("token", JSON.stringify(res.data.accesstoken));
            localStorage.setItem("user", JSON.stringify(res.data.user_profile));
            router.push({ name: "Main" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
