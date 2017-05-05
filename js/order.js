// JavaScript Document
// Init the public variables.
var flavor = "Black";
var sweetness = "75%";
var teaType = "Milk tea";
var temperature = "Iced/standard";
var ingredient = "Boba (tapioca)";
$(document).ready(function() {
	if($(window).width()<1200){
	$(".badge").before("<br>")
	}
$(window).on("resize",function(){
if($(window).width()<1200){
	$('.swal-btn br').remove()
	$(".badge").before("<br>")
	}
else{
	$('.swal-btn br').remove()
	}
	})
// Each of the order buttons has class of swal-btn when clicked they run the following: 
$(".swal-btn").on("click", function() {
setTimeout(function(){
	
	$(":checkbox, :input").each(function(){
$(this).labelauty({
    checked_label: $(this).val(),
    unchecked_label: $(this).val()
});
})


},100)
var catagory =  "";
var catagoryHTML = "";
var afterConfirm = "";
var catagoryTitle = "";
var temperature = "75%"
catagory = $(this).data("id");

if (catagory=="sweetness"){	
catagoryTitle = "Sweetness"
afterConfirm = function(){
	    $("."+catagory+" input").each(function() {
		if ($(this)[0].checked) {
		$("#"+catagory+"").html($(this).val())
		sweetness = $(this).val();
		}
		});// If checked
		};// AfterConfirm
catagoryHTML = '<div style="text-align:left;padding-left:30%"><form class='+catagory+' action='+catagory+'><input type="radio" name='+catagory+' value="Extra sweet"><input checked="checked" type="radio" name='+catagory+' value="Standard sweetness"><input type="radio" name='+catagory+' value="Half sweet"><input type="radio" name='+catagory+' value="Less sweet"><input type="radio" name='+catagory+' value="Unsweetened"></form></div>';
}
//if sweetness

if (catagory=="tea"){	
catagoryTitle = "Type of tea"
afterConfirm = function(){
	    $("."+catagory+" input").each(function() {
		if ($(this)[0].checked) {
		$("#"+catagory+"").html($(this).val())
		teaType = $(this).val();
		}
		});// If checked
		};// AfterConfirm
catagoryHTML = '<div style="text-align:left;padding-left:30%"><form class='+catagory+' action='+catagory+'><input type="radio" name='+catagory+' value="Flavor tea"><input type="radio" name='+catagory+' value="Herbal tea"><input type="radio" name='+catagory+' value="Sea salt foam"><input type="radio" checked="checked" name='+catagory+' value="Milk tea"><input type="radio" name='+catagory+' value="Soy milk tea"></form></div>';
}
//if tea type

if (catagory=="temperature"){	
catagoryTitle = "Temperature"
afterConfirm = function(){
	    $("."+catagory+" input").each(function() {
		if ($(this)[0].checked) {
		$("#"+catagory+"").html($(this).val())
		temperature = $(this).val();
		}
		});// If checked
		};// AfterConfirm
catagoryHTML = '<div style="text-align:left;padding-left:30%"><form class='+catagory+' action='+catagory+'><input checked="checked" type="radio" name='+catagory+' value="Iced/standard"><input type="radio" name='+catagory+' value="Snow/Slush"><input type="radio" name='+catagory+' value="Yogurt snow"><input type="radio"  name='+catagory+' value="Hot"></form></div>';
}
//if temperature

if (catagory=="ingredients"){	
catagoryTitle = "Ingredients"
afterConfirm = function(){
	    $("."+catagory+" input").each(function() {
		if ($(this)[0].checked) {
		$("#"+catagory+"").html($(this).val())
		ingredient = $(this).val();
		}
		});// If checked
		};// AfterConfirm
catagoryHTML = '<div style="text-align:left;padding-left:30%"><form class='+catagory+' action='+catagory+'><input checked="checked" type="radio" name='+catagory+' value="Boba (tapioca)"><input type="radio" name='+catagory+' value="Coffee jelly"><input type="radio" name='+catagory+' value="Mango jelly"><input type="radio"  name='+catagory+' value="Passion fruit (popping boba)"><input type="radio"  name='+catagory+' value="Pomegranate (popping boba)"><input type="radio"  name='+catagory+' value="Yogurt (popping boba)"><br></form></div>';
}
//if temperature

if (catagory=="flavor"){	
catagoryTitle = "Flavor"
flavor=[]
afterConfirm = function(){
	    $("."+catagory+" input").each(function() {
		if ($(this)[0].checked) {
		$("#"+catagory+"").html($(this).val())
		flavor.push($(this).val());
		if(flavor.length>1){
			$("#"+catagory+"").html("Mixed")
			}
		}
		});// If checked
		};// AfterConfirm
catagoryHTML = '<div style="text-align:left;padding-left:30%"><form class='+catagory+' action='+catagory+'><input type="checkbox" class="float-left" name="flavor-1" value="Black"><input type="checkbox" class="float-left" name="flavor-2" value="Almond"><input type="checkbox" class="float-left" name="sd" value="Banana"><input type="checkbox" class="float-left"  name="flavor-3" value="Caramel"><input type="checkbox" class="float-left"  name="flavor-4" value="Chocolate"><input type="checkbox" class="float-left"  name="flavor-5" value="Coconut"><input type="checkbox" class="float-left"  name="flavor-6" value="Genmai-cha"><input type="checkbox" class="float-left"  name="flavor-7" value="Ginger"><input type="checkbox" class="float-left"  name="flavor-8" value="Golden"><input type="checkbox" class="float-left"  name="flavor-9" value="Grass jelly"><input type="checkbox" class="float-left"  name="flavor-10" value="Green"><input type="checkbox" class="float-left"  name="flavor-11" value="Green Apple"><input type="checkbox" class="float-left"  name="flavor-12" value="Honey"><input type="checkbox" class="float-left"  name="flavor-13" value="Honeydew"><input type="checkbox" class="float-left"  name="flavor-14" value="Kiwi"><input type="checkbox" class="float-left"  name="flavor-15" value="Kumquat"><input type="checkbox" class="float-left"  name="flavor-16" value="Lychee"><input type="checkbox" class="float-left"  name="flavor-17" value="Lemon"><input type="checkbox" class="float-left"  name="flavor-18" value="Mango"><input type="checkbox" class="float-left"  name="flavor-19" value="Passion fruit"><input type="checkbox" class="float-left"  name="flavor-20" value="Peach"><input type="checkbox" class="float-left"  name="flavor-21" value="Red bean"><input type="checkbox" class="float-left"  name="flavor-22" value="Strawberry"><input type="checkbox" class="float-left"  name="flavor-23" value="Taro"><input type="checkbox" class="float-left"  name="flavor-24" value="Thai"><input type="checkbox" class="float-left"  name="flavor-25" value="Vanilla"></form></div><script>test</script>';
}
//if temperature


//swal popup opens
        swal({
			// Make the catagory the same as the data id.
            title: catagoryTitle,
			// Make the html the same as catagoryHTML.
            html: catagoryHTML
			// When the confirm button is clicked run the following:
        }, function(isConfirm) {
			// This function depends on what button was clicked
			afterConfirm();
        });// On confirm
   
   
    });//swal-btn on click
//------------------------Submit on click

$(".order-submit")
    .on("click", function() {
        swal({
                title: "Final order",
                html: '<div class="col-md-12" style="text-align:left"><ul class="list-group"><li class="list-group-item"><span class="badge">Flavor</span>' +
                    flavor +
                    '</li><li class="list-group-item"><span class="badge">Sweetness</span>' +
                    sweetness +
                    '</li><li class="list-group-item"><span class="badge">Type</span>' +
                    teaType +
                    '</li><li class="list-group-item"><span class="badge">Temperature</span>' +
                    temperature +
                    '</li><li class="list-group-item"><span class="badge">ingredients</span>' +
                    ingredient +
                    '</li><li class="list-group-item"><span class="badge">Instructions</span>' +
                    $("#inputPassword3")
                    .val() + '</li></ul></div>',
                confirmButtonText: "Submit order"

            }) //swal

    }) //order on click

});//ready