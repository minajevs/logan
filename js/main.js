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
    }



    $("#list").append(string);
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
        '</li>'
    ];
    return li.join('');
}