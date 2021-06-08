<template>
  <div class="recommend">
    <div class="container">
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
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">มื้อเช้า</h3>
                        <p class="collapse" id="breakfast">ข้าวมันไก่</p>
                        <button class= "btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#breakfast" aria-expanded="false" aria-controls="collapseExample">
                          แนะนำ
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">มื้อกลางวัน</h3>
                        <p class="collapse" id="lunch">ข้าวมันไก่</p>
                        <button class= "btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#lunch" aria-expanded="false" aria-controls="collapseExample">
                          แนะนำ
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <h3 class="card-title">มื้อเย็น</h3>
                        <p class="collapse" id="dinner">ข้าวมันไก่</p>
                        <button class= "btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#dinner" aria-expanded="false" aria-controls="collapseExample">
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

export default {
  name: "Recommend",
  
};

</script>

<style>

.collapse {
  &:not(.show) {
    display: none;
  }
}

.collapsing {
  height: 0;
  overflow: hidden;
  @include transition($transition-collapse);
}

</style>