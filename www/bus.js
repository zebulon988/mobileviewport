// $("#device").html(document.documentElement.clientWidth);
// $("#vitual").html(window.innerWidth);

// window.onresize = function(){
//     $("#device").html(document.documentElement.clientWidth);
//     $("#vitual").html(window.innerWidth);
// }

var ref = function(){
    $("#device").html(document.documentElement.clientWidth);
    $("#vitual").html(window.innerWidth);
}

var refdelay = function(){
    ref();
    setTimeout(function() {
        refdelay();
    }, 500);
}

refdelay();