<template>
  <div class="sign-up">
    <Navbar />
    <div class="container h-100">
      <div class="row mt-2 align-items-center" style="height: 90vh">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-12">
              <h2>สมัครสมาชิก</h2>
              <hr />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card shadow border-0 mb-5 bg-lightorange">
                <div class="card-body">
                  <form @submit="preSignUp">
                    <div class="row">
                      <div class="col-sm-12">
                        <div
                          class="alert alert-danger alert-dismissible fade show"
                          role="alert"
                          v-if="signup.msgAlert"
                        >
                          {{ signup.msgAlert }}
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                            @click="signup.msgAlert = ''"
                          ></button>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputUsername"
                            class="col-sm-4 col-form-label"
                            ><b>ชื่อผู้ใช้งาน*:</b></label
                          >
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="inputUsername"
                              v-model="signup.inputUsername"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputFirstname"
                            class="col-sm-4 col-form-label"
                            ><b>ชื่อ*:</b></label
                          >
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="inputFirstname"
                              v-model="signup.inputFirstname"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputLastname"
                            class="col-sm-4 col-form-label"
                            ><b>นามสกุล*:</b></label
                          >
                          <div class="col-sm-6">
                            <input
                              type="text"
                              class="form-control"
                              id="inputLastname"
                              v-model="signup.inputLastname"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputPassword"
                            class="col-sm-4 col-form-label"
                            ><b>รหัสผ่าน*:</b></label
                          >
                          <div class="col-sm-6">
                            <input
                              type="password"
                              class="form-control"
                              id="inputPassword"
                              v-model="signup.inputPassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputGender"
                            class="col-sm-4 col-form-label"
                            ><b>เพศ*:</b></label
                          >
                          <div class="col-sm-6">
                            <select
                              id="inputGender"
                              class="form-select"
                              v-model="signup.inputGender"
                            >
                              <option selected value="">กรุณาเลือก...</option>
                              <option value="ชาย">ชาย</option>
                              <option value="หญิง">หญิง</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputWeight"
                            class="col-sm-4 col-form-label"
                            ><b>น้ำหนัก*:</b></label
                          >
                          <div class="col-sm-6">
                            <input
                              type="number"
                              class="form-control"
                              id="inputWeight"
                              min="0"
                              v-model="signup.inputWeight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputConfirmPassword"
                            class="col-sm-4 col-form-label"
                            ><b>ยืนยันรหัสผ่าน*:</b></label
                          >
                          <div class="col-sm-6">
                            <input
                              type="password"
                              class="form-control"
                              id="inputConfirmPassword"
                              v-model="signup.inputConfirmPassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputBirthDate"
                            class="col-sm-4 col-form-label"
                            ><b>วันเกิด*:</b></label
                          >
                          <div class="col-sm-6 mt-1">
                            <VueDatePicker
                              id="inputBirthDate"
                              v-model="signup.inputBirthday"
                              format="DD/MM/YYYY"
                              placeholder="กรุณาเลือกวันเกิด"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputHeight"
                            class="col-sm-4 col-form-label"
                            ><b>ส่วนสูง*:</b></label
                          >
                          <div class="col-sm-6">
                            <input
                              type="number"
                              class="form-control"
                              id="inputHeight"
                              v-model="signup.inputHeight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputEmail"
                            class="col-sm-4 col-form-label"
                            ><b>อีเมล์*:</b></label
                          >
                          <div class="col-sm-6">
                            <input
                              type="email"
                              class="form-control"
                              id="inputEmail"
                              v-model="signup.inputEmail"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputReligion"
                            class="col-sm-4 col-form-label"
                            ><b>ศาสนา*:</b></label
                          >
                          <div class="col-sm-6">
                            <select
                              id="inputReligion"
                              class="form-select"
                              v-model="signup.inputReligion"
                            >
                              <option selected value="">กรุณาเลือก...</option>
                              <option value="พุทธ">พุทธ</option>
                              <option value="คริสต์">คริสต์</option>
                              <option value="อิสลาม">อิสลาม</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label
                            for="inputActPerWeek"
                            class="col-sm-4 col-form-label"
                            ><b>ออกกำลังกาย ครั้ง/สัปดาห์*:</b></label
                          >
                          <div class="col-sm-6">
                            <input
                              type="number"
                              class="form-control"
                              id="inputActPerWeek"
                              min="0"
                              v-model="signup.inputActPerWeek"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8 text-left">
                        <label class="col-form-label"
                          >หมายเหตุ : กรุณากรอกข้อมูลที่มีเครื่องหมาย "*"
                          ให้ครบถ้วนก่อนทำการกดปุ่มสมัครสมาชิก</label
                        >
                      </div>
                      <div class="col-sm-4">
                        <div class="row">
                          <div class="col-sm-6 ms-auto text-right mb-2">
                            <button
                              type="submit"
                              class="btn btn-primary col-sm-12 col-12"
                            >
                              สมัครสมาชิก
                            </button>
                          </div>
                          <div class="col-sm-6 text-right">
                            <router-link to="/">
                              <button
                                type="button"
                                class="btn btn-outline-danger col-sm-12 col-12"
                              >
                                ยกเลิก
                              </button>
                            </router-link>
                          </div>
                        </div>
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

