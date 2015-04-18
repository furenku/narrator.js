<?php 

/****** twitter ******/

function twitter_filtros() {

	$html = '';

	for ($i=0; $i < 3 ; $i++) { 
		$html .= '<button class="filtro">';
		$html .= "#Hashtag";
		$html .= '</button>';
	}

	echo $html;

}



function twitter() {
	?>

	<div id="twitter_filtros" class="small-12 columns">
        
	    <?php 
	    twitter_filtros();
	    ?>

	</div>
	<div id="tweets" class="medium-12 columns fillH"></div>
	<div id="tweetDB" class="hidden"></div>

	<?php

}


?>