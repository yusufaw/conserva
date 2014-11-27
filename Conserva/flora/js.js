var flora;
var urlimg = 'http://konservasialam.hol.es/server/images/';
var nama;
var gambar;
var keterangan;
var lStorage="";


$(function(){
	var url = 'http://konservasialam.hol.es/server/server.php';
	var data="id=2";
	var a = "";

	$.get(
		url,
		data
	).done(function(result){
		flora = JSON.stringify(result);
		for(var i = 0; i < result.length; i+=2) {
			a += "<li><a href=# onclick=detail('" + i + "')><h3>"+result[i].nama+"</h3></a>"+"<p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+result[i].nama_ilmiah+"<br>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+result[i].asal+"</p></li>";
			$('#ulFlora').html(a);
		}
		$('ul').listview('refresh');
	}).fail(function(){
		$('#ulFlora').html('<center>Tidak dapat terhubung ke server</center>');
	});
});

function detail(x){
    lStorage = JSON.parse(flora);
       
    head = "<h3><center>"+lStorage[x]["nama"]+"</center></h3><br><center><img src=" + urlimg + "flora/" + lStorage[x].gambar + " height=20% width=70%><br><br></center><p>"+lStorage[x].keterangan+"</p><br>";
    $('#detail_flora').html(head);
    
    $.mobile.changePage($("#detail"));	
}

