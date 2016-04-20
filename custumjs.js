$(document).ready(function () {
    
    $("#suggest").keyup(function(){
       
        var search_term=$(this).val();
        
        $.post('submit.php',{search_term:search_term},function(data){
            $(".result").html(data);
            
        });
        
        
    });
});