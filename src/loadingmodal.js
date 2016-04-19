/**
 * Created by OvO on 16/4/19.
 */
(function (root, factory) {
    //amd
    if (typeof define === 'function' && define.amd) {
        define(['$'], factory);
    } else if (typeof exports === 'object') { //umd
        module.exports = factory();
    } else {
        root.loadingmodal = factory(window.Zepto || window.jQuery || $);
    }
})(this, function ($) {
    var loadingmodal = function (params) {
        params = params || {};
        this.loadingTpl = params.loadingTpl || this.loadingTpl;
        this.target = params.target || 'html';
        this.bindEvent();
    };
    loadingmodal.prototype = {
        version: '0.1.0',
        author: "OvO",
        defaults: {},
        loadingTpl: '<div class="loadingmodal"><div class="loadingmodal-mask"></div><i></i></div>',
        stop: function () {
            var content = $(this.target);
            this.loading.remove();
        },
        start: function () {
            var _this = this;
            var target = _this.target;
            var content = $(target);
            var loading = this.loading;
            if (!loading) {
                loading = $(_this.loadingTpl);
                $('body').append(loading);
            }
            this.loading = loading;
            var ch = $(content).outerHeight();
            var cw = $(content).outerWidth();
            if ($(target)[0].tagName == "HTML") {
                ch = Math.max($(target).height(), $(window).height());
                cw = Math.max($(target).width(), $(window).width());
            }
            //console.log(cw,ch)
            loading.height(ch).width(cw);
            loading.find('div').height(ch).width(cw);
            if (ch < 100) {
                loading.find('i').height(ch).width(ch);
            }
            var offset = $(content).offset();
            loading.css({
                top: offset.top,
                left: offset.left
            });
            var icon = loading.find('i');
            var h = ch,
                w = cw,
                top = 0,
                left = 0;
            if ($(target)[0].tagName == "HTML") {
                h = $(window).height();
                w = $(window).width();
                top = (h - icon.height()) / 2 + $(window).scrollTop();
                left = (w - icon.width()) / 2 + $(window).scrollLeft();

                $(window).resize(function () {
                    h = $(window).height();
                    w = $(window).width();
                    top = (h - icon.height()) / 2 + $(window).scrollTop();
                    left = (w - icon.width()) / 2 + $(window).scrollLeft();
                    icon.css({
                        top: top,
                        left: left
                    })
                    loading.height(h).width(w);
                    loading.find('div').height(h).width(w);
                });

            } else {
                top = (h - icon.height()) / 2;
                left = (w - icon.width()) / 2;
            }
            icon.css({
                top: top,
                left: left
            })


        },
        bindEvent: function () {
            var _this = this;
            $(this.target).on('stop', function () {
                _this.stop();
            });
        }
    }
    return loadingmodal;
});