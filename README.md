# mod_playcricket

As the widget code for the live scores provided by play-cricket.com (https://play-cricket.ecb.co.uk/hc/en-us/articles/360000047558-Live-Score-Widgets-for-Third-Party-Sites) caused conflicts in the jQuery an alternative way of loading the widget in Joomla was needed.

the error: Uncaught TypeError: $ is not a function

Instead of relying on the javascript from the play-cricket site I decided to move the scripts to Joomla CMS module. That way I could change the $ into jQuery, eliminating the error. 

While I was doing that I also moved the css to the module. That way web owner can take care of the styling.

It is pretty straight forward and is open for improvements, but it does the trick...



