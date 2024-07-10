var rectangle=document.querySelector("#center");

rectangle.addEventListener("mousemove",function(details){
    // console.log("inside");
    var rectangleLoaction=rectangle.getBoundingClientRect();
    var rectangleInsideval=details.clientX - rectangleLoaction.left;
    // console.log(rectangleInsideval);
    if(rectangleInsideval<rectangleLoaction.width/2){
        // console.log("left");
       var rectRedColor=gsap.utils.mapRange(0,rectangleLoaction.width/2,255,0,rectangleInsideval);
       gsap.to(rectangle,{
        backgroundColor:`rgb(${rectRedColor},0,0)`,
        ease:Power4,
       });
    }
    else{
        // console.log("right");
        var rectBlueColor=gsap.utils.mapRange(rectangleLoaction.width/2,rectangleLoaction.width,0,255,rectangleInsideval);
        gsap.to(rectangle,{
         backgroundColor:`rgb(0,0,${rectBlueColor})`,
         ease:Power4,
        });
    }
})

rectangle.addEventListener("mouseleave",()=>{
    gsap.to(rectangle,{
        backgroundColor:"white"
    })
})