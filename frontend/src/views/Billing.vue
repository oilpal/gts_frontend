<template>
   <div>
    <!-- SEARCH Start -->
  <div class="wrap_search clearfix">
      <div class="wrap_title">
          <div class="title">고객청구현황</div>
          <div class="history">정산관리 > 고객청구현황</div>
      </div>
      <div class="search_member">
          <div class="box_search_member">
              <input type="text" value="이름검색" />
              <button type="submit" class="btn_search"></button>
          </div>
      </div>
      <div class="search_more">
         <!-- 200325 회의 요청건, 리스트가 길어 리스트항목을 검색할 수 있도록 요청 -->
         <div class="box_search_more">
              <select data-placeholder="센터선택" class="chosen-select" tabindex="2">
                  <option value=""></option>
                  <option value="United States">서울롯데백화점센터</option>
                  <option value="United Kingdom">인천센터</option>
                  <option value="Afghanistan">광주센터</option>
                  <option value="Aland Islands">제주센터</option>
                  <option value="Albania">부산센터</option>
                  <option value="Algeria">울산센터</option>
                  <option value="American Samoa">성남센터</option>
                  <option value="Andorra">천안센터</option>
              </select>
          </div>
          <!-- 가산율 -->
          <div class="box_search_more">
              <span style="color:#777">가산율</span> : <input type="text" class="input_default" style="width:60px;" value="0" /><button type="button" class="btn_tp_1">계산</button>
          </div>
      </div>

      <!-- 버튼 -->
      <div class="btn_group">
          <ul class="button_basic">
              <li><button type="button" class="btn_cancel">취소</button></li>
              <li><button type="button" class="btn_confirm">저장</button></li>
              <!-- button 비활성화시 class="disable" 추가 -->
              <li><button type="button" class="btn_confirm disable">저장</button></li>
          </ul>
      </div>
    </div>
<!-- SEARCH End -->

