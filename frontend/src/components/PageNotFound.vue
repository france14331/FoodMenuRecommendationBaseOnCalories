<template>
  <div id="pagenotfound">
    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-2 ml-auto mr-auto">
            <h1>Page Not Found</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-2 ml-auto mr-auto">
            <a href="/">
              <button type="button" class="btn btn-primary col-sm-12">
                กลับหน้าหลัก
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<style scoped>
#pagenotfound {
  margin-top: 40vh;
}
</style>
