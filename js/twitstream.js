/*
 * TwitStream - A jQuery plugin for the Twitter Search API
 * Version 1.2
 * http://kjc-designs.com/TwitStream
 * Copyright (c) 2009 Noah Cooper
 * Licensed under the GNU General Public License <http://www.gnu.org/licenses/>
*/
String.prototype.linkify=function(){
	return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&;\?\/.=]+/g,function(m){
		return m.link(m);
	});
};
String.prototype.linkuser=function(){
	return this.replace(/[@]+[A-Za-z0-9-_]+/g,function(u){
		return u.link("http://twitter.com/"+u.replace("@",""));
	});
};
String.prototype.linktag=function(){
	return this.replace(/[]+[A-Za-z0-9-_]+/,function(t){
		return t;
	});
};
var showTweetLinks='none';
function fetch_tweets(elem){
	elem=$(elem);
	keyword=escape(elem.attr('title'));
	num=elem.attr('class').split(' ').slice(-1);
	var url="http://search.twitter.com/search.json?q="+keyword+"&rpp="+num+"&callback=?";
	$.getJSON(url,function(json){
		$(json.results).each(function(){
			var tTime=new Date(Date.parse(this.created_at));
			var cTime=new Date();
			var sinceMin=Math.round((cTime-tTime)/60000);
			if(sinceMin==0){
				var sinceSec=Math.round((cTime-tTime)/1000);
				if(sinceSec<10)
					var since='less than 10 seconds ago';
				else if(sinceSec<20)
					var since='less than 20 seconds ago';
				else
					var since='half a minute ago';
			}
			else if(sinceMin==1){
				var sinceSec=Math.round((cTime-tTime)/1000);
				if(sinceSec==30)
					var since='half a minute ago';
				else if(sinceSec<60)
					var since='less than a minute ago';
				else
					var since='1 minute ago';
			}
			else if(sinceMin<45)
				var since=sinceMin+' minutes ago';
			else if(sinceMin>44&&sinceMin<60)
				var since='about 1 hour ago';
			else if(sinceMin<1440){
				var sinceHr=Math.round(sinceMin/60);
				if(sinceHr==1)
					var since='about 1 hour ago';
				else
					var since='about '+sinceHr+' hours ago';
			}
			else if(sinceMin>1439&&sinceMin<2880)
				var since='1 day ago';
			else{
				var sinceDay=Math.round(sinceMin/1440);
				var since=sinceDay+' days ago';
			}
			var tweetBy='<a class="tweet-user" target="_blank" href="http://twitter.com/'+this.from_user+'">@'+this.from_user+'</a>';
			var tweet='<p><span class="author">'+tweetBy+'</span><span class="message">'+this.text.linkify().linkuser().linktag().replace(/<a/g,'<a target="_blank"')+'<span><span class="date">'+since+'</span></p>';
			elem.append(tweet);
		});
	});
	return(false);
}
$(function(){
	showTweetLinks=showTweetLinks.toLowerCase();
	if(showTweetLinks.indexOf('all')!=-1)
		showTweetLinks='reply,view,rt';
	$('.twitStream').each(function(){
		fetch_tweets(this);
	});
});