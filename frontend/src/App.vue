<template>
  <div id='app'>
    <HeaderArea/>
    <div id='nav'>
      <router-link to='/'>Home</router-link> |
      <router-link to='/about'>About</router-link>
      <router-link to='/login'>Login</router-link>
    </div>
    <router-view/>
    <FooterArea/>
  </div>
</template>
<script>
// import axios from 'axios'
import $ from 'jquery'
import HeaderArea from './components/layout/header.vue'
import FooterArea from './components/layout/footer.vue'
require('@/assets/framework/bootstrap-4.4.1-dist/css/bootstrap.min.css')
require('@/assets/framework/jui-grid-master/jui-grid.classic.css')
require('@/assets/custom8.css')

export default {
  name: 'app',
  components: {
    HeaderArea,
    FooterArea
  },
  head: {
    script: [
      { type: 'text/javascript', src: '@/assets/framework/bootstrap-4.4.1-dist/js/popper.min.js', async: true, body: true },
      { type: 'text/javascript', src: '@/assets/framework/bootstrap-4.4.1-dist/js/bootstrap.min.js', async: true, body: true },
      { type: 'text/javascript', src: '@/assets/framework/jui-grid-master/jui-core.js', async: true, body: true },
      { type: 'text/javascript', src: '@/assets/framework/jui-grid-master/jui-grid.js', async: true, body: true }
    ]
  },
  data () {
  },
  mounted () {
  /*  const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '@/assets/framework/bootstrap-4.4.1-dist/js/popper.min.js')
    document.head.appendChild(recaptchaScript)
    recaptchaScript.setAttribute('src', '@/assets/framework/jui-grid-master/jui-core.js')
    document.head.appendChild(recaptchaScript)
    recaptchaScript.setAttribute('src', '@/assets/framework/jui-grid-master/jui-grid.js')
    document.head.appendChild(recaptchaScript) */
    $('#flip').mouseenter(function () {
      $('#nav_submenu').slideDown('fast')
    })
    $('#pc_head').mouseleave(function () {
      $('#nav_submenu').slideUp('slow')
    })
    $('#submenu_1').on('mouseenter', function () {
      $('.flip_li_1 a').addClass('nav_on')
    })
    $('#submenu_1').on('mouseleave', function () {
      $('.flip_li_1 a').removeClass('nav_on')
    })
    $('#submenu_2').on('mouseenter', function () {
      $('.flip_li_2 a').addClass('nav_on')
    })
    $('#submenu_2').on('mouseleave', function () {
      $('.flip_li_2 a').removeClass('nav_on')
    })
    $('#submenu_3').on('mouseenter', function () {
      $('.flip_li_3 a').addClass('nav_on')
    })
    $('#submenu_3').on('mouseleave', function () {
      $('.flip_li_3 a').removeClass('nav_on')
    })
    $('#submenu_4').on('mouseenter', function () {
      $('.flip_li_4 a').addClass('nav_on')
    })
    $('#submenu_4').on('mouseleave', function () {
      $('.flip_li_4 a').removeClass('nav_on')
    })
    $('#submenu_5').on('mouseenter', function () {
      $('.flip_li_5 a').addClass('nav_on')
    })
    $('#submenu_5').on('mouseleave', function () {
      $('.flip_li_5 a').removeClass('nav_on')
    })
    $('#submenu_6').on('mouseenter', function () {
      $('.flip_li_6 a').addClass('nav_on')
    })
    $('#submenu_6').on('mouseleave', function () {
      $('.flip_li_6 a').removeClass('nav_on')
    })
    $('.app_popover').popover({ trigger: 'manual', html: true, animation: false })
      .on('mouseenter', function () {
        var _this = this
        $(this).popover('show')
        $('.popover').on('mouseleave', function () {
          $(_this).popover('hide')
        })
      }).on('mouseleave', function () {
        var _this = this
        setTimeout(function () {
          if (!$('.popover:hover').length) {
            $(_this).popover('hide')
          }
        }, 300)
      })
  },
  created () {
  }
}
</script>
<style lang='stylus'>
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
