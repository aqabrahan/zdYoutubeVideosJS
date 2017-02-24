let jQuery = require('jquery');

zdyoutube = (function ($) {
    var config = {
            url: 'https://www.googleapis.com/youtube/v3/search',
            part: 'id,snippet',
            maxResults: '10',
            channelId: 'UChA5PZa8HiDwETm1BMEv-7Q',
            type: 'video',
            fields: 'items,nextPageToken,prevPageToken,tokenPagination',
            key: 'AIzaSyBCHP3LRGYOKdhobFISD1Qp_GN6b1cSK3c',
            order: 'date'
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
        return config;
        /*console.log(url);

        $.ajax({
            dataType: 'json',
            url: url,
            data: '',
            method: "GET",
            success: function(resp){
                console.log(resp);
                if(resp.items.length) {

                }
            },
            error: function() {
                console.log('error');
            }
        });*/
    }

    return {
        getVideos: getVideos
    };

}(jQuery));

module.exports = zdyoutube;
