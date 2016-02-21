function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var item = content[getRandomInt(0,content.length)];
switch (item.type){
    case 'youtube':
        var link = item.url.replace('/','').substr(item.url.replace('/','').length - 11);
        $('#video').attr('src', 'http://www.youtube.com/embed/' + link + '?autoplay=1');
        break;
    case 'streamable':
        var link = item.url.replace('/','').substr(item.url.replace('/','').length - 4);
        $('#video').attr('src', 'https://streamable.com/e/'+link+'?autoplay=1');
        break;
}







$('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
$(window).resize(function(){
    $('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
});


