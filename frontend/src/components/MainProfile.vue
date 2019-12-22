<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div class="col-6"></div>
          <div class="col-6 text-center offset-6" id="menu">
            <div>
              <p><a href="/recommend"><button type="button" class="btn btn-primary">แนะนำเมนูและร้านอาหาร</button></a></p><br><br>
              <p><a href="#"><button type="button" class="btn btn-primary">ประวัติการรับประทานอาหาร และสารอาหารทีได้รับ</button></a></p><br><br>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="col-6 text-center" id="information">
            <h1>ข้อมูลประจำวันนี้</h1>
            <p>พลังงาน (calories)</p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div><br>
            <div>
              <p>สารอาหาร</p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
              </div><br>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
              </div><br>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div><br>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
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
  name: 'MainProfile',
  components: {
    Navbar: Navbar
  }
}
</script>

<style>
.btn{
  height: 70px;
  width: 300px;
}

#menu{
  margin-top: 100px;
  padding: 5%;
}

#information{
  background-color: #FFBD71;
  padding: 5%;
  margin-top: 100px;
  height: 500px;
  border-radius: 1em
}

</style>
