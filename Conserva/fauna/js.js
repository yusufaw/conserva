var fauna;
var urlimg = 'http://konservasialam.hol.es/server/images/';
var nama;
var url = 'http://konservasialam.hol.es/server/server.php';
var gambar;
var keterangan;
var lStorage="";

$(function(){
	var data="id=3";
	var a = "";
	
	$.get(
		url,
		data
	).done(function(result){
		fauna = JSON.stringify(result);
		
		for(var i = 0; i < result.length; i++) {
			a = "<li><a href=# onclick=detail('" + i + "')><h3>"+result[i].nama+"</h3></a>"+"<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+result[i].nama_ilmiah+"<br>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+result[i].asal+"</p></li>";
			$('#ulFauna').append(a);
		}
		$('ul').listview('refresh');
	}).fail(function(){
		$('#ulFauna').html('<center>Tidak dapat terhubung ke server</center>');
	});
});

function detail(x){
    lStorage = JSON.parse(fauna);
       
    head = "<h3><center>"+lStorage[x]["nama"]+"</center></h3><br><center><img src=" + urlimg + "fauna/" + lStorage[x].gambar + " height=20% width=80% align=center><br><br></center>"+lStorage[x].keterangan+"<br>";
    $('#detail_fauna').html(head);
    
    $.mobile.changePage($("#detail"));	
}