<!-- CONTENTS Start -->
<div class="wrap_content">
    <div class="wrap_content_list" style="width:900px;">

        <!-- 타이틀 / 히스토리 / 기타통계영역 -->

        <div class="wrap_member_list">
            <!-- JUI Start -->
            <div id="xtable_1" class="xtable scroll">
                <div id="test">
                  <sheets-xtable ref="ui"
                    :table-type="'simple headline'"
                    :table-width="800"
                    :columns="columns"
                    :data="datas"
                    :resize="true"
                    :sort-type="'multi'"
                    :template-row="tplRow"
                    :template-none="tplNone"
                    :scroll-height="tableHeight"
                    @update="onUpdateEvent"
                    @click="onClickEvent">
                  </sheets-xtable>
                </div>
                <!-- <table class="table simple headline hover">
                    <colgroup>
                        <col width="30px">
                        <col width="100px">
                        <col width="60px">
                        <col width="70px">
                        <col width="60px">
                        <col width="60px">
                        <col width="60px">
                        <col width="60px">
                        <col width="60px">
                        <col width="80px">
                        <col width="80px">
                        <col width="80px">
                        <col width="80px">
                    </colgroup>
                    <thead>
                    <tr>
                        <th rowspan="2">No</th>
                        <th rowspan="2">센터</th>
                        <th rowspan="2">고객</th>
                        <th rowspan="2">생일</th>
                        <th rowspan="2">요양등급</th>
                        <th colspan="4">공단청구금>(A)</th>
                        <th rowspan="2">본인부담금<br>(B)</th>
                        <th rowspan="2">총수가<br>(A-B)</th>
                        <th rowspan="2">비급여<br>(D)</th>
                        <th rowspan="2">총수납금액<br>(B+D)</th>
                    </tr>
                    <tr>
                        <th>이용료</th>
                        <th>이동</th>
                        <th>목욕</th>
                        <th>인력가산</th>
                    </tr>
                    </thead>
                    <tbody>
                       <tr>
                            <td>1</td>
                            <td>홍길동</td>
                            <td>고객명</td>
                            <td>아니요</td>
                            <td>0등급</td>
                            <td>0</td>
                            <td>2020-02-02</td>
                            <td>월</td>
                            <td>12</td>
                            <td>20</td>
                            <td>12</td>
                            <td>20</td>
                            <td>4급, 8시간이상 10시간미만</td>
                        </tr>
                    </tbody>
                </table> -->
            </div>
            <!-- <script data-jui="#xtable1" data-tpl="row" type="text/template">
                <tr>
                    <td><!= no !></td>
                    <td><!= center !></td>
                    <td><!= name !></td>
                    <td><!= birth !></td>
                    <td><!= grade !></td>
                    <td class="td_price"><!= fee_1 !></td>
                    <td class="td_price"><!= fee_2 !></td>
                    <td class="td_price"><!= fee_3 !></td>
                    <td class="td_price"><!= fee_4 !></td>
                    <td class="td_price"><!= self_fee !></td>
                    <td class="td_price"><!= total_fee !></td>
                    <td class="td_price"><!= salary !></td>
                    <td class="td_price"><!= total !></td>
                </tr>
            </script> -->
            <!-- JUI End -->
            <!-- 합계표 -->
            <div class="tbl_total">
                <table>
                    <colgroup>
                        <col width="30px">
                        <col width="120px">
                        <col width="60px">
                        <col width="70px">
                        <col width="60px">
                        <col width="60px">
                        <col width="60px">
                        <col width="60px">
                        <col width="60px">
                        <col width="80px">
                        <col width="80px">
                        <col width="80px">
                        <col width="80px">
                    </colgroup>
                    <thead>
                    <tr>
                        <th colspan="5">합계</th>
                        <th>1,000</th>
                        <th>1,000</th>
                        <th>1,000</th>
                        <th>1,000</th>
                        <th>1,000</th>
                        <th>1,000</th>
                        <th>1,000</th>
                        <th>1,000</th>
                    </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>

            <!-- 회원리스트 통계 및 버튼 -->
            <div class="wrap_member_total clearfix">
                <div class="member_total">TOTAL : 1000명</div>
                <div class="member_total_btn">
                </div>
            </div>
        </div>
    </div>
    <div class="wrap_content_info" style="margin-left:900px;">

        <div class="content_info" id="content_tab_1">
            <!-- 타이틀 -->
            <div class="wrap_content_info_title clearfix">
                <div class="content_info_title_selected"><a href="#" class="content_tab_1">청구상세내역</a></div>
                <!-- <div class="content_info_title"><a href="#" class="content_tab_2">서비스 정보</a></div> -->
            </div>

            <!-- 내용 Start -->
            <div class="content_info_detail clearfix">
                <div id="table_2">
                    <table class="table simple hover">
                        <colgroup>
                            <col style="width:30px;">
                            <col style="width:80px;">
                            <col style="width:80px;">
                            <col style="width:60px;">
                            <col style="width:60px;">
                            <col style="width:50px;">
                            <col style="width:70px;">
                            <col style="width:45px;">
                            <col style="width:45px;">
                            <col style="width:45px;">
                            <col style="width:45px;">
                            <col style="width:45px;">
                            <col>
                            <col style="width:70px;">
                            <col style="width:70px;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th rowspan="2">No</th>
                                <th rowspan="2">직원</th>
                                <th rowspan="2">고객</th>
                                <th rowspan="2">가족</th>
                                <th rowspan="2">등급</th>
                                <th rowspan="2">비율</th>
                                <th rowspan="2">서비스 일자</th>
                                <th rowspan="2">요일</th>
                                <th colspan="2">시작</th>
                                <th colspan="2">종료</th>
                                <th rowspan="2">서비스명</th>
                                <th rowspan="2">서비스<br>수가</th>
                                <th rowspan="2">미이용</th>
                            </tr>
                            <tr>
                                <th>시간</th>
                                <th>분</th>
                                <th>시간</th>
                                <th>분</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>홍길동</td>
                                <td>고객명</td>
                                <td>아니요</td>
                                <td>0등급</td>
                                <td>0</td>
                                <td>2020-02-02</td>
                                <td>월</td>
                                <td>12</td>
                                <td>20</td>
                                <td>12</td>
                                <td>20</td>
                                <td>4급, 8시간이상 10시간미만</td>
                                <td>5,000</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>홍길동</td>
                                <td>고객명</td>
                                <td>아니요</td>
                                <td>0등급</td>
                                <td>0</td>
                                <td>2020-02-02</td>
                                <td>월</td>
                                <td>12</td>
                                <td>20</td>
                                <td>12</td>
                                <td>20</td>
                                <td>4급, 8시간이상 10시간미만</td>
                                <td>5,000</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>홍길동</td>
                                <td>고객명</td>
                                <td>아니요</td>
                                <td>0등급</td>
                                <td>0</td>
                                <td>2020-02-02</td>
                                <td>월</td>
                                <td>12</td>
                                <td>20</td>
                                <td>12</td>
                                <td>20</td>
                                <td>4급, 8시간이상 10시간미만</td>
                                <td>5,000</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- 내용 End -->
        </div>

        <!-- 서비스 정보 Start -->
        <div class="content_info" id="content_tab_2">
            <!-- 타이틀 -->
            <div class="wrap_content_info_title clearfix">
                <div class="content_info_title"><a href="#" class="content_tab_1">고객 정보</a></div>
                <div class="content_info_title_selected"><a href="#" class="content_tab_1">서비스 정보</a></div>
                <div class="content_info_button">
                    <ul class="button_basic">
                        <li class="button_icon">
                            <a href="#"><img src="img/btn_copy.png" alt=""></a>
                            <span class="tooltiptext">회원복사</span>
                        </li>
                        <li class="button_icon">
                            <a href="#"><img src="img/btn_download.png" alt=""></a>
                            <span class="tooltiptext">엑셀다운</span>
                        </li>
                        <li class="button_icon">
                            <a href="#"><img src="img/btn_member_add.png" alt=""></a>
                            <span class="tooltiptext">회원추가</span>
                        </li>
                        <li><button type="button" class="btn_cancel">계약해지</button></li>
                        <li><button type="button" class="btn_cancel">취소</button></li>
                        <li><button type="button" class="btn_confirm">저장</button></li>
                    </ul>
                </div>
            </div>

            <!-- 내용 Start -->
            <div class="content_info_detail clearfix">서비스 정보 소개</div>
            <!-- 내용 End -->
        </div>
        <!-- 서비스 정보 End -->

    </div>
