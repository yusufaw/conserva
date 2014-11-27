<?php

header("Access-Control-Allow-Origin: *");

include ("config.php");
include ("model.php");

$data=new berita_model;
if($_GET['id'] == '1'){
	$berita=$data->getBerita();
	header('content-type:application/json');
	echo json_encode($berita);
}
else if($_GET['id'] == '5') {
	$kuis = $data->getKuis();
	header('content-type:application/json');
	echo json_encode($kuis);
}
else if($_GET['id'] == '7') {
	$jawaban = $data->getJawaban($_GET['idKuis']);
	header('content-type:application/json');
	echo json_encode($jawaban);
}
elseif($_GET['id']=='2'){
	$flora = new model;
	$data = $flora->getFlora();
	
	header('content-type:application/json');
	echo json_encode($data);
}
elseif($_GET['id']=='3'){
	$fauna = new model;
	$data = $fauna->getFauna();
	
	header('content-type:application/json');
	echo json_encode($data);
}else if ($_GET['id'] == '4') {
    $berita = new habitat_model;

    $data = $berita->getHabitat();
//$data["res"] ="berhasil";
//ec

    header('content-type:application/json');
    echo json_encode($data);
}else if ($_GET['id'] == '6') {
    $kamus = new kamus_model;

    $data = $kamus->getkamus();

    header('content-type:application/json');
    echo json_encode($data);
    
}