<template>
    <div class="container-fluid justify-content-center">
        <div class="row">
            <div id="signin-form" class="col-4 offset-4 text-center">
                <div>
                    <h2>เข้าสู่ระบบ</h2><br>
                    <p><label><b>Username : </b></label>
                    <input type="text" placeholder="Username"></p>

                    <p><label><b>Password : </b></label>
                    <input type="password" placeholder="Password"></p>
                </div>

                <div>
                    <button type="button" class="btn btn-link">สมัครสมาชิก</button>
                    <button type="button" class="btn btn-primary">เข้าสู่ระบบ</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Signin'
}
</script>

<style>
    #signin-form {
        background-color: #FFBD71;
        padding: 3%;
        margin-top: 100px;
        /* width: 500px; */
        border-radius: 3em;
    }
    input{
        border: 0px solid;
        border-radius: 0.3em
    }
</style> 
