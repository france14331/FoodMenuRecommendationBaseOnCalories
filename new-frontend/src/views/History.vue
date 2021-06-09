<template>
  <div class="sign-in">
    <Navbar />
    <div class="container my-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="card shadow">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-12">
                  <h2>ประวัติการแนะนำ</h2>
                  <hr />
                </div>
              </div>
              <div class="row">
                <div
                  class="col-md-12"
                  v-if="
                    history.table.content.length === 0 ||
                    history.table.content.length === 1
                  "
                >
                  ไม่พบข้อมูล
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div
                    class="table-responsive"
                    v-if="history.table.content.length > 1"
                  >
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">{{ history.table.header.no }}</th>
                          <th scope="col">{{ history.table.header.meal }}</th>
                          <th scope="col">{{ history.table.header.date }}</th>
                          <th scope="col">
                            {{ history.table.header.dishName }}
                          </th>
                          <th scope="col">
                            {{ history.table.header.calories }}
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        v-for="index in history.table.rowPerPages"
                        v-bind:key="index"
                      >
                        <tr
                          v-if="
                            index + history.table.startRow <
                            history.table.content.length
                          "
                        >
                          <th scope="row">
                            {{ index + history.table.startRow }}
                          </th>
                          <td>
                            {{
                              history.table.content[
                                index + history.table.startRow
                              ].meal == "breakfast"
                                ? "เช้า"
                                : history.table.content[
                                    index + history.table.startRow
                                  ].meal == "lunch"
                                ? "กลางวัน"
                                : history.table.content[
                                    index + history.table.startRow
                                  ].meal == "dinner"
                                ? "เย็น"
                                : "ไม่พบข้อมูล"
                            }}
                          </td>
                          <td>
                            {{
                              history.table.content[
                                index + history.table.startRow
                              ].date
                            }}
                          </td>
                          <td>
                            {{
                              history.table.content[
                                index + history.table.startRow
                              ].dishName
                            }}
                          </td>
                          <td>
                            {{
                              history.table.content[
                                index + history.table.startRow
                              ].calories
                            }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="row" v-if="history.table.content.length > 1">
                <div class="col-sm-12">
                  <nav>
                    <ul class="pagination pagination-sm justify-content-center">
                      <div
                        v-for="page in (Math.ceil(
                          history.table.content.length /
                            history.table.rowPerPages
                        ) - 1)"
                        v-bind:key="page"
                      >
                        <li
                          class="page-item"
                          v-if="page === history.table.currentPage"
                        >
                          <button class="page-link bg-primary text-light" @click="onPageChange(page)">
                            {{ page }}
                          </button>
                        </li>
                        <li class="page-item" v-else>
                          <button class="page-link" @click="onPageChange(page)">
                            {{ page }}
                          </button>
                        </li>
                      </div>
                    </ul>
                  </nav>
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
import moment from "moment";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export default {
  name: "History",
  components: {
    Navbar,
  },
  created() {
    this.getHistoryRecommendMenu();
  },
  data() {
    return {
      userProfile: JSON.parse(localStorage.getItem("user")),
      history: {
        table: {
          header: {
            no: "ลำดับ",
            meal: "มื้อ",
            date: "วันที่",
            dishName: "ชื่อเมนู",
            calories: "พลังงาน (แคลลอรี่)",
          },
          content: [
            {
              recommendID: null,
              meal: null,
              date: null,
              dishName: null,
              calories: null,
            },
          ],
          startRow: 0,
          rowPerPages: 10,
          currentPage: 0,
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
    getHistoryRecommendMenu() {
      this.showLoading();

      const path =
        BASE_URL + "/menu/recommend/" + this.userProfile.id + "/history";

      this.history.table.content = [
        {
          recommendID: null,
          meal: null,
          date: null,
          dishName: null,
          calories: null,
        },
      ];

      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .get(path, { headers: headers })
        .then((res) => {
          if (res.data.isError) {
            console.log(res.data.message);
          } else {
            this.hideLoading();
            if (res.data.recommendHistory) {
              for (var index in res.data.recommendHistory) {
                this.history.table.content.push({
                  recommendID: res.data.recommendHistory[index].RecommendID,
                  meal: res.data.recommendHistory[index].Meal,
                  date: moment(res.data.recommendHistory[index].Date).format(
                    "DD/MM/YYYY"
                  ),
                  dishName: res.data.recommendHistory[index].Dish,
                  calories: res.data.recommendHistory[index].Calories,
                });
              }
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onPageChange(page) {
      this.history.table.currentPage = page;
      this.history.table.startRow = this.history.table.rowPerPages * (page - 1);
    },
  },
};
</script>
