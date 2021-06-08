<template>
  <div class="main">
    <Navbar />
    <div class="container">
      <div class="row my-5">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-8 ms-auto me-auto">
              <div class="card bg-lightorange border-0 shadow">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <h3>ข้อมูลส่วนตัว</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <h5>{{ userProfile.fullname }}</h5>
                      <hr />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-sm-3">
                          <p><b>เพศ:</b></p>
                        </div>
                        <div class="col-sm-3">
                          {{ userProfile.gender }}
                        </div>
                        <div class="col-sm-3">
                          <p><b>อายุ:</b></p>
                        </div>
                        <div class="col-sm-3">{{ userProfile.age }} ปี</div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-sm-3">
                          <p><b>น้ำหนัก:</b></p>
                        </div>
                        <div class="col-sm-3">
                          <p>{{ userProfile.weight }} กิโลกรัม</p>
                        </div>
                        <div class="col-sm-3">
                          <p><b>ส่วนสูง:</b></p>
                        </div>
                        <div class="col-sm-3">
                          {{ userProfile.height }} เซนติเมตร
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-sm-3">
                          <p><b>BMR:</b></p>
                        </div>
                        <div class="col-sm-3">
                          {{ userProfile.bmr }} แคลลอรี่
                        </div>
                        <div class="col-sm-3">
                          <p><b>TDEE:</b></p>
                        </div>
                        <div class="col-sm-3">
                          {{ userProfile.tdee }} แคลลอรี่
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-sm-3">
                          <p><b>พลังงาน/ต่อมื้อ:</b></p>
                        </div>
                        <div class="col-sm-3">
                          {{ userProfile.caloriesPerPotion }} แคลลอรี่
                        </div>
                        <div class="col-sm-3">
                          <p><b>ออกกำลังกาย ครั้ง/สัปดาห์:</b></p>
                        </div>
                        <div class="col-sm-3">
                          {{ userProfile.actPerWeek }} ครั้ง
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-sm-6 text-right mb-2">
                          <button
                            type="button"
                            class="btn btn-info text-light col-sm-6 col-12"
                            data-bs-toggle="modal"
                            data-bs-target="#editUserProfileModal"
                            @click="bindEditUserInfo"
                          >
                            แก้ไขข้อมูลส่วนตัว
                          </button>
                        </div>
                        <div class="col-sm-6 text-left">
                          <router-link to="/recommend">
                            <button
                              type="button"
                              class="btn btn-primary col-sm-6 col-12"
                            >
                              แนะนำเมนูอาหาร
                            </button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="editUserProfileModal"
      tabindex="-1"
      aria-labelledby="editUserProfileModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">แก้ไขข้อมูลส่วนตัว</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-12">
                  <div
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                    v-if="editUserProfile.msgAlert"
                  >
                    {{ editUserProfile.msgAlert }}
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      @click="editUserProfile.msgAlert = ''"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="mb-3 text-left">
                    <label for="inputEditWeight" class="form-label">
                      น้ำหนัก (กิโลกรัม)*
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputEditWeight"
                      min="0"
                      v-model="editUserProfile.weight"
                    />
                  </div>
                  <div class="mb-3 text-left">
                    <label for="inputEditHeight" class="form-label">
                      ส่วนสูง (เซนติเมตร)*
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputEditHeight"
                      min="0"
                      v-model="editUserProfile.height"
                    />
                  </div>
                  <div class="mb-3 text-left">
                    <label for="inputEditActPerWeek" class="form-label">
                      ออกกำลังกาย ครั้ง/สัปดาห์*
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="inputEditActPerWeek"
                      min="0"
                      v-model="editUserProfile.actPerWeek"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                ปิด
              </button>
              <button type="button" class="btn btn-success" data-bs-dismiss="modal" v-on:click="preUpdateUserProfile">บันทึก</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import Swal from "sweetalert2";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export default {
  name: "Main",
  components: {
    Navbar,
  },
  created() {
    let userProfile = JSON.parse(localStorage.getItem("user"));

    if (userProfile != null) {
      this.bindUserInfo(
        userProfile.fullname,
        userProfile.gender,
        userProfile.weight,
        userProfile.height,
        userProfile.bmr,
        userProfile.tdee,
        userProfile.actPerWeek,
        userProfile.age,
        userProfile.caloriesPerPotion
      );
    } else {
      this.getUserInfo();
    }
  },
  data: () => {
    return {
      loadingProgress: null,
      userProfile: {
        fullname: "",
        gender: "",
        weight: "",
        height: "",
        bmr: "",
        tdee: "",
        actPerWeek: 0,
        age: 0,
        caloriesPerPotion: "",
      },
      editUserProfile: {
        weight: "",
        height: "",
        actPerWeek: "",
        msgAlert: "",
      },
    };
  },
  methods: {
    showLoading() {
      this.loadingProgress = Swal.fire({
        text: "Loading",
        showConfirmButton: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    },
    hideLoading() {
      this.loadingProgress = Swal.close();
    },
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
          this.getUserInfo()
        }
      });
    },
    getUserInfo() {
      this.showLoading();

      let userProfile = JSON.parse(localStorage.getItem("user"));
      const path = BASE_URL + "/user/" + userProfile.id + "/info";
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .get(path, { headers: headers })
        .then((res) => {
          this.hideLoading();
          localStorage.setItem("user", JSON.stringify(res.data.user_profile));
          this.bindUserInfo(
            res.data.user_profile.fullname,
            res.data.user_profile.gender,
            res.data.user_profile.weight,
            res.data.user_profile.height,
            res.data.user_profile.bmr,
            res.data.user_profile.tdee,
            res.data.user_profile.actPerWeek,
            res.data.user_profile.age,
            res.data.user_profile.caloriesPerPotion
          );
        })
        .catch((error) => {
          console.log(error);
          this.hideLoading();
        });
    },
    bindUserInfo(
      fullname,
      gender,
      weight,
      height,
      bmr,
      tdee,
      actPerWeek,
      age,
      caloriesPerPotion
    ) {
      this.showLoading();
      this.userProfile.fullname = fullname;
      this.userProfile.gender = gender;
      this.userProfile.weight = weight;
      this.userProfile.height = height;
      this.userProfile.bmr = bmr;
      this.userProfile.tdee = tdee;
      this.userProfile.actPerWeek = actPerWeek;
      this.userProfile.age = age;
      this.userProfile.caloriesPerPotion = caloriesPerPotion;
      this.hideLoading();
    },
    bindEditUserInfo() {
      this.showLoading();
      this.editUserProfile.weight = this.userProfile.weight;
      this.editUserProfile.height = this.userProfile.height;
      this.editUserProfile.actPerWeek = this.userProfile.actPerWeek;
      this.hideLoading();
    },
    preUpdateUserProfile(evt) {
      evt.preventDefault();

      this.showLoading();

      let userProfile = JSON.parse(localStorage.getItem("user"));

      var weight = parseInt(this.editUserProfile.weight);
      var height = parseInt(this.editUserProfile.height);
      var actPerWeek = parseInt(this.editUserProfile.actPerWeek);

      if (weight == 0 || height == 0) {
        this.hideLoading();

        this.editUserProfile.msgAlert = "กรุณากรอกข้อมูลให้ครบถ้วน";
      } else {
        this.hideLoading();

        const payloads = {
          weight: parseInt(Math.round(weight)),
          height: parseInt(Math.round(height)),
          actPerWeek: parseInt(Math.round(actPerWeek)),
          gender: userProfile.gender,
          age: userProfile.age,
        };

        this.updateUserProfile(payloads);
      }
    },
    updateUserProfile(payloads) {
      this.showLoading();

      let userProfile = JSON.parse(localStorage.getItem("user"));
      const path = BASE_URL + "/user/" + userProfile.id + "/info/update";
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(path, payloads, { headers: headers })
        .then((res) => {
          this.hideLoading();
          if (res.data.isError) {
            this.editUserProfile.msgAlert = res.data.message;
          } else {
            this.editUserProfile.msgAlert = null;
            this.dialogSuccess(res.data.message)
          }
        })
        .catch((error) => {
          console.log(error);
          this.hideLoading();
        });
    },
  },
};
</script>
