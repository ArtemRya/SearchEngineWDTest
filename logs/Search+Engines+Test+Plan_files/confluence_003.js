jQuery(function($) {
    AJS.thumbnailOverride = true;
    $("a.confluence-thumbnail-link").fancybox({
        padding: 0,
        zoomSpeedIn: 500,
        zoomSpeedOut: 500,
        overlayShow: true,
        overlayOpacity: 0.5
    });
});