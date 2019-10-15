<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <br>
                <h2>สมัครสมาชิก</h2>
                <hr>
                <div id="register-form" class="row">
                    <div class="col-2">
                        <p><b><label>username*: </label></b></p><br>
                        <p><b><label>รหัสผ่าน*: </label></b></p><br>
                        <p><b><label>ยืนยันรหัสผ่าน*: </label></b></p><br>
                        <p><b><label>อีเมล*: </label></b></p><br>
                        
                    </div>
                    <div class="col-4">
                        <!-- username -->
                        <p><input type="text" placeholder="    8-16 Character: A-Z a-z 0-9"></p><br>

                        <!-- password -->
                        <p><input type="password" placeholder="    8-16 Character: A-Z a-z 0-9"></p><br>

                        <p><input type="password" placeholder="    8-16 Character: A-Z a-z 0-9"></p><br>

                        <!-- email -->
                        <p><input type="email" placeholder="    8-16 Character: A-Z a-z 0-9"></p>
                    </div>
                    <div class="col-1">
                        <p><b><label>ชื่อ*: </label></b></p><br>
                        <p><b><label>เพศ*: </label></b></p><br>
                        <p><b><label>วันเกิด*: </label></b></p><br>
                        <p><b><label>ศาสนา*: </label></b></p><br>
                    </div>
                    <div class="col-2">
                        <!-- name -->
                        <p><input type="text" placeholder="    Name"></p><br>

                        <!-- gender -->
                        <p><select>
                            <option value=""></option>
                            <option value="male">ชาย</option>
                            <option value="female">หญิง</option>
                        </select></p><br>

                        <!-- birth day -->
                        <p><input type="date"></p><br>

                        <!-- religion -->
                        <p><select>
                            <option value=""></option>
                            <option value="buddha">พุทธ</option>
                            <option value="chirst">คริสต์</option>
                            <option value="muslim">อิสลาม</option>
                        </select></p>
                    </div>
                    <div class="col-1">
                        <p><b><label>นามสกุล*: </label></b></p><br>
                        <p><b><label>น้ำหนัก*: </label></b></p><br>
                        <p><b><label>ส่วนสูง*: </label></b></p><br>
                    </div>
                    <div class="col-2">
                        <!-- name -->
                        <p><input type="text" placeholder="    Surname"></p><br>

                        <!-- weight -->
                        <p><input type="text" placeholder=""></p><br>

                        <!-- height -->
                        <p><input type="text" placeholder=""></p>
                    </div>
                    <div class="col-10"><p>หมายเหตุ : กรุณากรอกข้อมูลที่มีเครื่องหมาย "*" ให้ครบถ้วนก่อนทำการกดปุ่มสมัครสมาชิก</p></div>
                    <div class="col-2">
                        <button type="button" class="btn btn-primary">สมัครสมาชิก</button>
                        <button type="button" class="btn btn-secondary">ยกเลิก</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style>
#register-form{
    background-color: #ffbd71;
    height: 500px;
    padding: 2%;
    border-radius: 3em;
}
hr{
    border-width: 0.3em;
}
input{
    width: 230px;
}
select{
    height: 30px;
}
</style>