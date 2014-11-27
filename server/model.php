<?PHP

header("Access-Control-Allow-Origin: *");
class berita_model{
	$data[]=array();
	function __construct(){
		include "config.php";
	}
		
	public function getBerita(){
		
		$sql = mysql_query("SELECT * from berita order by tanggal desc")or die ("gagal");
		while($row=mysql_fetch_array($sql)){
                   $data[]=$row
          }
	return $row;
	}
	
	public function getKuis(){
		$sql = mysql_query("SELECT * from kuis");
		while($row=mysql_fetch_array($sql)){
                   $data[]=$row;
          }
		  $random_keys=array_rand($data,3);
		  $dataKuis[]=$data[$random_keys[0]];
		  $dataKuis[]=$data[$random_keys[1]];
		  $dataKuis[]=$data[$random_keys[2]];
		  //$dataKuis = "berhasil";
		return $dataKuis;
	}
	public function getJawaban($id_kuis){
		$sql = mysql_query("SELECT benar from kuis where id_kuis = '$id_kuis'");
		  return $sql;
	}
}
class model{
	function __construct(){
		include "config.php";
	}
		
	public function getBerita(){
		$sql = mysql_query("SELECT *from berita") or die ("gagal");
		while($row = mysql_fetch_array($sql)){
            $data[] = $row;
            //array_push($data,$row);
        }
		return $data;
	}
	
	public function getFlora(){
		$sql = mysql_query("SELECT * from flora") or die ("gagal");
		while($row = mysql_fetch_array($sql)){
			$data[] = $row;
			//array_push($data,$row);
		}
		return $data;
	}
	
	public function getFauna(){
		$sql = mysql_query("SELECT * from fauna") or die ("gagal");
		while($row = mysql_fetch_array($sql)){
			//$data[] = $row;
			array_push($data,$row);
		}
		return $data;
	}
       
}
class habitat_model{
	function __construct(){
		include "config.php";
	}
		
	public function getHabitat(){
		
		$sql = mysql_query("SELECT *from habitat")or die ("gagal");
		while($row=mysql_fetch_array($sql)){
                   $data[]=$row;
                   //array_push($data,$row);
                }
		return $data;
	}
       
}	
class kamus_model{
	function __construct(){
		include "config.php";
	}
		
	public function getKamus(){
		
		$sql = mysql_query("SELECT *from kamus ")or die ("gagal");
		while($row=mysql_fetch_array($sql)){
                   $data[]=$row;
               //     array_push($data,$row);
                }
		return $data;
	}
       
}
	


?>