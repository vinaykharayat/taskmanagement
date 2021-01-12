var task;
var assignedTask = $("#assignedTask");
var completedTask = $("#completedTask");
document.querySelector("#taskAdd").addEventListener("click", function () {
    //storing input task in variable
    task = document.querySelector("#taskInput").value;
    //removing input
    document.querySelector("#taskInput").value = "";
    var entry = $('<li class="item"><input type="checkbox" class="checkBox"><span class="itemText">' + task + '</span><input type="text" class="editBox"><button class="edit" >Edit</button><button class="delete">Delete</button></li>');
    assignedTask.append(entry);
    $(".checkBox").click(function(){
        
        if($(this).is(":checked")){
            completedTask.append($(this).parent(".item"))
        }else {
            assignedTask.append($(this).parent(".item"))
        }  
    });
    $(".edit").click(function(){
        if($(this).parent(".item").find(".editBox").val()== ""){
            $(this).prev().val($(this).parent(".item").find(".itemText").text());
        }else{
            $(this).parent(".item").find(".itemText").text($(this).prev().val());
        }
    });
    $(".delete").click(function(){
        $(this).closest('.item').remove();
    });
});