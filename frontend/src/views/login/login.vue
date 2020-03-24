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
                            <input class="form-check-input" type="checkbox" name="remember"> 아이디 저장                            
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
                    <img src="/img/logo_longlife.png" alt="">
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
import axios from 'axios';

export default{      
        data(){
            return {
            username: '',
            password: '',
            message:''
            }
        },
        created(){

        },
        computed:{

        },
        beforeRouteEnter(to,from,next){

        },
        beforeRouteLeave(to,from,next){

        },
        mounted(){
          /*  if(this.isAuthenticated == true){
                this.$router.push('main');
            }*/
        },
        methods:{
            loginForm(username,password){
              /*  this.$store.dispatch('LOGIN', {username, password})
                    .then(() => this.redirect())
                    .catch(({message}) => this.msg = message)*/
            },redirect() {
                   /* const {search} = window.location
                    const tokens = search.replace(/^\?/, '').split('&')
                    const {returnPath} = tokens.reduce((qs, tkn) => {
                        const pair = tkn.split('=')
                        qs[pair[0]] = decodeURIComponent(pair[1])
                        return qs
                    }, {})*/

                    // 리다이렉트 처리
                    this.$router.push('main')
            }
        }    

    }
</script>