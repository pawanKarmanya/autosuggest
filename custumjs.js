$(document).ready(function () {
    
    $("#suggest").keyup(function(){
       
        var search_term=$(this).val();
        
        $.post('submit.php',{search_term:search_term},function(data){
            $(".result").html(data);
            $(".result li").click(function(){
               var value=$(this).text();
               $("#suggest").val(value);
               $(".result").html("");
            });
        });
        
        
    });
});