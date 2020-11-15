AJS.toInit(function ($) {

    $(".more-link-container .waiting-image").hide();
    $(".more-link").click(AJS.GetMoreHelper.createGetMoreRequestListener());

});
