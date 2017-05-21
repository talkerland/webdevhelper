/*
 * jQuery Web Development Helper Plugin
 *
 * Author: Howard Chung <support@talkerland.com>
 * Website: https://www.talkerland.com
 * Version: v1.0.0
 * License: MIT
 * Last Update: 05/21/2017
 */

(function($){ 'use strict';

    // Initialize the global variables.
    var body = $('body');
    var isWindowResized = false;
    var initialContentHeight;

    // Default options of webDevHelper
    $.fn.webDevHelperDefaults = {
        isStickyFooterFixed: true
    };

    // Wrapper: Sticky footer function
    $.fn.isStickyFooter = function(args) {

        // Store the footer selector.
        var footer = this;

        // Set the options.
        var options = $.extend({},$.fn.webDevHelperDefaults,args);

        // Initialize the footer position.
        isStickyFooter(footer,options);

        // Update the footer position automatically when its window size get changed.
        $(window).resize(function(){
            isWindowResized = true;
            isStickyFooter(footer,options);
        });

        // Allow function chains.
        return this;

    };

    // Core: Sticky footer function
    function isStickyFooter(footer,options) {

        // Get the window height.
        var windowHeight = $(window).innerHeight();

        // Get the body height, including its margin.
        var bodyHeight = body.outerHeight(true);

        // Get the footer height, including its margin.
        var footerHeight = footer.outerHeight(true);

        // Estimate the total height of body contents.
        //
        // WARNING: Two test cases need to be checked.
        //
        // Case 1:
        // When a browser loads a page first time, the height of a body tag includes everything in the body tag.
        // However, when the browser window gets resized manually, the height of a footer tag, positioned at the
        // bottom of the window, will not be included in the height of a body tag anymore.
        //
        // Case 2:
        // When you change the height of a body tag by adding contents dynamically without resizing the window screen,
        // the previous symptom from Case 1 will not occur.
        var contentHeight;
        if(isWindowResized) {
            contentHeight = bodyHeight;
        } else {
            if(initialContentHeight === undefined) {
                contentHeight = bodyHeight - footerHeight;
                initialContentHeight = contentHeight;
            } else {
                contentHeight = bodyHeight;
            }
        }

        // Get the value of bottom property.
        var bottomValue = ((windowHeight-footerHeight) < contentHeight) ? 'auto' : 0;

        // Apply CSS properties to the body tag.
        body.css({
            marginBottom: options.isStickyFooterFixed ? footerHeight : 0
        });

        // Apply CSS properties to the footer container.
        footer.css({
            position: options.isStickyFooterFixed ? 'fixed' : 'absolute',
            bottom: options.isStickyFooterFixed ? 0 : bottomValue,
            left: 0,
            right: 0
        });

    }

}(jQuery));