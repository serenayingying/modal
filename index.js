$(function () {
    //control the modal-cover display
    var toggles = $('[data-toggle = modal-btn]');
    toggles.on('click', function (e) {
        var targetId = $(this).attr('data-target');
        var targetModal = $('#' + targetId);
        targetModal.css('display', 'block');
    });

     //control the modal disappear
     //在 modal-cover上 添加点击事件监听,让modal 消失
     $('.modal-cover').on('click',function(){
         $(this).css('display','none');
     });

     //在modal-content上添加阻止事件
     $('.modal-content').on('click',function(e){
         e.stopPropagation();
     });
});
