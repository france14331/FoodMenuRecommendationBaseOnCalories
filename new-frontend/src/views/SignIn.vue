<template>
  <div class="sign-in">
    <div class="container my-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-6 ms-auto me-auto">
              <div class="card bg-lightorange shadow border-0 mb-5">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-12">
                      <h2>เข้าสู่ระบบ</h2>
                    </div>
                  </div>
                  <form>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="mb-3 row">
                          <label
                            for="inputUsername"
                            class="col-sm-3 ms-auto me-auto col-form-label"
                            ><b>ชื่อผู้ใช้งาน*:</b></label
                          >
                          <div class="col-sm-6 ms-auto me-auto">
                            <input
                              type="text"
                              class="form-control"
                              id="inputUsername"
                              placeholder="ชื่อผู้ใช้งาน"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="mb-3 row">
                          <label
                            for="inputPassword"
                            class="col-sm-3 ms-auto me-auto col-form-label"
                            ><b>รหัสผ่าน*:</b></label
                          >
                          <div class="col-sm-6 ms-auto me-auto">
                            <input
                              type="text"
                              class="form-control"
                              id="inputPassword"
                              placeholder="รหัสผ่าน"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          type="submit"
                          class="btn btn-primary col-sm-6 col-12"
                        >
                          เข้าสู่ระบบ
                        </button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12 mt-2">
                        <router-link to="/signup">
                          <button
                            type="button"
                            class="btn btn-outline-dark col-sm-6 col-12"
                          >
                            สมัครสมาชิก
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </form>
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
// @ is an alias to /src

export default {
  name: "SignIn",
};
</script>
