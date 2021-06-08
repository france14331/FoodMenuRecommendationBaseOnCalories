<template>
  <div class="pagenotfound container h-100">
    <div class="row align-items-center" style="height: 100vh">
      <div class="col-sm-12">
        <h1>Page Not Found.</h1>
        <router-link to="/">
          <button type="button" class="btn btn-light">กลับหน้าหลัก</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>
