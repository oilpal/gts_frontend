<template>
<!-- HEADER Start -->
<div class="wrap_header">
    <div class="sw_submenu"><img src="@/assets/img/icon_sw_submenu.png" alt=""></div>
    <div class="logo">GTS</div>
    <div class="nav" id="pc_head">
        <div class="custom_nav" id="custom_nav">
            <ul class="nav" id="flip">
              <li class="flip_li_1"><a href="#">고객관리</a></li>
              <li class="flip_li_2"><a href="#">일정관리</a></li>
              <li class="flip_li_3"><a href="#">정산관리</a></li>
              <li class="flip_li_4"><a href="#">직원관리</a></li>
              <li class="flip_li_5"><a href="#">센터관리</a></li>
              <li class="flip_li_6"><a href="#">기준정보</a></li>
            </ul>
        </div>
        <!-- NAV Start -->
        <div class="nav_submenu" id="nav_submenu">
            <div class="inner_box nav_inner_box">
                <div class="submenu_basic" id="submenu_1">
                    <ul>
                        <li><a href="#">고객정보</a></li>
                        <li><a href="#">고객별 서비스</a></li>
                    </ul>
                </div>
                <div class="submenu_basic" id="submenu_2">
                    <ul>
                        <li><a href="#">월별일정</a></li>
                        <li><a href="#">주별일정</a></li>
                    </ul>
                </div>
                <div class="submenu_basic" id="submenu_3">
                    <ul>
                        <li><a href="#">월별 손익계산</a></li>
                        <li><a href="#">고객 청구현황</a></li>
                        <li><a href="#">본인부담금 수금</a></li>
                        <li><a href="#">공단계좌입금현황</a></li>
                    </ul>
                </div>
                <div class="submenu_basic" id="submenu_4">
                    <ul>
                        <li><a href="#">직원 정보</a></li>
                        <li><a href="#">급여 관리</a></li>
                    </ul>
                </div>
                <div class="submenu_basic" id="submenu_5">
                    <ul>
                        <li><a href="#">센터정보</a></li>
                        <li><a href="#">공지사항</a></li>
                        <li><a href="#">일일이용자현황</a></li>
                        <li><a href="#">시스템마감 관리</a></li>
                    </ul>
                </div>
                <div class="submenu_basic" id="submenu_6">
                    <ul>
                        <li><a href="#">임직원 관리</a></li>
                        <li><a href="#">서비스품목 관리</a></li>
                        <li><a href="#">요양비용 관리</a></li>
                        <li><a href="#">오류품목체크</a></li>
                        <li><a href="#">직원시급일괄변경</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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
            <li class="app_bell"><a href="#" class="app_popover" data-html="true" data-toggle="popover" data-delay="200" data-animation="true"  data-placement="bottom" data-content="<div class='app_mypage_popover'><a href='#'>마감이 2일 남았습니다.</a></div><div class='app_mypage_popover'><a href='#'>공지사항 2건이 있습니다.</a></div>"><img src="@/assets/img/icon_app_bell_on.png" alt=""></a></li>
            <li class="app_mypage"><a href="#"  class="app_popover" data-html="true" data-delay="200" data-animation="true"  data-placement="bottom" data-content="<div class='app_mypage_popover'><a href='#'>로그아웃</a></div><div class='app_mypage_popover'><a href='#'>정보수정</a></div>"><img src="@/assets/img/icon_app_mypage.png" alt=""></a></li>
        </ul>
    </div>
</div>
<!-- HEADER End -->
</template>

<script>
export default {
  name: 'HeaderArea',
  components: {},
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
  }
}
</script>
