<template>
    <div class="app">
        <ul>
            <li class="app_message">마감이 2일 남았습니다.</li>
            <!--
                * 공지사항 아이콘, 마이페이지 아이콘 bootstrap popvoer
                  data-content 속성에 html로 코드 삽입

                * 공지사항 아이콘 (bell) : 3일전일까지 알림 내용이 있을 경우 아이콘 이미지 변경
                    - 공지가 없을경우 : icon_app_bell_off.png
                    - 공지가 있을경우 : icon_app_bell_on.png

                * bootstrap popover document : https://getbootstrap.com/docs/4.4/components/popovers/
            -->
            <!-- <a href="#"
                class="app_popover"
                data-html="true"
                data-toggle="popover"
                data-delay="200"
                data-animation="true"
                data-placement="bottom"
                data-content="<div class='app_mypage_popover'><a href='#'>마감이 2일 남았습니다.</a></div><div class='app_mypage_popover'><a href='#'>공지사항 2건이 있습니다.</a></div>">
                <img src="@/assets/img/icon_app_bell_on.png" alt="">
                </a> -->
            <!--
                <a href="#"
                    class="app_popover"
                    data-html="true"
                    data-delay="200"
                    data-animation="true"
                    data-placement="bottom"
                    data-content="<div class='app_mypage_popover'><a href='#'>로그아웃</a></div><div class='app_mypage_popover'><a href='#'>정보수정</a></div>">
                    <img src="@/assets/img/icon_app_mypage.png" alt="">
                </a>
                -->
            <li class="app_bell">
                  <popper
                    trigger="hover"
                    :options="{
                    placement: 'bottom',
                    delay: '200',
                    animation: true,
                    html: true,
                    width:'300px'
                    }">
                    <div class="popper">
                      <div class='app_mypage_popover'><a href='#'>마감이 2일 남았습니다.</a></div>
                      <div class='app_mypage_popover'><a href='#'>공지사항 2건이 있습니다.</a></div>
                    </div>
                    <a href="#" slot="reference"><img src="@/assets/img/icon_app_bell_on.png" alt="" ></a>
                  </popper>
            </li>
            <li class="app_mypage">
                <popper
                    trigger="hover"
                    :options="{
                    placement: 'bottom',
                    delay: '200',
                    animation: true,
                    html: true
                    }">
                    <div class="popper">
                      <div class='app_mypage_popover'><a href='#' v-on:click="fnUserLogOut">로그아웃</a></div>
                      <div class='app_mypage_popover'><a href='#'>정보수정</a></div>
                    </div>
                    <a href="#" slot="reference"><img src="@/assets/img/icon_app_mypage.png" alt="" ></a>
                  </popper>
            </li>
        </ul>
    </div>
</template>

<script>
import Popper from 'vue-popperjs'
import 'vue-popperjs/dist/vue-popper.css'
import '@/assets/custom.css'
import { userLogout } from '../../service/login'

export default {
  components: {
    Popper
  },
  mounted () {
  },
  methods: {
    fnUserLogOut: function (event) {
      const logoutFlag = userLogout()
      console.log('logoutFlag', logoutFlag)
      if (logoutFlag) {
        // this.$router.push('/login')
        this.$router.go({ name: 'Login' })
      } else {
        alert('오류가 발생했습니다.')
      }
    }
  }
}
</script>
