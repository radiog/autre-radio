FrapFlux = {
	
	id: 'lautreradio',
	nom: 'L\'Autre Radio',
	racine: 'http://lautreradio.fr',
	//http://80.82.229.202/sun.aac
	mp3_direct: {
	    hifi: 'http://80.82.229.202:8000/lautredirect.mp3',
	    lofi: 'http://80.82.229.202:8000/lautredirect.mp3'
	},	
	mp3_ts: 'http://80.82.229.202/.mp3?date=%HMS%',
	mp3_racine_podcast : '/home/www/lautreradio/sites/defaut/files/podcasts',
	
	ws_meta_direct: 'http://lautreradio.fr/block_now/nodes.json',
	ws_podcasts: 'http://lautreradio.fr/services/views/services.json',
	//ws_video: 'https://api.dailymotion.com/playlist/x231ha_lesonunique_playlist-player/videos&fields=thumbnail_medium_url,id,title,channel,owner,embed_html,duration,views_total,url',
	
	facebook_url : 'https://www.facebook.com/lautreradio',
	twitter_msg: 'J\'écoute {url} #lautreradio #sunapp',
	telephone_std: '09 61 26 44 16',
	email_contact: 'auditeurs@lautreradio.fr',
	url_like: '',
	
	//url_dedicace: 'http://www.lesonunique.com/datasun/selection_auditeur/selection_date_jquery.php',
	url_contact: 'http://frap.jembe.fr/formulaire/send.php',

	destinataires : [
		{nom:'Bureau',mail:'bureau@lautreradio.fr'},
		{nom:'Programmation',mail:'prog@lautreradio.fr'},
		{nom:'Accueil',mail:'auditeurs@lautreradio.fr'}
	]
}