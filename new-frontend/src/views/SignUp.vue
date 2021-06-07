<template>
  <div class="sign-up">
    <div class="container">
      <div class="row mt-2 mb-2">
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-12">
              <h2>สมัครสมาชิก</h2>
              <hr />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card shadow border-0 mb-5 bg-lightorange">
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputUsername" class="col-sm-4 col-form-label"><b>ชื่อผู้ใช้งาน*:</b></label>
                          <div class="col-sm-6">
                            <input type="text" class="form-control" id="inputUsername"/>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputFirstname" class="col-sm-4 col-form-label"><b>ชื่อ*:</b></label>
                          <div class="col-sm-6">
                            <input type="text" class="form-control" id="inputFirstname"/>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputLastname" class="col-sm-4 col-form-label"><b>นามสกุล*:</b></label>
                          <div class="col-sm-6">
                            <input type="text" class="form-control" id="inputLastname"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputPassword" class="col-sm-4 col-form-label"><b>รหัสผ่าน*:</b></label>
                          <div class="col-sm-6">
                            <input type="text" class="form-control" id="inputPassword"/>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputGender" class="col-sm-4 col-form-label"><b>เพศ*:</b></label>
                          <div class="col-sm-6">
                            <select id="inputGender" class="form-select">
                              <option selected>กรุณาเลือก...</option>
                              <option>ชาย</option>
                              <option>หญิง</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputWeight" class="col-sm-4 col-form-label"><b>น้ำหนัก*:</b></label>
                          <div class="col-sm-6">
                            <input type="number" class="form-control" id="inputWeight" min="0"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputConfirmPassword" class="col-sm-4 col-form-label"><b>ยืนยันรหัสผ่าน*:</b></label>
                          <div class="col-sm-6">
                            <input type="text" class="form-control" id="inputConfirmPassword"/>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputBirthDate" class="col-sm-4 col-form-label"><b>วันเกิด*:</b></label>
                          <div class="col-sm-6">
                            <input type="date" class="form-control" id="inputBirthDate"/>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputHeight" class="col-sm-4 col-form-label"><b>ส่วนสูง*:</b></label>
                          <div class="col-sm-6">
                            <input type="number" class="form-control" id="inputHeight"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputEmail" class="col-sm-4 col-form-label"><b>อีเมล์*:</b></label>
                          <div class="col-sm-6">
                            <input type="text" class="form-control" id="inputEmail"/>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputReligion" class="col-sm-4 col-form-label"><b>ศาสนา*:</b></label>
                          <div class="col-sm-6">
                            <select id="inputReligion" class="form-select">
                              <option selected>กรุณาเลือก...</option>
                              <option>พุทธ</option>
                              <option>คริสต์</option>
                              <option>อิสลาม</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="mb-3 row text-left">
                          <label for="inputActPerWeek" class="col-sm-4 col-form-label"><b>ออกกำลังกาย ครั้ง/สัปดาห์*:</b></label>
                          <div class="col-sm-6">
                            <input type="number" class="form-control" id="inputActPerWeek"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-8 text-left">
                        <label class="col-form-label">หมายเหตุ : กรุณากรอกข้อมูลที่มีเครื่องหมาย "*" ให้ครบถ้วนก่อนทำการกดปุ่มสมัครสมาชิก</label>
                      </div>
                      <div class="col-sm-4">
                        <div class="row">
                          <div class="col-sm-6 ms-auto text-right mb-2">
                            <button type="button" class="btn btn-primary col-sm-12 col-12">สมัครสมาชิก</button>
                          </div>
                          <div class="col-sm-6 text-right">
                            <router-link to='/'>
                              <button type="button" class="btn btn-outline-danger col-sm-12 col-12">ยกเลิก</button>
                            </router-link>
                          </div>
                        </div>
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
  name: "SignUp",
};
</script>
