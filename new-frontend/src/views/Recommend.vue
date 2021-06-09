<template>
  <div class="recommend">
    <Navbar />
    <div class="container my-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-4 mb-4">
              <div class="card shadow">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <h2>ข้อมูลประจำวันนี้</h2>
                      <hr />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="text-left">
                        <b>ชื่อ:</b> {{ userProfile.fullname }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <p class="text-left">
                        <b>อายุ:</b> {{ userProfile.age }}
                      </p>
                    </div>
                    <div class="col-sm-6">
                      <p class="text-left">
                        <b>เพศ:</b> {{ userProfile.gender }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <p class="text-left">
                        <b>BMR:</b> {{ userProfile.bmr }} แคลลอรี่
                      </p>
                    </div>
                    <div class="col-sm-6">
                      <p class="text-left">
                        <b>TDEE:</b> {{ userProfile.tdee }} แคลลอรี่
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="text-left">
                        <b>พลังงานแนะนำ:</b>
                        {{ userProfile.caloriesPerPotion }} แคลลอรี่ ต่อ 1 มื้อ
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <p class="text-left">
                        <b>ออกกำลังกาย:</b> {{ userProfile.actPerWeek }} ครั้ง
                        ต่อ สัปดาห์
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 ms-auto me-auto">
                      <hr />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 ms-auto me-auto">
                      <p><b>พลังงานที่ได้รับวันนี้</b></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="progress">
                        <div
                          class="
                            progress-bar
                            progress-bar-striped
                            progress-bar-animated
                          "
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          v-bind:style="{
                            width:
                              calculateCaloriesUsedTodayWithPercent() + '%',
                          }"
                        >
                          {{ calculateCaloriesUsedTodayWithNumber() }} แคลลอรี่
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 ms-auto me-auto">
                      <hr />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 ms-auto me-auto">
                      <p><b>มื้อเช้า</b></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 ms-auto me-auto">
                      <p class="text-left">
                        <b>ชื่อเมนู:</b>
                        {{
                          recommendToday.breakfast.dishName == "" ||
                          recommendToday.breakfast.dishName == null
                            ? "ไม่พบการบันทึก"
                            : recommendToday.breakfast.dishName
                        }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 ms-auto me-auto">
                      <p class="text-left">
                        <b>พลังงาน:</b>
                        {{
                          recommendToday.breakfast.calories == 0
                            ? "ไม่พบการบันทึก"
                            : recommendToday.breakfast.calories + " แคลลอรี่"
                        }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 ms-auto me-auto">
                      <p><b>มื้อกลางวัน</b></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 ms-auto me-auto">
                      <p class="text-left">
                        <b>ชื่อเมนู:</b>
                        {{
                          recommendToday.lunch.dishName == null ||
                          recommendToday.lunch.dishName == null
                            ? "ไม่พบการบันทึก"
                            : recommendToday.lunch.dishName
                        }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 ms-auto me-auto">
                      <p class="text-left">
                        <b>พลังงาน:</b>
                        {{
                          recommendToday.lunch.calories == 0
                            ? "ไม่พบการบันทึก"
                            : recommendToday.lunch.calories + " แคลลอรี่"
                        }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-6 ms-auto me-auto">
                      <p><b>มื้อเย็น</b></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 ms-auto me-auto">
                      <p class="text-left">
                        <b>ชื่อเมนู:</b>
                        {{
                          recommendToday.dinner.dishName == null ||
                          recommendToday.dinner.dishName == null
                            ? "ไม่พบการบันทึก"
                            : recommendToday.dinner.dishName
                        }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 ms-auto me-auto">
                      <p class="text-left">
                        <b>พลังงาน:</b>
                        {{
                          recommendToday.dinner.calories == 0
                            ? "ไม่พบการบันทึก"
                            : recommendToday.dinner.calories + " แคลลอรี่"
                        }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8 mb-4">
              <div class="card shadow">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="row">
                        <div class="row-sm-12">
                          <h2>มื้ออาหารที่ต้องการแนะนำ</h2>
                          <hr />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="row">
                            <div class="col-sm-4 mb-3">
                              <div class="card bg-lightorange border-0">
                                <div class="card-body">
                                  <h4 class="card-title">
                                    มื้อเช้า
                                    <span
                                      class="badge rounded-pill bg-success"
                                      v-show="recommendToday.breakfast.meal"
                                      >บันทึก</span
                                    >
                                  </h4>
                                  <div class="row">
                                    <div class="col-sm-12">
                                      <p v-show="menuRecommend.breakfast.name">
                                        <b>ชื่อเมนู</b>
                                        {{ menuRecommend.breakfast.name }}
                                      </p>
                                      <p
                                        v-show="
                                          menuRecommend.breakfast.calories
                                        "
                                      >
                                        <b>พลังงาน</b>
                                        {{ menuRecommend.breakfast.calories }}
                                        <b>แคลลอรี่</b>
                                      </p>
                                      <p
                                        v-show="
                                          menuRecommend.breakfast.restaurant
                                        "
                                      >
                                        <b>โรงอาหาร</b>
                                        {{ menuRecommend.breakfast.restaurant }}
                                      </p>
                                      <p
                                        v-show="
                                          menuRecommend.breakfast.nameRestaurant
                                        "
                                      >
                                        <b>ร้าน</b>
                                        {{
                                          menuRecommend.breakfast.nameRestaurant
                                        }}
                                      </p>
                                    </div>
                                  </div>
                                  <div class="row mb-2">
                                    <div class="col-sm-12">
                                      <button
                                        class="btn btn-primary col-12"
                                        type="button"
                                        v-on:click="
                                          preMenuRecommend('breakfast')
                                        "
                                        :disabled="
                                          recommendToday.breakfast.meal != ''
                                        "
                                      >
                                        แนะนำ
                                      </button>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-sm-12">
                                      <button
                                        class="btn btn-success col-12"
                                        type="button"
                                        v-show="menuRecommend.breakfast.id"
                                        v-on:click="confirmDialog('breakfast')"
                                      >
                                        บันทึก
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 mb-3">
                              <div class="card bg-lightorange border-0">
                                <div class="card-body">
                                  <h4 class="card-title">
                                    มื้อกลางวัน
                                    <span
                                      class="badge rounded-pill bg-success"
                                      v-show="recommendToday.lunch.meal"
                                      >บันทึก</span
                                    >
                                  </h4>
                                  <div class="row">
                                    <div class="col-sm-12">
                                      <p v-show="menuRecommend.lunch.name">
                                        <b>ชื่อเมนู</b>
                                        {{ menuRecommend.lunch.name }}
                                      </p>
                                      <p v-show="menuRecommend.lunch.calories">
                                        <b>พลังงาน</b>
                                        {{ menuRecommend.lunch.calories }}
                                        <b>แคลลอรี่</b>
                                      </p>
                                      <p
                                        v-show="menuRecommend.lunch.restaurant"
                                      >
                                        <b>โรงอาหาร</b>
                                        {{ menuRecommend.lunch.restaurant }}
                                      </p>
                                      <p
                                        v-show="
                                          menuRecommend.lunch.nameRestaurant
                                        "
                                      >
                                        <b>ร้าน</b>
                                        {{ menuRecommend.lunch.nameRestaurant }}
                                      </p>
                                    </div>
                                  </div>
                                  <div class="row mb-2">
                                    <div class="col-sm-12">
                                      <button
                                        class="btn btn-primary col-12"
                                        type="button"
                                        v-on:click="preMenuRecommend('lunch')"
                                        :disabled="
                                          recommendToday.lunch.meal != ''
                                        "
                                      >
                                        แนะนำ
                                      </button>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-sm-12">
                                      <button
                                        class="btn btn-success col-12"
                                        type="button"
                                        v-show="menuRecommend.lunch.id"
                                        v-on:click="confirmDialog('lunch')"
                                      >
                                        บันทึก
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 mb-3">
                              <div class="card bg-lightorange border-0">
                                <div class="card-body">
                                  <h4 class="card-title">
                                    มื้อเย็น
                                    <span
                                      class="badge rounded-pill bg-success"
                                      v-show="recommendToday.dinner.meal"
                                      >บันทึก</span
                                    >
                                  </h4>
                                  <div class="row">
                                    <div class="col-sm-12">
                                      <p v-show="menuRecommend.dinner.name">
                                        <b>ชื่อเมนู</b>
                                        {{ menuRecommend.dinner.name }}
                                      </p>
                                      <p v-show="menuRecommend.dinner.calories">
                                        <b>พลังงาน</b>
                                        {{ menuRecommend.dinner.calories }}
                                        <b>แคลลอรี่</b>
                                      </p>
                                      <p
                                        v-show="menuRecommend.dinner.restaurant"
                                      >
                                        <b>โรงอาหาร</b>
                                        {{ menuRecommend.dinner.restaurant }}
                                      </p>
                                      <p
                                        v-show="
                                          menuRecommend.dinner.nameRestaurant
                                        "
                                      >
                                        <b>ร้าน</b>
                                        {{
                                          menuRecommend.dinner.nameRestaurant
                                        }}
                                      </p>
                                    </div>
                                  </div>
                                  <div class="row mb-2">
                                    <div class="col-sm-12">
                                      <button
                                        class="btn btn-primary col-12"
                                        type="button"
                                        v-on:click="preMenuRecommend('dinner')"
                                        :disabled="
                                          recommendToday.dinner.meal != ''
                                        "
                                      >
                                        แนะนำ
                                      </button>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-sm-12">
                                      <button
                                        class="btn btn-success col-12"
                                        type="button"
                                        v-show="menuRecommend.dinner.id"
                                        v-on:click="confirmDialog('dinner')"
                                      >
                                        บันทึก
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
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12"></div>
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
  name: "Recommend",
  components: {
    Navbar,
  },
  created() {
    this.gerRecommendToday();
  },
  data: () => {
    return {
      userProfile: JSON.parse(localStorage.getItem("user")),
      loadingProgress: null,
      menuRecommend: {
        breakfast: {
          id: "",
          name: "",
          calories: 0,
          restaurant: "",
          nameRestaurant: "",
        },
        lunch: {
          id: "",
          name: "",
          calories: 0,
          restaurant: "",
          nameRestaurant: "",
        },
        dinner: {
          id: "",
          name: "",
          calories: 0,
          restaurant: "",
          nameRestaurant: "",
        },
      },
      recommendToday: {
        breakfast: {
          meal: "",
          dishName: "",
          calories: 0,
        },
        lunch: {
          meal: "",
          dishName: "",
          calories: 0,
        },
        dinner: {
          meal: "",
          dishName: "",
          calories: 0,
        },
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
    confirmDialog(meal) {
      Swal.fire({
        title: "ยืนยัน",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "ยกเลิก",
        confirmButtonColor: "#5cb85c",
        cancelButtonColor: "#d33",
        confirmButtonText: "ตกลง",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          let userProfile = JSON.parse(localStorage.getItem("user"));

          let payloads = {};
          if (meal == "breakfast") {
            payloads = {
              userId: userProfile.id,
              meal: meal,
              dishId: this.menuRecommend.breakfast.id,
              dishName: this.menuRecommend.breakfast.name,
              calories: this.menuRecommend.breakfast.calories,
            };
          } else if (meal == "lunch") {
            payloads = {
              userId: userProfile.id,
              meal: meal,
              dishId: this.menuRecommend.lunch.id,
              dishName: this.menuRecommend.lunch.name,
              calories: this.menuRecommend.lunch.calories,
            };
          } else if (meal == "dinner") {
            payloads = {
              userId: userProfile.id,
              meal: meal,
              dishId: this.menuRecommend.dinner.id,
              dishName: this.menuRecommend.dinner.name,
              calories: this.menuRecommend.dinner.calories,
            };
          }

          this.saveMenuRecommend(payloads);
        }
      });
    },
    preMenuRecommend(meal) {
      let userProfile = JSON.parse(localStorage.getItem("user"));
      var caloriesPerPotion = userProfile.caloriesPerPotion;
      const payloads = {
        caloriesPerPotion: caloriesPerPotion,
      };
      this.getMenuRecommend(payloads, meal);
    },
    getMenuRecommend(payloads, meal) {
      this.showLoading();

      const path = BASE_URL + "/menu/recommend";
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(path, payloads, { headers: headers })
        .then((res) => {
          this.hideLoading();

          if (res.data.isError) {
            Swal.fire({
              icon: "error",
              title: "แจ้งเตือน",
              text: res.data.message,
              confirmButtonColor: "#3085d6",
            });
          } else {
            if (meal == "breakfast") {
              this.menuRecommend.breakfast.id = res.data.menuRecommend.id;
              this.menuRecommend.breakfast.name = res.data.menuRecommend.name;
              this.menuRecommend.breakfast.calories =
                res.data.menuRecommend.calories;
              this.menuRecommend.breakfast.restaurant =
                res.data.menuRecommend.restaurant;
              this.menuRecommend.breakfast.nameRestaurant =
                res.data.menuRecommend.nameRestaurant;
            }

            if (meal == "lunch") {
              this.menuRecommend.lunch.id = res.data.menuRecommend.id;
              this.menuRecommend.lunch.name = res.data.menuRecommend.name;
              this.menuRecommend.lunch.calories =
                res.data.menuRecommend.calories;
              this.menuRecommend.lunch.restaurant =
                res.data.menuRecommend.restaurant;
              this.menuRecommend.lunch.nameRestaurant =
                res.data.menuRecommend.nameRestaurant;
            }

            if (meal == "dinner") {
              this.menuRecommend.dinner.id = res.data.menuRecommend.id;
              this.menuRecommend.dinner.name = res.data.menuRecommend.name;
              this.menuRecommend.dinner.calories =
                res.data.menuRecommend.calories;
              this.menuRecommend.dinner.restaurant =
                res.data.menuRecommend.restaurant;
              this.menuRecommend.dinner.nameRestaurant =
                res.data.menuRecommend.nameRestaurant;
            }
          }
        })
        .catch((error) => {
          console.log(error);
          this.hideLoading();
        });
    },
    saveMenuRecommend(payloads) {
      this.showLoading();

      const path = BASE_URL + "/menu/recommend/save";
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(path, payloads, { headers: headers })
        .then((res) => {
          this.hideLoading();

          if (res.data.isError) {
            Swal.fire({
              icon: "error",
              title: "แจ้งเตือน",
              text: res.data.message,
              confirmButtonColor: "#3085d6",
              allowOutsideClick: false,
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "บันทึกสำเร็จ",
              confirmButtonColor: "#3085d6",
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                this.gerRecommendToday();
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.hideLoading();
        });
    },
    gerRecommendToday() {
      this.showLoading();

      let userProfile = JSON.parse(localStorage.getItem("user"));
      const path = BASE_URL + "/menu/recommend/" + userProfile.id + "/today";
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .get(path, { headers: headers })
        .then((res) => {
          this.hideLoading();
          if (res.data.isError) {
            console.log(res.data.message);
          } else {
            this.bindRecommendToday(res.data.recommendToday);
          }
        })
        .catch((error) => {
          console.log(error);
          this.hideLoading();
        });
    },
    bindRecommendToday(recommend) {
      this.showLoading();
      for (var x in recommend) {
        if (recommend[x].Meal == "breakfast") {
          this.recommendToday.breakfast.meal = recommend[x].Meal;
          this.recommendToday.breakfast.dishName = recommend[x].Dish;
          this.recommendToday.breakfast.calories = recommend[x].Calories;
        }

        if (recommend[x].Meal == "lunch") {
          this.recommendToday.lunch.meal = recommend[x].Meal;
          this.recommendToday.lunch.dishName = recommend[x].Dish;
          this.recommendToday.lunch.calories = recommend[x].Calories;
        }

        if (recommend[x].Meal == "dinner") {
          this.recommendToday.dinner.meal = recommend[x].Meal;
          this.recommendToday.dinner.dishName = recommend[x].Dish;
          this.recommendToday.dinner.calories = recommend[x].Calories;
        }
      }
      this.hideLoading();
    },
    calculateCaloriesUsedTodayWithPercent() {
      let percentTDEE = this.userProfile.tdee / 100;
      let caloriesToday =
        (this.recommendToday.breakfast.calories +
          this.recommendToday.lunch.calories +
          this.recommendToday.dinner.calories) /
        percentTDEE;

      return caloriesToday;
    },
    calculateCaloriesUsedTodayWithNumber() {
      let caloriesToday =
        this.recommendToday.breakfast.calories +
        this.recommendToday.lunch.calories +
        this.recommendToday.dinner.calories;

      return caloriesToday;
    },
  },
};
</script>