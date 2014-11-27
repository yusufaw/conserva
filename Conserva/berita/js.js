var lStorage="";
var url = 'http://konservasialam.hol.es/server/server.php';

var urlimg ='http://konservasialam.hol.es/server/img/berita/'
$(function(){
	var data = "";
	data = 'id=1';
	var result = null;
	$('#content').append('clicked!<br>Loading: ' + url);
	$.get(url, data, 'json').done(function(result){
		console.log(result);
		lStorage = JSON.stringify(result);
		for(i = 0; i<result.length; i++) {
			var a = '<li><a onclick=ditel(' + i + ')><img src='+urlimg+result[i].gambar+'><h3>'+result[i].judul+'</h3><p>'+setTanggal(result[i].tanggal)+'</p></a></li>';
			$('#ulBerita').append(a);
		}
		$('ul').listview('refresh');
	}).fail(function(){
		$('#ulBerita').html('<center>Tidak dapat terhubung ke server</center>');
	});
	$('ul#ulBerita li').click(function() {
		alert($(this).id);
	});
});

function ditel(x) {   
    $("#detail").unbind().bind("pagebeforeshow", function()
	{
       lStorage=JSON.parse(lStorage);
	   head= "<center><h2>"+lStorage[x].judul+"</h2></center><br><p>"+setTanggal(lStorage[x].tanggal)+"</p><img src="+urlimg+lStorage[x].gambar+" width=100%><br><span>"+lStorage[x].isi+"</span><br>";
       $('#contentDitel').html(head).css("font-family", 'Helvetica,Arial,sans-serif'); 
    });
    $.mobile.changePage($("#detail"));
}

function setTanggal(x) {
	var hari = new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");
	var bulan = new Array("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember");
	var t = new Date(x);
	var hari_ini = hari[t.getDay()];
	var tanggal = t.getDate();
	var bulan_ini = bulan[t.getMonth()];
	var tahun = t.getFullYear();
	var jam = t.getHours();
	var menit = t.getMinutes();
	var detik = t.getSeconds();
	var a =""+hari_ini+", "+tanggal+" "+bulan_ini+" "+tahun;
	return a;
}
