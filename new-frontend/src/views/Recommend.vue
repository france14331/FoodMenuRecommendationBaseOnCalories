<template>
  <div class="recommend">
    <Navbar />
    <div class="container my-5">
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
                  <div class="card bg-lightorange shadow border-0">
                    <div class="card-body">
                      <h3 class="card-title">มื้อเย็น</h3>
                      <div class="row">
                        <div class="col-sm-12">
                          <p v-show="menuRecommend.breakfast.name"><b>ชื่อเมนู</b>
                            {{ menuRecommend.breakfast.name }}
                          </p>
                          <p  v-show="menuRecommend.breakfast.calories">
                            <b>พลังงาน</b>
                            {{ menuRecommend.breakfast.calories }}
                            <b>แคลลอรี่</b>
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <button
                            class="btn btn-primary col-12"
                            type="button"
                            v-on:click="preMenuRecommend('breakfast')"
                          >
                            แนะนำ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-3">
                  <div class="card bg-lightorange shadow border-0">
                    <div class="card-body">
                      <h3 class="card-title">มื้อเย็น</h3>
                      <div class="row">
                        <div class="col-sm-12">
                          <p v-show="menuRecommend.lunch.name"><b>ชื่อเมนู</b>
                            {{ menuRecommend.lunch.name }}
                          </p>
                          <p  v-show="menuRecommend.lunch.calories">
                            <b>พลังงาน</b>
                            {{ menuRecommend.lunch.calories }}
                            <b>แคลลอรี่</b>
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <button
                            class="btn btn-primary col-12"
                            type="button"
                            v-on:click="preMenuRecommend('lunch')"
                          >
                            แนะนำ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-3">
                  <div class="card bg-lightorange shadow border-0">
                    <div class="card-body">
                      <h3 class="card-title">มื้อเย็น</h3>
                      <div class="row">
                        <div class="col-sm-12">
                          <p v-show="menuRecommend.dinner.name"><b>ชื่อเมนู</b>
                            {{ menuRecommend.dinner.name }}
                          </p>
                          <p  v-show="menuRecommend.dinner.calories">
                            <b>พลังงาน</b>
                            {{ menuRecommend.dinner.calories }}
                            <b>แคลลอรี่</b>
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <button
                            class="btn btn-primary col-12"
                            type="button"
                            v-on:click="preMenuRecommend('dinner')"
                          >
                            แนะนำ
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
  name: "Recommend",
  components: {
    Navbar,
  },
  data: () => {
    return {
      loadingProgress: null,
      menuRecommend: {
        breakfast: {
          name: "",
          calories: 0,
        },
        lunch: {
          name: "",
          calories: 0,
        },
        dinner: {
          name: "",
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
    preMenuRecommend(meal) {
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
              this.menuRecommend.breakfast.name = res.data.menuRecommend.name;
              this.menuRecommend.breakfast.calories = res.data.menuRecommend.calories;
            }

            if (meal == "lunch") {
              this.menuRecommend.lunch.name = res.data.menuRecommend.name;
              this.menuRecommend.lunch.calories = res.data.menuRecommend.calories;
            }

            if (meal == "dinner") {
              this.menuRecommend.dinner.name = res.data.menuRecommend.name;
              this.menuRecommend.dinner.calories = res.data.menuRecommend.calories;
            }
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