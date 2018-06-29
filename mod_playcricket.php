<?php
/**
 */
// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );
// Include the syndicate functions only once
require_once( dirname(__FILE__).'/helper.php' );

$playcricket = modPlaycricketHelper::getScript( $params );



require( JModuleHelper::getLayoutPath( 'mod_playcricket' ) );

?>