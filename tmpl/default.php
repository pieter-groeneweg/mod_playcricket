<?php 
// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' ); 
?>

<?php 
$document = JFactory::getDocument();
$document->addStyleSheet('modules/mod_playcricket/css/live_scorer.css');
$document->addScript('modules/mod_playcricket/js/live_scorer.js');
$document->addScript('modules/mod_playcricket/js/playcricketjs.js');

echo $playcricket; 

?>