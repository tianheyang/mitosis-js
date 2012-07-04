/**

MITOSIS.JS
Separate content and styling in your responsive web layout.
Based on a 12-column grid.
v0.1 Test Version
Depends on jQuery

by Tianhe Yang
May 17, 2012

Licensed Under GNU GPL v3.0
http://www.gnu.org/copyleft/gpl.html

**/

(function($) {
	// Match unit width with correct column classname
	function unitWidthClassname(unit_width){
		switch(unit_width)
		{
			case 1: return 'onecol'; // 1 small column unit wide
			case 2: return 'twocol'; // 2 small column units wide
			case 3: return 'threecol'; // 3 small column units wide
			case 4: return 'fourcol'; // and so on...
			case 5: return 'fivecol';
			case 6: return 'sixcol';
			case 7: return 'sevencol';
			case 8: return 'eightcol';
			case 9: return 'ninecol';
			case 10: return 'tencol';
			case 11: return 'elevencol';
			case 12: return 'twelvecol';
			default: return '';
		}
	}
	$(document).ready(function(){
		// Automatically set the correct classname for evenly-sized columns, relative to how many columns are in the given container.
		// Input - unique container ID selector
		// Action - automatically sets column names
		jQuery.fn.evenSized = function(){
			$(this).each(function(j){
				var container_children_count = $(this).children('.column').length;
				switch(container_children_count)
				{
					case 1: 	$(this).children('.column').addClass('twelvecol'); // Only 1 column, 12 small column units wide
								break;
					case 2: 	$(this).children('.column').each(function(i){$(this).addClass('sixcol')}); // 2 cols, each 6 units wide
								$(this).children('.column').last().addClass('last');
								break;
					case 3: 	$(this).children('.column').each(function(i){$(this).addClass('fourcol')}); // 3 cols, each 4 units wide
								$(this).children('.column').last().addClass('last');
								break;
					case 4: 	$(this).children('.column').each(function(i){$(this).addClass('threecol')}); // 4 cols, each 3 units wide
								$(this).children('.column').last().addClass('last');
								break;
					case 6: 	$(this).children('.column').each(function(i){$(this).addClass('twocol')}); // 6 cols, each 2 units wide
								$(this).children('.column').last().addClass('last');
								break;
					case 12: 	$(this).children('.column').each(function(i){$(this).addClass('onecol')}); // 12 cols, each 1 units wide
								$(this).children('.column').last().addClass('last');
								break;
					default: jQuery.noop(); // No columns or uneven columns; do nothing
				}
			});
		}
		// Set the correct classnames for unevenly-sized columns, given the correct unit width of the columns.
		// Input - unique container ID selector, unit width parameters (integers, must add up to 12 units total)
		// Action - sets column names with given unit widths
		jQuery.fn.unevenSized = function(){
			args = arguments;
			var argument_count = args.length;
			$(this).each(function(j){
				var container_children_count = $(this).children('.column').length;
				if (argument_count == container_children_count) { // Check if the number of arguments match up with the number of columns
					$(this).children('.column').each(function(i){
						classname = unitWidthClassname(args[i]);
						$(this).addClass(classname);
					});
					$(this).children('.column').last().addClass('last');
				} else {
					// User error, mismatched column/argument count; do nothing
				}
			});
		}
	})
}(jQuery));
