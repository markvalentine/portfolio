(function(window, document, undefined) {

    var initial_button_offset = $('#scroll_next').offset().top;
    var $div_back = $(".button-back");
    var $scroll_prev = $('#scroll_prev');
    $scroll_prev.detach();
    var $scroll_next = $('#scroll_next');
    var $button_div = $('.button-div');
    var width = $("body").width();
    $button_div.css({'width': width - 300});

    var locations = ['#top', '#bio', '#1', '#4'];
    var current = 0;
    var prev = null;
    var next = 1;

    var detached = false;

    //heights
    var h_start = $('#top').offset().top - 75;
    var h_bio = $('#bio').offset().top -75;
    var h_1 = $('#1').offset().top -75;

    var h_4 = $('#4').offset().top -75;

    var height = $(this).scrollTop()

    $(document).scroll(function(event){

        height = $(this).scrollTop()

        if(height == h_start){
            current = 0;
            prev = null;
            next = 1;
        }
        if(height > h_start){
            current = 0;
            prev = 0;
            next = 1;
        }
        if(height == h_bio){
            current = 1;
            prev = 0;
            next = 2;
        }
        if(height > h_bio){
            current = 1;
            prev = 1;
            next = 2;
        }
        if(height == h_1){
            current = 2;
            prev = 1;
            next = 3;
        }
        if(height > h_1){
            current = 2;
            prev = 2;
            next = 3;
        }
        if(height == h_4){
            current = 3;
            prev = 2;
            next = null;
        }
        if(height > h_4){
            current = 3;
            prev = 3;
            next = null;
        }
        $scroll_next.click(function(event){
            event.preventDefault();
            scroll(locations[next]);
        });
        $scroll_prev.click(function(event){
            event.preventDefault();
            scroll(locations[prev]);
        });
        console.log('curent', current);
    });


    $(window).resize(function(event){
        var width = $("body").width();
        $button_div.css({'width': width - 300});
        h_start = $('#top').offset().top - 75;
        h_bio = $('#bio').offset().top -75;
        h_1 = $('#1').offset().top -75;
        h_4 = $('#4').offset().top -75;
    });

    $(document).scroll(function(){
        height = $(this).scrollTop();
        h_4 = $('#4').offset().top -75;
        if(height >= initial_button_offset - 25){
            var half_width = $("body").width()/2;
            var next = half_width - 55;
            var prev = half_width + 5 ;
            $('body').append($scroll_prev);
            if(detached) ($scroll_next).css({'opacity': '1'});
            detached = false;
            $scroll_next.css({'position':'absolute', 'position': 'fixed', 'left': next, 'top': '10px',
                'z-index': 10, 'text-align': 'center'});
            $scroll_prev.css({'position':'absolute', 'position': 'fixed', 'left': prev, 'top': '10px',
                'z-index': 10, 'text-align': 'center'});
            
            $(window).resize(function(event){
                var half_width = $("body").width()/2;
                var next = half_width - 55;
                var prev = half_width + 5 ;
                $scroll_next.css({'position':'absolute', 'position': 'fixed', 'left': next, 'top': '10px'});
                $scroll_prev.css({'position':'absolute', 'position': 'fixed', 'left': prev, 'top': '10px'});
            });
        }
        if(height <initial_button_offset - 25){
            $scroll_prev.detach();
            $scroll_next.css({'position':'initial'});
            
            $(window).resize(function(event){
                var width = $("body").width();
                var left = (width - 50)/2;
                
                $button_div.css({'width': width - 300});
                $scroll_next.css({'position':'initial'});
            });
        }
        if(height >= h_4 - 5){
            
            $scroll_next.css({'opacity': '0'});
            detached = true;
            
            var width = $("body").width();
            var left = (width - 50)/2;
            $scroll_prev.css({'left': left});

            $(window).resize(function(event){
                var width = $("body").width();
                var left = (width - 50)/2;
                
                $scroll_prev.css({'left':left});
            });
        }
    });


	function scroll(id){
		var $target = $(id);

		$('html, body').stop().animate({
		    'scrollTop': $target.offset().top - 75
		}, 800, 'swing'/*, function(){
			window.location.hash = id;
		}*/);


	}

	$scroll_next.click(function(event){
		event.preventDefault();
		scroll('#bio');
	});

    $('#scroll_bio').click(function(event){
        event.preventDefault();
        scroll('#bio');
    });

    $('#scroll_start').click(function(event){
        event.preventDefault();
        scroll('#top');
    });

    $('#scroll_1').click(function(event){
        event.preventDefault();
        scroll('#1');
    });

    $('#scroll_2').click(function(event){
        event.preventDefault();
        scroll('#2');
    });

    $('#scroll_3').click(function(event){
        event.preventDefault();
        scroll('#3');
    });

    $('#scroll_4').click(function(event){
        event.preventDefault();
        scroll('#4');
    });

    $('#scroll_5').click(function(event){
        event.preventDefault();
        scroll('#5');
    });

    $('#scroll_6').click(function(event){
        event.preventDefault();
        scroll('#6');
    });

	jQuery.fn.rotate = function(degrees) {
	    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
	                 '-moz-transform' : 'rotate('+ degrees +'deg)',
	                 '-ms-transform' : 'rotate('+ degrees +'deg)',
	                 'transform' : 'rotate('+ degrees +'deg)'});
	    return $(this);
	};

    jQuery.fn.rotateY = function(degrees) {
        $(this).css({'-webkit-transform' : 'rotateY('+ degrees +'deg)',
                     '-moz-transform' : 'rotateYa('+ degrees +'deg)',
                     '-ms-transform' : 'rotateY('+ degrees +'deg)',
                     'transform' : 'rotateY('+ degrees +'deg)'});
        return $(this);
    };    

	var rollingBall = document.getElementById('hs');
	var ballDiv = document.getElementById('hs-contain');

	rollingBall.addEventListener('click', function(event){
        event.preventDefault()
        var height = $(rollingBall).height();
        var width = $(ballDiv).width();
        var lengthOfRoll = height * Math.PI;
        var di = lengthOfRoll / 360;
        var rotOff = Math.ceil((width + height) / (di * 2)) + 5;
        var x = $(ballDiv).offset().left;
        var init_x = x;
        var y = $(ballDiv).offset().top;
        var rotation = 0;
        var num = 0;
        var x_reset = init_x - (rotOff * di);
        var rot_reset = 360 - rotOff;
        function roll(){
        	rotation = rotation + 1;
        	x = x + di
        	num = num + 1;
        	$(ballDiv).offset({ top: y, left: x });
        	$(rollingBall).rotate(rotation);
        	if (num == rotOff){
        		x = x_reset
        		rotation = rot_reset;
        	}
        	if (num == rotOff + rotOff) {
        		clearInterval(myTimer);
        	}
        }

        var myTimer = setInterval(roll, 1);
        
    });

    rollingBall.addEventListener('mouseover', function(event){
    	event.preventDefault();
        var height = $(rollingBall).height();
        var width = $(ballDiv).width();
        var rotation = 0;
        var inc = 0;

        function spin(){
        	if(rotation < 16){
        		inc = 1;
        	}
        	else if(rotation < 32){
        		inc = 2;
        	}
        	else if(rotation < 48){
        		inc = 4;
        	}
        	else if(rotation < 672){
        		inc = 8;
        	}
        	else if(rotation < 688){
        		inc = 4;
        	}
        	else if(rotation < 704){
        		inc = 2;
        	}
        	else if(rotation < 720){
        		inc = 1;
        	}
        	else if (rotation >= 720){
        		clearInterval(myTimer);
                inc = 0;
        	}
        	rotation = rotation + inc;
        	$(rollingBall).rotate(rotation);
        }
        var myTimer = setInterval(spin, 1);
        
    });

    rollingBall.addEventListener('contextmenu', function(event){
        event.preventDefault();
        var height = $(rollingBall).height();
        var width = $(ballDiv).width();
        var rotation = 0;
        var inc = 0;

        function flip(){
            if(rotation < 360){
                inc = 1;
            }
            else if (rotation >= 360){
                clearInterval(myTimer);
                inc = 0;
            }
            rotation = rotation + inc;
            $(rollingBall).rotateY(rotation);
        }
        var myTimer = setInterval(flip, 1);
        
    });

    $('#change').mouseover(function(event){
        $('#change').attr('src', 'Assets/deck2.JPG');
    });

    $('#change').mouseout(function(event){
        $('#change').attr('src', 'Assets/deck.JPG');
    });

})(this, this.document);