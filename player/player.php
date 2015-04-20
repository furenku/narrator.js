<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Player</title>

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="stylesheets/app.css" />
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css" />
    <script src="bower_components/modernizr/modernizr.js"></script>
    <script src="bower_components/momentjs/min/moment.min.js"></script>



</head>

<?php require 'funciones.php'; ?>

<body>

  <header class="xrow">

    <div id="timelines" class="xrow hidden">
      <div id="secciones_timeline">
        <div class="progress_bar_holder">     
          <div class="progress_bar">      
            <div class="progress"></div>
          </div>
          <div class="markers">
            
          </div>
        </div>

      </div>
      <div id="secuencias_timeline">
        <div class="progress_bar_holder">     
          <div class="progress_bar">      
            <div class="progress"></div>
          </div>

          <div class="markers">
            
          </div>
        </div>
      </div>
    </div> <!-- #timelines -->
  </header>

  <div id="twitter_pantallas" class="xrow">
    
    <div id="twitter" class="fitH hide-for-small medium-3 large-1 columns">
      <?php twitter(); ?>
    </div>

    <div id="player" class="small-12 medium-9 large-11 columns fitH">
      <div id="pantallas">      
      </div>
    <!-- <iframe src="http://new.livestream.com/accounts/6789177/events/3897569/player?width=560&height=315&autoPlay=true&mute=false" width="560" height="315" frameborder="0" scrolling="no"> </iframe> -->
    </div>

  </div> <!-- twitter_pantallas -->

  <footer class="xrow">
    
    <div id="secuencia_media" class="">
      <div class="scrollX">      
        
      </div>
    </div>
  </footer>

    <script src="bower_components/jquery/dist/jquery.min.js"></script>
      <script src="bower_components/jquery-ui/jquery-ui.js"></script>
    <script src="bower_components/jquery.tube/jquery.tube.min.js"></script>

    <script src="bower_components/foundation/js/foundation.min.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/events.js"></script>
    <script src="js/layout.js"></script>
    <script src="js/app.js"></script>
    <script src="js/twitter.js"></script>
    <script src="js/timeline.js"></script>
    <script src="js/narrator.js"></script>
    <script>

    </script>
  </body>
</html>
