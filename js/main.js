// var opt = {
//     animation : true
// };
// var myTooltipEl = document.getElementById('myTooltip')
// var tooltip = new bootstrap.Tooltip(myTooltipEl, opt);

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// })

$(document).ready(function (){
    $('[data-toggle="tooltip"]').tooltip({
        placement:"bottom"
    })
});

