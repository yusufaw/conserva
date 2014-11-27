var urlimg ='http://konservasialam.hol.es/server/img/kuis/';
var pilihan = new Array();
var nilai=0;
$(function(){
	$('#mulai').click(function(){
		$('#awalKuis').hide('fast');
		var url = 'http://konservasialam.hol.es/server/server.php';
		var data = "";
		data = 'id=5';
		$('#content').append('clicked!<br>Loading: ' + url);
		$.get(url, data).done(function(result){
			var res='';
			if(result[0].benar == '1'){
				res = result[0].jawaban_a;
			}
			else if(result[0].benar == '2'){
				res = result[0].jawaban_b;
			}
			else if(result[0].benar == '3'){
				res = result[0].jawaban_c;
			}
			else if(result[0].benar == '4'){
				res = result[0].jawaban_d;
			}
	
			var a = '<h2>'+result[0].pertanyaan+'</h2><img width=100% src='+urlimg+result[0].gambar+'><br><fieldset data-role=controlgroup><legend>Pilihan jawaban:</legend><input type=radio name=radio-choice id=radio-choice-1 value=1/><label for=radio-choice-1>'+result[0].jawaban_a+'</label><input type=radio name=radio-choice id=radio-choice-2 value=2  /><label for=radio-choice-2>'+result[0].jawaban_b+'</label><input type=radio name=radio-choice id=radio-choice-3 value=3  /><label for=radio-choice-3>'+result[0].jawaban_c+'</label><input type=radio name=radio-choice id=radio-choice-4 value=4  /><label for=radio-choice-4>'+result[0].jawaban_d+'</label></fieldset><br><br><br><input type=button value=Lanjut id=lanjut1>';
			$('#kuisBox').append(a).trigger("create");
			
			$('#lanjut1').click(function(){
				pilihan[0]= $("input:radio[name='radio-choice']:checked").val();
				if(pilihan[0] == result[0].benar){
					a = '<img src=true.png width=100%><br><center><h2>Jawaban Anda benar</h2></center><br><input type=button value=OK id=ok1>';
					$('#kuisBox').html(a).trigger("create");
				}
				else{
					a = '<img src=false.png width=100%><br><center><h2>Jawaban Anda salah</h2><br>Jawaban yang benar adalah <b>'+res+'</b><br></center><input type=button value=OK id=ok1>';
					$('#kuisBox').html(a).trigger("create");
				}
				
				$('#ok1').click(function(){
					a = '<h2>'+result[1].pertanyaan+'</h2><img width=100% src='+urlimg+result[1].gambar+'><br><fieldset data-role=controlgroup><legend>Pilihan jawaban:</legend><input type=radio name=radio-choice id=radio-choice-1 value=1 /><label for=radio-choice-1>'+result[1].jawaban_a+'</label><input type=radio name=radio-choice id=radio-choice-2 value=2  /><label for=radio-choice-2>'+result[1].jawaban_b+'</label><input type=radio name=radio-choice id=radio-choice-3 value=3  /><label for=radio-choice-3>'+result[1].jawaban_c+'</label><input type=radio name=radio-choice id=radio-choice-4 value=4  /><label for=radio-choice-4>'+result[1].jawaban_d+'</label></fieldset><br><br><br><input type=button value=Lanjut id=lanjut2>';
					$('#kuisBox').html(a).trigger("create");
					$('#lanjut2').click(function(){
						if(result[1].benar == '1'){
							res = result[1].jawaban_a;
						}
						else if(result[1].benar == '2'){
							res = result[1].jawaban_b;
						}
						else if(result[1].benar == '3'){
							res = result[1].jawaban_c;
						}
						else if(result[1].benar == '4'){
							res = result[1].jawaban_d;
						}
						pilihan[1]= $("input:radio[name='radio-choice']:checked").val();
						if(pilihan[1] == result[1].benar){
							a = '<img src=true.png width=100%><br><center><h2>Jawaban Anda benar</h2></center><br><input type=button value=OK id=ok2>';
							$('#kuisBox').html(a).trigger("create");
						}	
						else{
							a = '<img src=false.png width=100%><br><center><h2>Jawaban Anda salah</h2><br>Jawaban yang benar adalah <b>'+res+'</b><br></center><input type=button value=OK id=ok2>';
							$('#kuisBox').html(a).trigger("create");
						}
						
						$('#ok2').click(function(){
							a = '<h2>'+result[2].pertanyaan+'</h2><img width=100% src='+urlimg+result[2].gambar+'><br><fieldset data-role=controlgroup><legend>Pilihan jawaban:</legend><input type=radio name=radio-choice id=radio-choice-1 value=1 /><label for=radio-choice-1>'+result[2].jawaban_a+'</label><input type=radio name=radio-choice id=radio-choice-2 value=2  /><label for=radio-choice-2>'+result[2].jawaban_b+'</label><input type=radio name=radio-choice id=radio-choice-3 value=3  /><label for=radio-choice-3>'+result[2].jawaban_c+'</label><input type=radio name=radio-choice id=radio-choice-4 value=4  /><label for=radio-choice-4>'+result[2].jawaban_d+'</label></fieldset><br><br><br><input type=button value=Lanjut id=lanjut3>';
							$('#kuisBox').html(a).trigger("create");
			
							$('#lanjut3').click(function(){
								if(result[2].benar == '1'){
									res = result[2].jawaban_a;
								}
								else if(result[2].benar == '2'){
									res = result[2].jawaban_b;
								}
								else if(result[2].benar == '3'){
									res = result[2].jawaban_c;
								}
								else if(result[2].benar == '4'){
									res = result[2].jawaban_d;
								}
								pilihan[2]= $("input:radio[name='radio-choice']:checked").val();
								if(pilihan[2] == result[2].benar){
									a = '<img src=true.png width=100%><br><center><h2>Jawaban Anda benar</h2></center><br><input type=button value=OK id=ok3>';
									$('#kuisBox').html(a).trigger("create");
								}	
								else{
									a = '<img src=false.png width=100%><br><center><h2>Jawaban Anda salah</h2><br>Jawaban yang benar adalah <b>'+res+'</b><br></center><input type=button value=OK id=ok3>';
									$('#kuisBox').html(a).trigger("create");
								}	
								
								$('#ok3').click(function(){
									if(pilihan[0] == result[0].benar){
										nilai++;
									}
									if(pilihan[1] == result[1].benar){
										nilai++;
									}
									if(pilihan[2] == result[2].benar){
										nilai++;
									}
									a = '<center><h2>Hasil</h2>Score Anda adalah <h1>'+nilai+'</h1></center>';
									$('#kuisBox').html(a).trigger("create");	
								});
							});
						});
					});
				});
			});
		}).fail(function(){
			$('#kuisBox').html('<center>Tidak dapat terhubung ke server</center>');
		});
	
	});
});

