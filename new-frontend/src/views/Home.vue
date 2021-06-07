<template>
  <div class="home">
    <Navbar/>
    <div class="container">
      <div class="row mt-5">
        <div id="index" class="col-sm-12 text-left">
          <h1>Food Menu Reccomendation Base On Calories</h1>
          <br />
          <p>
            เว็บไซต์ที่จะช่วยแนะนำอาหารที่ให้พลังงานสารอาหารที่เหมาะสม
            และยังแนะนำสถานที่ใกล้เคียงที่สามารถหาซื้ออาหารที่แนะนำให้กับคุณได้
          </p>
          <br />
          <router-link to='/signup'>
            <button type="button" class="btn btn-light">สมัครสมาชิก</button>
          </router-link>
        </div>
        <div class="col-sm-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  }
};
</script>
