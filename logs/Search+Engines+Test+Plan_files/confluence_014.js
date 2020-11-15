AJS.GetMoreHelper = (function ($) {
    return {
        createGetMoreRequestListener: function() {
            return function(e) {
                var nextPageUrl = $(this).attr("href");
                var $moreLink = $(this);
                $parents = $moreLink.parents(".more-link-container").get();
                if ($parents.length == 0)
                    return;
                $moreLinkContainer = $($parents[0]);
                $(".waiting-image", $moreLinkContainer).show();
                $moreLink.hide();
                $.get(nextPageUrl, function (data) {
                    $context = $(data);
                    $moreLinkContainer.replaceWith($context);
                    $(".waiting-image", $context).hide();
                    $(".more-link", $context).click(AJS.GetMoreHelper.createGetMoreRequestListener());
                });
                return AJS.stopEvent(e);
            };
        }
    };
})(AJS.$);