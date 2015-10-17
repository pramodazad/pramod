'use strict';

angular.module('planistoApp')


.directive("addbuttonsbutton", function(){
	return {
		restrict: "E",
		template: "<button addbuttons>Click to add buttons</button>"
	};
})

.directive("addbuttons", function($compile){
	return function(scope, element){
		element.bind("click", function(){
			scope.count++;
			angular.element(document.getElementById('space-for-buttons'))
			.append($compile("<div><button class='btn btn-default' data-alert="+scope.count+" style='color: red;'>Show alert #"+scope.count+"</button></div>")
				(scope));
		});
	};
})

.directive("itemlist", function (){
	return {
		restrict: "A",
		replace: true,
		scope: {
			price: '@',
			productprice: '@'
		},
		template: "<div class='ibox'><div class='ibox-content product-box'><div class='product-imitation'>{{price}}</div><div class='product-desc'><span class='product-price'>{{productprice}}</span><small class='text-muted'>Category</small><a href='#' class='product-name'> Product</a><div class='small m-t-xs'>Many desktop publishing packages and web page editors now.</div><div class='m-t text-righ'><a href='#' class='btn btn-xs btn-outline btn-primary'>Info <i class='fa fa-long-arrow-right'></i> </a></div></div></div></div>"
	};
})

.directive("productlist", function (){
	return {
		restrict: "A",
		replace: true,
		scope: {
			imgsource: '@',
			targetpage: '@'
		},
		template: '<div class="portfolio-small">\
		<figure class="effect-julia"> \
		<img src= "img/portfolio/{{imgsource}}.jpg" alt="">\
		<figcaption> <div class="heading"> </div> <div >\
		<a ng-href="#{{targetpage}}">\
		<button type="button" class="btn-info bottom">add to cart</button></a> \
		</div> \
		</figcaption> \
		</figure> \
		</div>'
	};
})

.directive("mydirective", function(){
	return{
		restrict: "A",
		replace: true,
		template: "<a href='http://www.google.com'>click</a>"
	};
})


.directive("tablerow", function (){
	return{
		restrict: "A",
		replace: true,
		scope: {
			unread: '@',
			sender: '@',
			subject: '@',
			number: '@',
			time: '@'
		},
		template: '<tr class={{unread}}>\
		<td class="check-mail">\
		<input type="checkbox" ng-clicked="CheckedIndex({{number}})" class="i-checks">\
		</td>\
		<td class="mail-ontact"><a href="mail_detail.html">{{sender}}</a></td>\
		<td class="mail-subject"><a href="mail_detail.html">{{subject}}</a></td>\
		<td class=""><i class="fa fa-paperclip"></i></td>\
		<td class="text-right mail-date">{{time}}</td>\
		</tr>'
	};

})

.directive('draggable', function($document) {
  return function(scope, element, attr) {
    var startX = 0, startY = 0, x = 0, y = 0;
    element.css({
     position: 'relative',
     border: '1px solid red',
     backgroundColor: 'lightgrey',
     cursor: 'pointer',
     display: 'block',
     width: '65px'
    });
    element.on('mousedown', function(event) {
      // Prevent default dragging of selected content
      event.preventDefault();
      startX = event.screenX - x;
      startY = event.screenY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });

    function mousemove(event) {
      y = event.screenY - startY;
      x = event.screenX - startX;
      element.css({
        top: y + 'px',
        left:  x + 'px'
      });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }
  };
})






//last comment for the directive dont delete the below semi-colon ';'
;
