
$(function () {
        $('.img-group img').css({width:180,height:100})
        $('#user').click(function () {
          $('#login').slideToggle('slow');
          $(this).text().toString() === '关闭' ? $(this).text('登录'):$(this).text('关闭')
        })
        /*表单验证*/
        $('#login input').siblings('span').css('display','none')
        var account = /^[a-z0-9_-]{3,16}$/
        $('#login input:eq(0)').keyup(function () {
          if (account.test(this.value)){
            $('#login .form-group:eq(0)').addClass('has-success').removeClass('has-error')
            $('#login #input1').siblings('span').eq(0).css('display','')
            .siblings('span').eq(0).css('display','none')
          }else {
            $('#login .form-group:eq(0)').removeClass('has-success').addClass('has-error')
            $('#login #input1').siblings('span').eq(0).css('display','none')
            .siblings('span').eq(0).css('display','')
          }

        })
        var password = /^[a-z0-9_-]{6,18}$/
        $('#login input:eq(1)').keyup(function () {
          if (password.test(this.value)){
            $('#login .form-group:eq(1)').addClass('has-success').removeClass('has-error')
            $('#login #input2').siblings('span').eq(0).css('display','')
            .siblings('span').eq(0).css('display','none')
          }else {
            $('#login .form-group:eq(1)').removeClass('has-success').addClass('has-error')
            $('#login #input2').siblings('span').eq(0).css('display','none')
            .siblings('span').eq(0).css('display','')
          }

        })
        /*快讯切换*/
        $('#list a').each(function () {
          $(this).click(function () {
            /*更新左边的列表*/
            $('#list .hover').removeClass('hover')
            $(this).addClass('hover')
            /*更新右边的内容区*/
             var index = $(this).index()
            $('.list_content .show').removeClass('show').addClass('hidden')
            $('.list_content .content').eq(index).removeClass('hidden').addClass('show')
          });
        });
      });