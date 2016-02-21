$(document).ready(function(){        
	$('li img').on('click',function(){
		var src = $(this).attr('src');
		var type = $(this).data('type');

		switch (type){
			case 'picture':
				var string = '<img src="' + src + '" class="img-responsive"/>';
				break;
			case 'streamable':
				var string = '<div style="width: 100%; height: 0px; position: relative; padding-bottom: 75.000%;">' +
								'<iframe src="https://streamable.com/e/w6n4" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen scrolling="no" style="width: 100%; height: 100%; position: absolute;">' +
								'</iframe>' +
							 '</div>';
				break;


		}
		//start of new code new code
		var index = $(this).parent('li').index();

		var body = string;
		var controls = '';
			controls += '<div style="height:25px;clear:both;display:block;">';
			controls += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
			controls += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
			controls += '</div>';

		
		$('#myModal').modal();
		$('#myModal').on('shown.bs.modal', function(){
			$('#myModal .modal-body').html(body);
			$('#myModal .modal-controls').html(controls);

			$('a.controls').trigger('click');
		})
		$('#myModal').on('hidden.bs.modal', function(){
			$('#myModal .modal-body').html('');
		});
   });	
})
        
         
$(document).on('click', 'a.controls', function(){
	var index = $(this).attr('href');
	var src = $('ul.row li:nth-child('+ index +') img').attr('src');
	var type = $('ul.row li:nth-child('+ index +') img').data('type');


	switch (type){
		case 'picture':
			var string = '<img src="' + src + '" class="img-responsive"/>';
			break;
		case 'streamable':
			var link = $('ul.row li:nth-child('+ index +') img').data('link')
			var string = '<div style="width: 100%; height: 0px; position: relative; padding-bottom: 75.000%;">' +
					'<iframe src="https://streamable.com/e/'+ link + '" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen scrolling="no" style="width: 100%; height: 100%; position: absolute;">' +
					'</iframe>' +
					'</div>';
			break;
	}
	$('.modal-body').html(string);
	//$('.modal-body').attr('src', src);
	
	var newPrevIndex = parseInt(index) - 1; 
	var newNextIndex = parseInt(newPrevIndex) + 2; 
	
	if($(this).hasClass('previous')){               
		$(this).attr('href', newPrevIndex); 
		$('a.next').attr('href', newNextIndex);
	}else{
		$(this).attr('href', newNextIndex); 
		$('a.previous').attr('href', newPrevIndex);
	}
	
	var total = $('ul.row li').length + 1; 
	//hide next button
	if(total === newNextIndex){
		$('a.next').hide();
	}else{
		$('a.next').show()
	}            
	//hide previous button
	if(newPrevIndex === 0){
		$('a.previous').hide();
	}else{
		$('a.previous').show()
	}
	
	
	return false;
});