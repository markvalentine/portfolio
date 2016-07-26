<!DOCTYPE html>
<html lang="en">

   <head>
      <!-- Meta, title, CSS, etc. -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale= 0.5">
      <meta name="description" content="Just messin around">
      <meta name="keywords" content="HTML, CSS, JS, JavaScript, framework, bootstrap, front-end, frontend, web development">
      <meta name="author" content="Mark Valentine">

      <title>
        Buttons!
      </title>

      <link rel="shortcut icon" href="Assets/favicon.ico" />

      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
      
      <!-- My CSS -->
      <link rel="stylesheet" href="style.css">

      <!-- Optional theme -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

   </head>

   <body>
      <div class = "text-center">
         <h1>Buttons!</h1>
         <?php echo date("I F d, Y"); ?>
      </div>
      <div style = "background: white; margin: 15px 0px 20px 0px;">
         <div style = "height: 410px;">
            <div style = "margin: 15px; position: fixed; top: 90px; left: 15px; height: 100px; width: 191.719px;">
               <p> <strong style = "font-size: 17px;">1.</strong> &nbsp; This was the intermediate step on the way to the next one... It's aight, but it's built in a porrly for its functionality...</p>
            </div>
            <div class = "text-center split-box" style = "position: fixed; top: 190px; left: 15px; height: 180px; width: 191.719px;">
               <!-- anchors are 63.892px -->
               <a id = "1">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-menu-up" aria-hidden="true"></span>
                  </div>
               </a><br/>
               <a id = "2">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                  </div>
               </a>
               <a id = "0">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </div>
               </a>
               <a id = "3">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                  </div>
               </a><br/>
               <a id = "4">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                  </div>
               </a><br/>
            </div>
            <div style = "margin: 15px; position: fixed; top: 90px; left: 231px; height: 100px; width: 191.719px;">
               <p> <strong style = "font-size: 17px;">2.</strong> &nbsp; This is really what I was shooting for.  I'll get the source up on my github and link to it soon...</p>
            </div>
            <div class = "text-center second-box" style = "position: fixed; top: 190px; left: 231px; height: 180px; width: 191.719px;">
               <!-- anchors are 63.892px -->
               <a id = "spiral-up">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-menu-up" aria-hidden="true"></span>
                  </div>
               </a>
               <a id = "spiral-down">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>
                  </div>
               </a>
               <a id = "spiral-left">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                  </div>
               </a>
               <a id = "spiral-right">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                  </div>
               </a>
               <a id = "clckr">
                  <div class="circle circle-margin">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  </div>
               </a>
            </div>
            <div style = "margin: 15px; position: fixed; top: 90px; left: 452px; height: 100px; width: 191.719px;">
               <p> <strong style = "font-size: 17px;">3.</strong> &nbsp; More to come!</p>
            </div>
         </div>
      </div>
     

      <div class = "text-center">
         <p><img class = "center-block small-logo" src = "Assets/mv-black.gif">Mark Valentine<br/>Email: <a href="mailto:markvalentine@alumni.stanford.edu">markvalentine@alumni.stanford.edu</a><br/> Phone: <a href="tel:+15309132368">+1 (530) 913-2368</a><br/></p>
      </div>


      <!-- Latest compiled and minified JQuery -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

      <!-- Latest compiled and minified JavaScript -->
      <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

      <!-- My Javascript file -->

      <script type="text/javascript">

         var event = ('ontouchstart' in window) ? 'click' : 'mouseenter mouseleave';

         var $box = $('.split-box');
         var $clicker = $('#0');
         var count = 0
         var position_click = {'top': '60px', 'left': '63.91337585449219px'};
         

         var $spiralUp = $('#spiral-up');
         $spiralUp.css({'position': 'absolute', 'left': position_click.left, 'top': position_click.top});
         var $spiralDown = $('#spiral-down');
         $spiralDown.css({'position': 'absolute', 'left': position_click.left, 'top': position_click.top, 'z-index': -5});
         var $spiralLeft = $('#spiral-left');
         $spiralLeft.css({'position': 'absolute', 'left': position_click.left, 'top': position_click.top, 'z-index': -5});
         var $spiralRight = $('#spiral-right');
         $spiralRight.css({'position': 'absolute', 'left': position_click.left, 'top': position_click.top, 'z-index': -5});
         var $clckr = $('#clckr');
         $clckr.css({'position': 'absolute', 'left': position_click.left, 'top': position_click.top});
         var $box2 = $('.second-box');

         for(var i = 0; i < 5; i++){
            $('#' + i).css({'position': 'absolute', 'left': position_click.left, 'top': position_click.top, 'z-index': -10*i});
         }

         $('#1').click(function(event){
            console.log('one clicked');
         });

         $clicker.mouseenter(function(event){
            for(var i = 0; i < 5; i++){
               $('#' + i).css({'position': 'initial'});
            }
         });

         $clicker.mouseleave(function(event){
            $box.mouseenter(function(event){
               for(var i = 0; i < 5; i++){
                  $('#' + i).css({'position': 'initial'});
               }
            });
         });

         $box.mouseleave(function(event){
            for(var i = 0; i < 5; i++){
               $('#' + i).css({'position': 'absolute', 'left': position_click.left, 'top': position_click.top, 'z-index': -10*i});
            }
            $box.off('mouseover');
         });

         function spiralOut(){
            var t = 0;
            var x_init = 63.91337585449219;
            var y_init = 60;
            $clckr.css({'opacity': '0'});
            var interval = setInterval(function(){
                if(t >= (3*Math.PI / 2)){
                  clearInterval(interval);
                  return;
                }

                var x = (40/Math.PI)*t*Math.cos(t);
                var y = (40/Math.PI)*t*Math.sin(t);

                var xUp = x_init + x;
                var yUp = y_init + y;
                var xDown = x_init - x;
                var yDown = y_init - y;
                var xLeft = x_init + y;
                var yLeft = y_init - x;
                var xRight = x_init - y;
                var yRight = y_init + x;

                $spiralUp.css({'left': xUp + 'px', 'top': yUp + 'px'});
                $spiralDown.css({'left': xDown + 'px', 'top': yDown + 'px'});
                $spiralLeft.css({'left': xLeft + 'px', 'top': yLeft + 'px'});
                $spiralRight.css({'left': xRight + 'px', 'top': yRight + 'px'});

                t += .05;
            }, 1);
         }

         function spiralIn(){
            var t = 4.75;
            var x_init = 63.91337585449219;
            var y_init = 60;
            var interval = setInterval(function(){
                if(t <= 0){
                  $spiralUp.css({'left': x_init + 'px', 'top': y_init + 'px'});
                  $spiralDown.css({'left': x_init + 'px', 'top': y_init + 'px'});
                  $spiralLeft.css({'left': x_init + 'px', 'top': y_init + 'px'});
                  $spiralRight.css({'left': x_init + 'px', 'top': y_init + 'px'});
                  $clckr.css({'opacity': '1'});
                  clearInterval(interval);
                  return;
                }

                var x = (40/Math.PI)*t*Math.cos(t);
                var y = (40/Math.PI)*t*Math.sin(t);

                var xUp = x_init + x;
                var yUp = y_init + y;
                var xDown = x_init - x;
                var yDown = y_init - y;
                var xLeft = x_init + y;
                var yLeft = y_init - x;
                var xRight = x_init - y;
                var yRight = y_init + x;

                $spiralUp.css({'left': xUp + 'px', 'top': yUp + 'px'});
                $spiralDown.css({'left': xDown + 'px', 'top': yDown + 'px'});
                $spiralLeft.css({'left': xLeft + 'px', 'top': yLeft + 'px'});
                $spiralRight.css({'left': xRight + 'px', 'top': yRight + 'px'});

                t -= .05;
            }, 1);
         }

         function addEvents(){
            spiralOut();
            $clckr.off('mouseenter');
            $box2.mouseleave(function(event){
               spiralIn();
               $clckr.mouseenter(function(event){
                  addEvents();
               });
               $box2.off('mouseleave');
            });
         }

         $clckr.mouseenter(function(event){
            addEvents();
         });

         $.ajax({
            type: "GET",
            dataType: 'jsonp text',
            jsonp: false,
            cache: true,
            url: "http://services.my511.org/Transit2.0/GetAgencies.aspx?token=c6f19218-e274-433f-8177-9aa0bbdfc8af",
            
             success: function(response){
                 console.log(response);
             },
             error: function(response){
                 console.log(response);
             }
         });

      </script>


   </body>
</html>
