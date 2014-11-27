
a = "";
b = "";
var nama;
var gambar;
var isi;
var lStorage="";
var url = 'http://konservasialam.hol.es/server/server.php';
var urlimg = 'http://konservasialam.hol.es/server/';
var data = "id=4";
$(function() {
   

    $.get(
            url,
            data
            ).done(function(result) {
			lStorage = JSON.stringify(result);
			for(var i=0;i<result.length;i++){

            a = "<li><a href=# onclick=ditel('" + i + "') > <h3>" + result[i].nama + "  " + "</h3><img src=" + urlimg + "images/" + result[i].gambar + " height=55% width=15%></p></a></li>";       
            $('#ulHabitat').append(a);
			}
			$('ul').listview('refresh');
    }).fail(function(){
		$('#ulHabitat').html('<center>Tidak dapat terhubung ke server</center>')
		});
});

function ditel(x) {
        console.log(JSON.parse(lStorage));
        lStorage=JSON.parse(lStorage);
        head= "<h2><center>Habitat "+lStorage[x]["nama"]+"</center<br><img src=" + urlimg + "images/" + lStorage[x].gambar + " height=20% width=90%><br>"+lStorage[x].isi+" </h2><br>";
        $('#contentDitel').html(head);
    $.mobile.changePage($("#detail"));
};

