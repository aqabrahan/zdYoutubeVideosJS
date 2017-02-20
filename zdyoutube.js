videosYoutube = (function (window, $) {

    'use strict';
    var $view_videos,
        $faculty,
        config = {
            url: 'https://www.googleapis.com/youtube/v3/search',
            'part': 'id,snippet',
            maxResults: '10',
            channelId: 'UChA5PZa8HiDwETm1BMEv-7Q',
            type: 'video',
            fields: 'items,nextPageToken,prevPageToken,tokenPagination',
            key: 'AIzaSyBCHP3LRGYOKdhobFISD1Qp_GN6b1cSK3c',
            order: 'date'
        },
        iframe = {
            url: 'https://www.youtube.com/embed/',
            showinfo : false
        }

    function setUI() {
        $view_videos = $('.zd_view_videos');
    }

    function bindEvents() {
        //$university.on('change', getFaculties);
    }

    function getVideos() {
        var url = '',
            c = 0;
        $.each(config, function(j, k) {
            if (c === 0) {
                url += k + '?';
            } else {
                url += '&' + j + '=' + k;
            }
            c++;
        });
        console.log(url);
        $.ajax({
            dataType: 'json',
            url: url,
            data: '',
            method: "GET",
            success: function(resp){
                if(resp.items.length) {
                    $.each(resp.items, function (index, item) {
                        console.log(index, item);
                        var $link = $('<a/>', {
                            class: 'thumbnail',
                            'data-id': item.id.videoId,
                            href: '#',
                            click: onShowVideo
                        }).append($('<img/>',{
                            src: item.snippet.thumbnails.medium.url,
                            alt: item.snippet.title
                        }));
                        var $caption = $('<div/>',{
                            class: 'caption'
                        }).append($('<h3/>', {
                            text: item.snippet.title
                        })).append($('<p/>', {
                            text: item.snippet.description
                        }));
                        $link.append($caption);

                        var $item = $('<div/>', {
                            class: 'col-xs-6 col-md-3 col-xs-12 col-lg-3',
                        }).append($link);
                        $view_videos.find('.row').append($item);

                        if (index == 0) {
                            onPlayVideo(item.id.videoId, false);
                            /*var iframeUrl = iframe.url;

                            iframeUrl += item.id.videoId;
                            if (!iframe.showinfo) {
                                iframeUrl += '?showinfo=0'
                            }
                            console.log(iframeUrl)
                            $view_videos.find('.zd_video').removeClass('hidden').find('iframe').attr('src',iframeUrl);
                            */
                        }
                    });
                }
            },
            error: function() {
                console.log('error');
            }
        });
    }

    function onShowVideo(event) {
        event.preventDefault();
        var $el = $(event.currentTarget);
        console.log($el.data('id'));
        onPlayVideo($el.data('id'), true);
    }

    function onPlayVideo(videoId, autoplay) {
        var iframeUrl = iframe.url;

        iframeUrl += videoId;
        if (!iframe.showinfo) {
            iframeUrl += '?showinfo=0';
        }

        if (autoplay) {
            iframeUrl += '&autoplay=1';
        }

        console.log(iframeUrl)
        $view_videos.find('.zd_video').removeClass('hidden').find('iframe').attr('src',iframeUrl);
    }

    function init() {
        setUI();
        bindEvents();
        getVideos();
    }

    return {
        init: init
    };

}(window, jQuery));

videosYoutube.init();