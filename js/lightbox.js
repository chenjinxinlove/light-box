 ;(function($){
	var LightBox = function(){
		var self = this;
		this.popupMask = $('<div id="G-lightbox-mask"></div>');
		this.popupWin = $('<div id="G-lightbox-popup">');
		this.bodyNode = $(document.body);
//		this.renderDOM();
		this.picViewArea = this.popupWin.find("div.lightbox-pic-view");//图片预览区
		this.popupPic = this.popupWin.find("img.lightbox-image");//图片
		this.closeBtn = this.popupWin.find("span.lightbox-close-btn");
		this.bodyNode.delegate(".js-lightbox,[data-role=lightbox]","click",function(e){
			e.stopPropagation();
			var imgadd = $(this).attr("data-source");
			$('.J_Poster').css("display","none");
			$('.product-btn').css("display","none");
			$('.graph-cont').css("display","none");
			$('.graph-title').css("display","none");
			self.renderDOM(imgadd);
			
		})
		this.bodyNode.delegate(".lightbox-close-btn","click",function(e){
			$('#G-lightbox-mask').remove();
			self.popupWin.html('');
			$('.J_Poster').css("display","block")
			$('.product-btn1').css("display","none");
			$('.product-btn').css("display","block");
			$('.graph-title').css("display","block")
		})
	};
	LightBox.prototype = {
		renderDOM:function(imgadd){
			var strDom = '<div class="lightbox-pic-view">'+
							'<div class="lightbox-close-btn"></div>'+
							'<span class="lightbox-btn lightbox-prev-btn" ></span>'+
							'<img class="lightbox-image" src="'+ imgadd +'" alt="" />'+
							'<span class="lightbox-btn lightbox-next-btn"></span>'+
							'</div>'+
							'<div class="lightbox-pic-caption">'+
							'<p class="lightbox-pic-desc"></p>'+
						'</div>'+
						'<div class="product-btn1">'+
    						'<div class="home-btn"><a href="homepage.html">返回首页</a></div>'+
						'</div>'
						
						
						;
			//插入到popupWin
			this.popupWin.html(strDom);
			this.bodyNode.append(this.popupMask,this.popupWin);
		}
	};
	window["LightBox"] = LightBox;
})(jQuery);
