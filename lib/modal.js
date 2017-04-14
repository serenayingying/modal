(function ($) {
    $(document).on('click', '.modal-demo-btn', function (e) {
        var $this = $(e.target);
        var $target  = $this.attr('data-target');
    });

    var Modal = function($target){
        this.target = $target;
    }

    Modal.prototype.show = function (target) {
        $('.modal-demo-btn').on('click', function () {
            var mymodal = $('#target');
            var op = mymodal.css('opacity');
            if (op == 0) {
                mymodal.css('opacity', 1);
                mymodal.addClass('mymodal-transition');
            } else {
                mymodal.css('opacity', 0);
            }
        });
    }

    Modal.prototype.hide = function (target) {
        $('.close-btn,.save-btn,.remove-circle, #modal-cover').on('click', function () {
            var mymodal = $('#target');
            var op = mymodal.css('opacity');
            if (op == 1) mymodal.css('opacity', 0);
        });
    }
    
})(jQuery);