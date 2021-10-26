function onExitClick(event) { ExitFunc(); }

function BuyHouseClick(event)
{
	cef.emit("HouseInfo:Buy");
	ExitFunc();
}
function EnterHouseClick(event)
{
	cef.emit("HouseInfo:Enter");
	ExitFunc();
}

function CheckAdminPass(event)
{
	let apass = "9999";
	let inputpassword = document.getElementById('inputApass').value;
	if(inputpassword == apass)
	{
		ExitFunc();
		cef.emit("Admins:logined");
	}
}

function ExitFunc() 
{
	document.querySelector('#dialog').classList.add('hidenttrue');
	document.querySelector('#IDbuyhouse').classList.add('hidenttrue'); // Скрыть покупку дома
	document.querySelector('#IDenterhouse').classList.add('hidenttrue'); // Скрыть вход в дом
	document.querySelector('#IDAdminLogin').classList.add('hidenttrue');
	document.querySelector('#IDWorkFillingHouse').classList.add('hidenttrue');

	cef.set_focus(false); 
	//cef.hide(true); 
}


// AlertsFunction

function GetAlert(type,text)
{
	let imgurl;
	switch(type)
	{
		case 1:
			imgurl = 'Infoico.png';
			break;
		case 2:
			imgurl = 'TryIco.png';
			break;
		case 3:
			imgurl = 'Erroico.png';
			break;
	}

	var $item = $('<div class="InfoAlert"><img src="image/'+imgurl+'"><p>'+text+'</p></div>');
	$item.appendTo($('.Alerts')).delay(5000).slideUp(200, function(){
		$item.remove();
	});
}