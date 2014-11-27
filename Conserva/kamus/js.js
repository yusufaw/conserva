kStorage="";
var url = 'http://konservasialam.hol.es/server/server.php';
$(function(){
	$(function() {	
		var data="id=6";
        var a="";
		$.get(
			url,
			data
			).done(function(result){
				kStorage = JSON.stringify(result);
                for(var i=0; i<result.length;i++){
                	$('#ulKamus').append(" <li><a href=# onclick=ditel('" + i + "') > "+result[i].kata+" </a></li>");
                 }
                 $("ul").listview('refresh');
			}).fail(function(){
				$('#ulKamus').html('<center>Tidak dapat terhubung ke server</center>');
		});
	});
});

function ditel(x){
	kStorage=JSON.parse(kStorage);
    console.log(kStorage[x]["kata"]);
    head= "<br><h2><center>"+kStorage[x]["kata"]+"</center> <br>"+kStorage[x]["keterangan"]+"</h2>";
    $('#contentDitel').html(head);
    $.mobile.changePage($("#detailKamus"));
}