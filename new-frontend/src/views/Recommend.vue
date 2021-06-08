<template>
  <div class="recommend">
    <Navbar/>
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
                      <h3 class="card-title">มื้อเช้า</h3>
                      <p class="collapse" id="breakfast">ข้าวมันไก่</p>
                      <button
                        class="btn btn-primary col-12"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#breakfast"
                        aria-expanded="false"
                        aria-controls="breakfast"
                      >
                        แนะนำ
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-3">
                  <div class="card bg-lightorange shadow border-0">
                    <div class="card-body">
                      <h3 class="card-title">มื้อกลางวัน</h3>
                      <p class="collapse" id="lunch">ข้าวมันไก่</p>
                      <button
                        class="btn btn-primary col-12"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#lunch"
                        aria-expanded="false"
                        aria-controls="lunch"
                      >
                        แนะนำ
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-3">
                  <div class="card bg-lightorange shadow border-0">
                    <div class="card-body">
                      <h3 class="card-title">มื้อเย็น</h3>
                      <p class="collapse" id="dinner">ข้าวมันไก่</p>
                      <button
                        class="btn btn-primary col-12"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#dinner"
                        aria-expanded="false"
                        aria-controls="dinner"
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
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Recommend",
  components: {
    Navbar,
  }
};
</script>