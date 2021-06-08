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
                        <div class="col-sm-2">
                          <p><b>น้ำหนัก:</b></p>
                        </div>
                        <div class="col-sm-2">
                          <p>{{ userProfile.weight }} กิโลกรัม</p>
                        </div>
                        <div class="col-sm-4">
                          <p><b>ส่วนสูง:</b></p>
                        </div>
                        <div class="col-sm-4">
                          {{ userProfile.tdee }} เซนติเมตร
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-sm-2">
                          <p><b>BMR:</b></p>
                        </div>
                        <div class="col-sm-2">
                          {{ userProfile.bmr }} แคลลอรี่
                        </div>
                        <div class="col-sm-4">
                          <p><b>TDEE:</b></p>
                        </div>
                        <div class="col-sm-4">
                          {{ userProfile.tdee }} แคลลอรี่
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="col-sm-2">
                          <p><b>เพศ:</b></p>
                        </div>
                        <div class="col-sm-2">
                          {{ userProfile.gender }}
                        </div>
                        <div class="col-sm-4">
                          <p><b>ออกกำลังกาย ครั้ง/สัปดาห์:</b></p>
                        </div>
                        <div class="col-sm-4">
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

export default {
  name: "Main",
  components: {
    Navbar,
  },
  created() {
    this.getUserInfo();
  },
  data: () => {
    return {
      userProfile: {
        fullname: "",
        gender: "",
        weight: "",
        height: "",
        bmr: "",
        tdee: "",
        actPerWeek: 0,
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

      let user = JSON.parse(localStorage.getItem("user"));

      const path = BASE_URL + "/user/" + user.id + "/info";
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
            res.data.user_profile.actPerWeek
          );
        })
        .catch((error) => {
          console.log(error);
          this.hideLoading();
        });
    },
    bindUserInfo(fullname, gender, weight, height, bmr, tdee, actPerWeek) {
      this.showLoading();
      this.userProfile.fullname = fullname;
      this.userProfile.gender = gender;
      this.userProfile.weight = weight;
      this.userProfile.height = height;
      this.userProfile.bmr = bmr;
      this.userProfile.tdee = tdee;
      this.userProfile.actPerWeek = actPerWeek;
      this.hideLoading();
    },
  },
};
</script>
