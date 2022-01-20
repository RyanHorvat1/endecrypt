$('.btn-copy').tooltip({
    trigger: 'click',
    placement: 'bottom'
});

function setTooltip(btn, message) {
    btn.tooltip('hide')
        .attr('data-original-title', message)
}

function hideTooltip(btn) {
    btn.tooltip('show');
    setTimeout(btn.tooltip('hide'), 1000);
}

var clipboard = new Clipboard('.output');

clipboard.on('success', function(e) {
    var btn = $(e.trigger);
    setTooltip(btn, 'Copied');
    hideTooltip(btn);
});