import Swal from "sweetalert2";
import { VueDatePicker } from "@mathieustan/vue-datepicker";
import "@mathieustan/vue-datepicker/dist/vue-datepicker.min.css";

import axios from "axios";
import router from "../router";

const BASE_URL = "http://localhost:3000";

export default {
  name: "SignUp",
  components: {
    Navbar,
    VueDatePicker,
  },
  data: () => {
    return {
      signup: {
        inputUsername: "",
        inputPassword: "",
        inputConfirmPassword: "",
        inputEmail: "",
        inputFirstname: "",
        inputLastname: "",
        inputGender: "",
        inputWeight: "",
        inputHeight: "",
        inputBirthday: null,
        inputReligion: "",
        inputActPerWeek: "",
        msgAlert: "",
      },
    };
  },
  methods: {
    dialogSuccess(msg) {
      Swal.fire({
        title: "แจ้งเตือน",
        text: msg,
        icon: "success",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ตกลง",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          router.push({ name: "SignIn" });
        }
      });
    },
    preSignUp(evt) {
      evt.preventDefault();
      var username = this.signup.inputUsername;
      var password = this.signup.inputPassword;
      var confirmPassword = this.signup.inputConfirmPassword;
      var email = this.signup.inputEmail;
      var firstname = this.signup.inputFirstname;
      var lastname = this.signup.inputLastname;
      var gender = this.signup.inputGender;
      var weight = this.signup.inputWeight;
      var height = this.signup.inputHeight;
      var birthday = this.signup.inputBirthday;
      var religion = this.signup.inputReligion;
      var actPerWeek = this.signup.inputActPerWeek;

      if (
        username == "" ||
        password == "" ||
        confirmPassword == "" ||
        email == "" ||
        firstname == "" ||
        lastname == "" ||
        gender == "" ||
        weight == "" ||
        height == "" ||
        birthday == "" ||
        religion == "" ||
        actPerWeek == ""
      ) {
        this.signup.msgAlert = "กรุณากรอกข้อมูลให้ครบถ้วน";
      } else if (password != confirmPassword) {
        this.signup.msgAlert = "กรุณากรอกรหัสผ่านให้ตรงกัน";
      } else {
        const payloads = {
          username: username,
          password: password,
          confirmPassword: confirmPassword,
          email: email,
          firstname: firstname,
          lastname: lastname,
          gender: gender,
          weight: weight,
          height: height,
          birthday: birthday,
          religion: religion,
          actPerWeek: actPerWeek,
        };
        this.signup.msgAlert = ''
        this.signUp(payloads);
      }
    },
    signUp(payloads) {
      const path = BASE_URL + "/signup";
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(path, payloads, { headers: headers })
        .then((res) => {
          if (res.data.isError) {
            this.signup.msgAlert = res.data.message;
          } else {
            this.signup.msgAlert = null;
            this.dialogSuccess(res.data.message)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
