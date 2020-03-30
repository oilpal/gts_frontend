<template>
  <div>
    <HeaderArea/>
    <router-view/>
    <FooterArea/>
  </div>
</template>

<script>
import $ from 'jquery'
import '@/assets/framework/bootstrap-4.4.1-dist/css/bootstrap.min.css'
import '@/assets/framework/jui-grid-master/jui-grid.classic.css'
import '@/assets/framework/chosen_v1.8.7/chosen.css'
import '@/assets/custom8.css'
import '@/custom.css'
import HeaderArea from '@/components/layout/header.vue'
import FooterArea from '@/components/layout/footer.vue'

export default {
  name: 'Home',
  components: {
    HeaderArea,
    FooterArea
  },
  head: {
    script: [
      { type: 'text/javascript', src: '@/assets/framework/bootstrap-4.4.1-dist/js/popper.min.js', async: true, body: true },
      { type: 'text/javascript', src: '@/assets/framework/bootstrap-4.4.1-dist/js/bootstrap.min.js', async: true, body: true },
      { type: 'text/javascript', src: '@/assets/framework/jui-grid-master/jui-core.js', async: true, body: true },
      { type: 'text/javascript', src: '@/assets/framework/jui-grid-master/jui-grid.js', async: true, body: true },
      { type: 'text/javascript', src: '@/assets/framework/jquery-3.4.1/jquery.min.js', async: true, body: true },
      { type: 'text/javascript', src: '@/assets/framework/chosen_v1.8.7/chosen.jquery.js', async: true, body: true },
      { type: 'text/javascript', src: '@/assets/framework/chosen_v1.8.7/init.js', async: true, body: true }
    ]
  },
  mounted () {
  /*  const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', '@/assets/framework/bootstrap-4.4.1-dist/js/popper.min.js')
    document.head.appendChild(recaptchaScript)
    recaptchaScript.setAttribute('src', '@/assets/framework/jui-grid-master/jui-core.js')
    document.head.appendChild(recaptchaScript)
    recaptchaScript.setAttribute('src', '@/assets/framework/jui-grid-master/jui-grid.js')
    document.head.appendChild(recaptchaScript) */
    $('#content_tab_2').hide()
    $('.content_tab_1').click(function () {
      $('#content_tab_1').show()
      $('#content_tab_2').hide()
    })
    $('.content_tab_2').click(function () {
      $('#content_tab_1').hide()
      $('#content_tab_2').show()
    })
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
    /* $('.app_popover').popover({ trigger: 'manual', html: true, animation: false })
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
      }) */
  }
}
</script>
