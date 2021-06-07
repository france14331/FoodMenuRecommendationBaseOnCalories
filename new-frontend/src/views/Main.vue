<template>
  <div class="main">
    <Navbar />
    <div class="container">
      <div class="row my-5">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-6 h-100 my-auto">
              <button type="button" class="btn btn-primary btn-lg">
                แนะนำเมนู
              </button>
            </div>
            <div class="col-sm-6">
              <div class="card bg-lightorange border-0 shadow">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <h3>ข้อมูลประจำวันนี้</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <p><b>พลังาน (Calories)</b></p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style="width: 50%"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >50 %</div>
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

export default {
  name: "Main",
  components: {
    Navbar,
  },
};
</script>
