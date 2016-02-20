# zdYoutubeVideosJS
Get youtube's videos from a channel

https://www.googleapis.com/youtube/v3/search?part=id,snippet&maxResults=2&channelId=UChA5PZa8HiDwETm1BMEv-7Q&type=video&fields=items,nextPageToken,prevPageToken,tokenPagination&key=AIzaSyBCHP3LRGYOKdhobFISD1Qp_GN6b1cSK3c

&maxResults=2
&pageToken=

&order={
	date: Los recursos se ordenan en forma cronológica inversa, según la fecha en que se crearon.
	rating: Los recursos se ordenan de mayor a menor calificación.
	relevance: Los recursos se ordenan según su relevancia para la consulta de búsqueda. Este es el valor predeterminado de este parámetro.
	title: Los recursos se ordenan alfabéticamente por título.
	videoCount: Los canales se ordenan en forma descendente, según el número de videos subidos.
	viewCount: Los recursos se ordenan de mayor a menor, según el número de reproducciones.
}

fields: items,nextPageToken,pageInfo,prevPageToken,tokenPagination
	{
		pageInfo: info de paginacio ejemplo: totalResults: 5,resultsPerPage: 2},
	}
https://developers.google.com/youtube/v3/docs/search/list?hl=es
