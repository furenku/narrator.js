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

<body>

  <header class="xrow">

    <div id="timelines" class="xrow">
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
      <div id="search" class="small-12 columns">
        <div class="medium-9 columns">
          <input class="texto" type="text" value="Buscar">
        </div>
          
        <div  class="boton medium-3 columns"><span class="fa fa-search"></span></div>
      </div>
      <div id="tools" class="small-12 columns text-right">
        <div id="search_tw" class="toggle boton medium-6 large-2 columns active"><span class="fa fa-search"></span></div>
        <div id="user_tw" class="toggle boton medium-6 large-2 columns"><span class="fa fa-user"></span></div>
        <div id="play" class="boton medium-6 large-2 columns"><span class="fa fa-play"></span></div>
        <div id="animate" class="boton medium-6 large-2 columns"><span class="fa fa-fast-forward"></span></div>
        <div class="boton medium-6 large-2 columns"></span></div>
        <div id="notify"  class="boton medium-6 large-2 columns"><span class="fa fa-twitter"></span></div>
      </div>
      <div id="tweets" class="medium-12 columns fillH"></div>
      <div id="tweetDB" class="hidden"></div>

    </div>

    <div id="player" class="small-12 medium-9 large-11 columns fitH">
      <div id="pantallas">
       <div id="clearDiv">
          <div id="clear" class="clearbtn"></div>
          <div id="clear1" class="clearbtn"></div>
          <div id="clear2" class="clearbtn"></div>
          <div id="clear3" class="clearbtn"></div>
       </div>
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
    <script>

    </script>
  </body>
</html>
