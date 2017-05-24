$(document).ready(function(){

$.ajax({
        async:true,
        url: 'drinksofthemonth.txt',
        dataType: 'text',
        success: function(data) 
        {
        
            months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
            
            
            data = data.replace(/^/gm, "<div class='col-md-4'><h4>").replace(/$/gm, "</h4></div>").replace(/<div class='col-md-4'><h4><\/h4><\/div>\n/gm, "");
            $('.monthFlavors').html("Flavors of the Month : "+ months[new Date().getMonth()]);
            $('.drinksofthemonth').html(data);
            }
        });

})