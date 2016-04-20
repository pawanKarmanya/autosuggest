<?php
$Link=mysqli_connect("localhost","dbuser","123","form");

$search=$_POST['search_term'];
if($search!=""){
$query="select * from autosuggest where city like '$search%'";
$result=  mysqli_query($Link, $query);
while ($row = mysqli_fetch_assoc($result)) {
    
 
    echo '<li>',$row['city'],'</li>';   
}

}
?>