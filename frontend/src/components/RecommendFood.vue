<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 offset-4">
          <div class="row">
            <div class="col-6 recommend">
              <p>มื้ออาหารที่ต้องการแนะนำ</p>
            </div>
            <div class="col-6 recommend">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">เช้า</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">กลางวัน</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">เย็น</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarMain'
export default {
  name: 'Recommend',
  components: {
    Navbar: Navbar
  }
}
</script>

<style>
.recommend{
  padding: 5%;
  margin-top: 100px;
}
</style>
