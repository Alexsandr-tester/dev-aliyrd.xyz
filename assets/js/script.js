jQuery(function(a){a(window).scroll(function(){a(".div").each(function(){var b=a(window).scrollTop(),c=a(this).offset().top,d=a(this).attr("id");b>c-120?(a("#menu").find("li").removeClass("active"),a("#menu").find('li[class="'+d+'"]').addClass("active")):a("#menu").find('li[class="'+d+'"]').removeClass("active")})})}),$(document).ready(function(){$("#menu").on("click","a",function(a){a.preventDefault();var b=$(this).attr("href"),c=$(b).offset().top;$("body,html").animate({scrollTop:c},1500),$("#menu").find('li[class="'+div_1+'"]').removeClass("active")})});
