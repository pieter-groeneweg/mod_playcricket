<?php
/**

 */
class modPlaycricketHelper
{
    /**
     
     */
    public static function getScript($params)
	{
		
		$myClubId = $params->get('myClubId', '');
		
		$modid 	= $params->get('modid', '1');
		$sfx	= $params->get('moduleclass_sfx');
  
    	$result = '<a style="display:none;" class="lsw"  href="https://www.play-cricket.com/embed_widget/live_scorer_widgets?club_id='.$myClubId.'" id="lsw_link_1526534855798"></a>';
		$result.= '<div class="lsw-col-12 lsw_tile"  id="lsw_container_1526534855798"></div>';
    
		
		return $result;
    }
}
?>