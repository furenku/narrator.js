<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <title>Estado de Censura</title>

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="stylesheets/app.css" />
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css" />
    <script src="bower_components/modernizr/modernizr.js"></script>
    <script src="bower_components/momentjs/min/moment.min.js"></script>
    <script src="bower_components/imgLiquid/js/imgLiquid-min.js"></script>
    
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>



</head>

<?php require 'funciones.php'; ?>

<body>
  <div id="test"></div>
  <header class="xrow">
    

    <div id="timelines" class="xrow">
      <div id="timeline_secciones" class="xrow">
      <!-- <div id="timeline_secciones" class="small-10 small-offset-1 columns"> -->
        <div class="progress_bar_holder">     
        <!--<div class="progress_bar">      
            <div class="progress"></div>
          </div> -->
          <div class="markers">
            
          </div>
        </div>

      </div>
      <div id="timeline_secuencias">
       <div class="progress_bar_holder">     
       <!--  <div class="progress_bar">      
            <div class="progress"></div>
          </div> -->

          <div class="markers">
            
          </div>
        </div>
      </div>
    </div> <!-- #timelines -->
  </header>
  
  <div id="twitter_pantallas" class="xrow">

    <div id="player" class="small-12 columns fitH">
      <div class="nav_arrow small-1 columns fitH">

        <div class="vcenter_table">
          <div class="vcenter_container">
            <div class="vcenter_content">
              <button id="prev_arrow" class="disabled"><span class="fa fa-backward"></span></button>
            </div>
          </div>
        </div>
        
      </div>

      <div id="pantallas" class="small-10 columns fitH">      

      </div>
    <!-- <iframe src="http://new.livestream.com/accounts/6789177/events/3897569/player?width=560&height=315&autoPlay=true&mute=false" width="560" height="315" frameborder="0" scrolling="no"> </iframe> -->

      <div class="nav_arrow small-1 columns fitH">
      
        <div class="vcenter_table">
          <div class="vcenter_container">
            <div class="vcenter_content">
              <button id="next_arrow" class="disabled"><span class="fa fa-forward"></span></button>
            </div>
          </div>
        </div>      

      </div>

    </div>

  </div> <!-- twitter_pantallas -->

  <footer class="xrow">
    <div id="footer_logo" class="small-3 columns">
      <a href="http://article19.org">
        <img src="img/a19.png" alt="">
      </a>
    </div>
    <div id="footer_controles" class="small-6 columns text-center">
      <button id="transport_play" class="control"><span class="fa fa-play"></span></button>
      <button id="transport_stop" class="control"><span class="fa fa-stop"></span></button>
      <button id="transport_prev" class="control disabled"><span class="fa fa-backward"></span></button>
      <button id="transport_next" class="control disabled"><span class="fa fa-forward"></span></button>
        
    </div>
    <div id="footer_descarga" class="small-3 columns fontS text-right">
      <a href="link/a/informe/en/pdf"><button id="descarga"><span class="fa fa-download"></span>Descarga el informe en PDF</button></a>
    </div>
    
  </footer>

    <script src="bower_components/jquery/dist/jquery.min.js"></script>
      <script src="bower_components/jquery-ui/jquery-ui.js"></script>
    <script src="bower_components/jquery.tube/jquery.tube.min.js"></script>
    <script src="http://a.vimeocdn.com/js/froogaloop2.min.js"></script>
    <script src="bower_components/foundation/js/foundation.min.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/events.js"></script>
    <script src="js/layout.js"></script>
    <script src="js/app.js"></script>
    <script src="js/twitter.js"></script>
    <!--<script src="js/timeline.js"></script>-->
    <script src="js/narrator.js"></script>
    <script>

    </script>
  </body>
</html>
