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
                        <div class="col-sm-3">
                          {{ userProfile.age }} ปี
                        </div>
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
                          >
                            แก้ไขข้อมูลส่วนตัว
                          </button>
                        </div>
                        <div class="col-sm-6 text-left">
                          <button
                            type="button"
                            class="btn btn-primary col-sm-6 col-12"
                          >
                            แนะนำเมนูอาหาร
                          </button>
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
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import Swal from "sweetalert2";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

let userProfile = JSON.parse(localStorage.getItem("user"));

export default {
  name: "Main",
  components: {
    Navbar,
  },
  created() {
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
    getUserInfo() {
      this.showLoading();

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
  },
};
</script>
