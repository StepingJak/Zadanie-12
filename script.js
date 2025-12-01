$(document).ready(function(){
  
    $("p").parents().css("background-color", "lightgray");
    
    $("p").first().parent().css("background-color", "yellow");
  
    $("#inner").children().css("border", "1px dashed red");
  
    $("ul li").click(function(){
      $(this).siblings().css("background", "yellow");
      $(this).addClass("active").siblings().removeClass("active");
    });
  
    $("div").find("span").css("background-color", "red");
  
    $("div").find("a").attr("target", "_blank");
  
    $("#showParents").click(function(){
      let parents = $("#inner").first().parents().map(function(){
        return this.tagName.toLowerCase();
      }).get().join(", ");
      $("#output").text("Przodkowie diva: " + parents);
    });
  
    $("#showChildren").click(function(){
      let children = $("#inner").children().map(function(){
        return this.tagName.toLowerCase();
      }).get().join(", ");
      $("#output").text("Dzieci diva: " + children);
    });
  
  });
  