</div>
<!-- CONTENTS End -->
</div>
</template>
<script>
import SheetsXTable from '@/components/xtable/xtable.js'
import props from '@/components/base/props.js'
import computed from '@/components/base/computed.js'
import watch from '@/components/base/watch.js'
import methods from '@/components/base/methods.js'
import Vue from 'vue'

SheetsXTable.mixins = [props, computed, watch, methods]
export default
{
  components: { SheetsXTable }
}
var app = new Vue({
  el: '#test',
  data: {
    columns: [
      { key: 'name', name: '이름', sort: true, width: '200px' },
      { key: 'age', name: '나이', sort: true },
      { key: 'location', name: '지역', sort: true }
    ],
    datas: createRandomData(10),
    tableHeight: 200,
    tplRow: '<tr><td><!= name !></td><td><!= age !></td><td><!= location !></td></tr>',
    tplNone: '<tr><td class="none" colspan="3"><div class="msg">None!!!</div></td></tr>'
  },
  methods: {
    onUpdateEvent: function (rows) {
      console.log(rows)
    },
    onClickEvent: function (row, e) {
      console.log(row, e)
      this.$refs.ui.sheets.select(row.index)
    }
  },
  mounted: function () {
    console.log(this.$refs.ui.sheets)
  }
})

function getRandomIntInclusive (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function createRandomData (count) {
  const data = []

  for (let i = 1; i <= count; i++) {
    data.push({
      name: `Alvin${i}`,
      age: getRandomIntInclusive(28, 34),
      location: 'South Korea'
    })
  }

  return data
}

</script>

<style scoped lang="less">
    @import "~juijs-grid/src/styles/base/mixins.less";
    @import "~juijs-grid/src/styles/common.less";
    @import "~juijs-grid/src/styles/common.theme.less";
    @import "~juijs-grid/src/styles/table.less";
    @import "~juijs-grid/src/styles/table.theme.less";
    @import "~juijs-grid/src/styles/xtable.less";
    @import "~juijs-grid/src/styles/xtable.theme.less";
    @import "~juijs-grid/src/styles/theme/classic.less";
    @import "~juijs-ui/src/styles/base/mixins.less";
    @import "~juijs-ui/src/styles/icon.less";
    @import "~juijs-ui/src/styles/icon.theme.less";
    @import "~juijs-ui/src/styles/dropdown.less";
    @import "~juijs-ui/src/styles/dropdown.theme.less";
    @import "~juijs-ui/src/styles/theme/classic.less";
</style>
