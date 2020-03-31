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
                        <li><router-link to="billing">고객 청구현황</router-link></li>
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
    <AlarmArea/>
</div>
<!-- HEADER End -->
</template>

<script>
import AlarmArea from '@/components/layout/alarm.vue'

export default {
  name: 'HeaderArea',
  components: {
    AlarmArea
  },
  data () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
