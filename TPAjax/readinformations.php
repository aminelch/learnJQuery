<?php 

$handle=fopen("Formations.csv","r");

$result='';
while($line =fgets($handle)){
    $cols= explode(':',$line);
    $tds='';
    for ($i=0; $i <count($cols) ; $i++) { 
        $tds .=  "<td>". $cols[$i]. "</td>";  
    }
    $result.="<tr>".$tds."</tr>"; 
}

print $result; 
fclose($handle);
