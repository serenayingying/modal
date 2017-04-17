$(function () {
    // 1. 拿到所有包含 data-toggle="modal" 的元素
    var $toggles = $('[data-toggle="modal"]');
    // 2. 对每一个这样的元素,添加 click 事件监听器
    $toggles.on('click', function (e) {
        // 2.1 拿到被点击元素对应的 data-target
        var target = $(this).attr('data-target');
        // 2.2 拿到 data-target 对应的 modal 元素
        var $modal = $('#' + target);
        // 2.3 把对应的 modal 元素显示出来
        $modal.css('display', 'block');
    });

    // 1. 拿到所有的 class 为 modal 的元素
    var $modals = $('.modal');
    // 2. 给每一个这样的元素添加 click 事件监听器
    $modals.on('click', function (e) {
        // 2.1 把被点击的 modal 隐藏
        $(this).css('display', 'none');
    });

    var $contents = $('.content');
    $contents.on('click', function (e) {
        e.stopPropagation();
    });

});
