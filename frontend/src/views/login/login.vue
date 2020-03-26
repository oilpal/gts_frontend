<template>
    <div class="container-fluid">
        <!--LOGIN START-->
        <div class="row" style="margin-top:150px;">
            <div class="col" style="background-color:#323861;">
                <div class="wrap_login_logo">
                    <div class="login_logo">GTS</div>
                    <div class="login_logo_fullname">Greencare Total Supervisor</div>
                </div>
            </div>
            <div class="col" style="background-color: #ddd;">
                <div class="wrap_login_form">
                    <form  @submit.prevent="loginForm" action="#" class="needs-validation" novalidate>
                        <div class="form-group">
                        <label for="uname">Id</label>
                        <input type="text" class="form-control" id="uname" placeholder="아이디 입력" name="uname" v-model="username" required>
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">아이디를 입력하세요!</div>
                        </div>
                        <div class="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" class="form-control" id="pwd" placeholder="비밀번호 입력" name="pswd" v-model="password" required>
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">비밀번호를 입력하세요!</div>
                        </div>
                        <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" name="remember" v-model="remember"> 아이디 저장
                        </label>
                        </div>
                        <button type="submit" class="btn btn-primary">확인</button>
                    </form>
                </div>
            </div>
        </div>
        <!--LOGIN END-->

        <!--COPYRIGHT GTS-->
        <div class="row">
            <div class="col" >

                <div class="login_copyright_logo">
                    <img src="@/assets/img/logo_longlife.png" alt="">
                </div>
            </div>
            <div class="col">
                <div class="login_copyright_companyinfo">
                본점 : 경기도 성남시 분당구 대왕판교로 645번길 14 (삼평동, 네오위즈 판교타워)<br>
                대표이사 : 김명길 대표전화 : 1577-6512  팩스 : 031-8039-2000<br>
                <span>Copyright © 2016 롱라이프그린케어(주) inc. All right reserved.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { userLogin } from '../../service/login'
import VueCookies from 'vue-cookies'

export default {
  name: 'Login',
  data () {
    return {
      username: VueCookies.get('rememberId'),
      password: '',
      message: '',
      remember: VueCookies.get('remember')
    }
  },
  mounted: {
  },
  methods: {
    async loginForm () {
      const login = await userLogin(this.username, this.password, this.remember)
      console.log('login', login)
      await this.$router.push('/')
    }
  }
}
</script>

<style scoped>
/* @import '../../assets/custom.css'; */
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Noto+Sans+KR&display=swap');
/* bootstrap start custom.css */
.container-fluid {
    margin:0;
    padding:0;
    width: 100%;
    min-width: 1920px;;
    max-width: none !important;
}
/* bootstrap end */
/* default css Start */
* {
    padding:0;
    margin:0
}
body {
    font-family: 돋움, dotum, 'Noto Sans KR', sans-serif;
    font-size:12px;
    color:#777;
    padding:0;
    margin:0;
}
/* default css End */

/* 컨텐츠 Start */
.wrap_content {
    display: grid;
    grid-template-columns: 466px 1fr;
    /* margin-top:120px; */
}
.content_list {
    border-right:1px solid #dddddd;
}

.content_info {
    background-color: #e8e8e8;
    padding:27px;
}
.content_info .wrap_content_2 {
    border-radius: 5px;
    border:1px solid #ddd;
    background-color: #fff;
    height:1500px;
}
.col-3 {
    border-right:1px solid #dddddd;
}
.col-9 {
    background-color: #e8e8e8;
    padding:27px;
}
.col-9 .wrap_content_2 {
    border-radius: 5px;
    border:1px solid #ddd;
    background-color: #fff;
    height:1500px;
}
/* 컨텐츠 End */
/* LOGIN Start */
.wrap_login_logo {
    display: block;
    float:right;
    padding:30px;
}
.login_logo {
    font-size:15em;
    color:#fff;
    text-align: center;
    line-height: 1.2;
}
.login_logo_fullname {
    font-size:1.3em;
    color:#fff;
    text-align: center;
    letter-spacing: 3px;
}
.wrap_login_form {
    display: block;
    padding:50px;
    width:300px;
}
.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited,
.btn-primary:focus {
    background-color: #8064A2;
    border-color: #8064A2;
}
.login_copyright_logo {
    float:right;
    padding:40px 10px 0;
}
.login_copyright_companyinfo {
    padding-top:30px;
    color:#999;
}
/* LOGIN End */
</style>
