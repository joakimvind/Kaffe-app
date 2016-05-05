$(function () {
    $("#slider-range-min").slider({
        range: "min",
        value: 37,
        min:   30,
        max:   50,
        slide: function (event, ui) {
            $("#amount").val("$" + ui.value);
        }
    });
    $("#amount").val("$" + $("#slider-range-min").slider("value"));
});