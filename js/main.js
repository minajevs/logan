function sorter(a,b) {
    if (a.title < b.title)
        return -1;
    else if (a.title > b.title)
        return 1;
    else
        return 0;
}
content.sort(sorter);

var i = 0;
for(i; i < content.length; i++){
    addItemToPage(content[i]);
}


function addItemToPage(item){
    var string;
    switch (item.type){
        case 'picture':
            string = generatePictureItem(item);
            break;
        case 'streamable':
            string = generateStreamableItem(item);
            break;
        case 'youtube':
            string = generateYoutubeItem(item);
            break;
    }
    $("#list").append(string);
}

function generateYoutubeItem(item){
    var link = item.url.replace('/','').substr(item.url.replace('/','').length - 11);
    var preview = 'http://img.youtube.com/vi/' + link + '/0.jpg';
    var li = [
        '<li class="col-lg-2 col-md-2 col-sm-3 col-xs-4">',
            '<img class="img-responsive" src="',preview,'" data-type="',item.type,'" data-link="',link,'">',
            '<h4>',item.title,'</h4>',
        '</li>'
    ];
    return li.join('');
}

function generatePictureItem(item){
    var li = [
      '<li class="col-lg-2 col-md-2 col-sm-3 col-xs-4">',
        '<img class="img-responsive" src="',item.url,'" data-type="',item.type,'">',
      '</li>'
    ];
    return li.join('');
}

function generateStreamableItem(item){
    var link = item.url.replace('/','').substr(item.url.replace('/','').length - 4);
    var preview = 'http://cdn.streamable.com/image/' + link + '_first.jpg';
    var li = [
        '<li class="col-lg-2 col-md-2 col-sm-3 col-xs-4">',
            '<img class="img-responsive" src="',preview,'" data-type="',item.type,'" data-link="',link,'">',
            '<h4>',item.title,'</h4>',
        '</li>'
    ];
    return li.join('');
}
