<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <a class="navbar-brand" href="/index">FOOD RECCOMENDATION</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse right justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav item">
            <a class="nav-link" href="/main">หน้าแรก</a>
          </li>
          <li class="nav-item">
            <a class=" nav-link disabled"> | </a>
          </li>
          <li class="nav item">
            <a class="nav-link" href="/recommend">แนะนำเมนูและร้านอาหาร</a>
          </li>
          <li class="nav-item">
            <a class=" nav-link disabled"> | </a>
          </li>
          <li class="nav item">
            <a class="nav-link" href="/#">ประวัติการทานย้อนหลัง</a>
          </li>
          <li class="nav-item">
            <a class=" nav-link disabled"> | </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signin">ออกจากระบบ</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavMain'
}
</script>
