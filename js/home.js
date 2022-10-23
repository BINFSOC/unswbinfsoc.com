

const debug = document.getElementById("debug");

//Body
const body = document.documentElement.getElementsByTagName("body")[0];
//Navigation
const nav = document.getElementById("navigation");
const searchBox = document.getElementById("search-box");

//Slideout menu

const slideout = document.getElementById("slideout-menu")
setTimeout(function(){slideout.style.visibility="hidden";},1000);

//scroll gradient response
const scrollGradientDown = document.getElementById("scroll-gradient-down");
const scrollGradientUp = document.getElementById("scroll-gradient-up");
//All custom banners

//Banner: logo w/ slideshow bg
const logo_div = document.getElementById("banner-logo");

const logo_heading = document.getElementById("banner-heading");

const logo = document.getElementById("rotate");
const logo_fp = document.getElementById("fp");
const logo_fp2 = document.getElementById("fp2");
const logo_fpGlow = document.getElementById("fp-glow");
const logo_fpGlow2 = document.getElementById("fp-glow2");
const logo_allPaths = document.documentElement.querySelectorAll("#path5");

const slideshow = document.getElementById("slideshow");
const slideshow_content = slideshow.children;




//Banner: What is binf? w/ protein bg

const banner_protein = document.getElementById("banner-protein");

const bg_protein = document.getElementById('bg-protein');
const bg_proteinFlipped = document.getElementById('bg-protein-flipped');
const bg_protein_horizon = document.getElementById('bg-protein-horizon');
const bg_protein_codeEffects = document.getElementById('code-effect');

const protein_header1 = document.getElementById("protein-header1");
const protein_header2 = document.getElementById("protein-header2");
const protein_link = document.getElementById("protein-link");


//Banner: introducing BINFSOC w/ cladogram bg

const banner_binfsoc = document.getElementById("banner-binfsoc");

const binfsoc_header = document.getElementById("mission-heading");
const binfsoc_mission1 = document.getElementById("mission-statement1");
const binfsoc_mission2 = document.getElementById("mission-statement2");
const binfsoc_actionItems = document.getElementById("action-items");

const bg_logo = document.getElementById('bg-logo');
const bg_logo_back = document.getElementById('bg-logo-back');
const bg_logo_mid = document.getElementById('bg-logo-mid');



const main = document.getElementById('main');


//SET ORDER OF BANNERS
var banners = [logo_div, banner_protein, banner_binfsoc];
banners[0].style.opacity = "1";
for (let i = 1; i < banners.length; i++) { banners[i].style.visibility = "hidden"; }


const discoverHeading = document.getElementById("discover-heading");
const discoverSubheading = document.getElementById("discover-subheading");
const discoverSubheading2 = document.getElementById("discover-subheading2");


var mouseOverLogo = false;
setTimeout(function(){mouseOverLogo=true;},1500);


loop = setInterval(iterate, 17);

var iterator = 0;
var fpIterator = 120;
ra = 0;
rv = 0;

var currentPage = 0;

var pageMemory = [];

var scrollSwitch = true;

var logoOn = false;


var scrollSpeed=[]


//Mobile device initialization
document.addEventListener("touchstart",touchStart,false);
document.addEventListener("touchend",touchEnd,false);

function touchStart(){
    setTimeout(function(){scrollSwitch=false;},300)
}
function touchEnd(){
    scrollSwitch=true;
}



function iterate() {

    if (!mouseOverLogo) {
        if (logoOn == true) {
            for (let i = 0; i < logo_allPaths.length; i++) {
                logo_allPaths[i].style.stroke = "rgba(255,255,255,1)";
            }
            logoOn = false;
        }
        if (fpIterator < 120) {
            fpIterator += 1;
            logo_fp.style.strokeDashoffset = fpIterator * 6.625;
            logo_fp2.style.strokeDashoffset = fpIterator * 11;
            logo_fpGlow.style.strokeDashoffset = fpIterator * 6.625;
            logo_fpGlow2.style.strokeDashoffset = fpIterator * 11;
        }
        if (rv > 0) {
            rv -= 0.02
        }


    }
    else {
        if (fpIterator > 0) {
            fpIterator -= 1;
            logo_fp.style.strokeDashoffset = fpIterator * 6.625;
            logo_fp2.style.strokeDashoffset = fpIterator * 11;
            logo_fpGlow.style.strokeDashoffset = fpIterator * 6.625;
            logo_fpGlow2.style.strokeDashoffset = fpIterator * 11;
        }
        if (fpIterator < 30 && logoOn == false) {
            for (let i = 0; i < logo_allPaths.length; i++) {
                logo_allPaths[i].style.stroke = "rgba(181,211,52,1)";
            }
            logoOn = true;
        }
        iterator += 1;

        if (iterator < 120) {
            if (rv < 2.4) {
                rv += 0.02;
            }

        }
        else {
            if (rv > 0.3) {
                rv -= 0.03;
            }

        }

    }

    if (rv > 0) {

        logo.style.transform = 'rotate(' + (ra + rv) + 'deg)';
        ra += rv;
    }

    scrollSpeed.splice(0,0,document.documentElement.scrollTop)
    if(scrollSpeed.length>10){
        scrollSpeed.pop()
    }
    

    scrollGradientDown.style.top="10%";
    scrollGradientUp.style.top="-10%";
    s=sumDiff(scrollSpeed);
    if(s!=0){
        
        if(s>10){
            scrollGradientUp.style.top=(s/300).toString()+"%";
    
        }
        if(s<-10){
            scrollGradientDown.style.top=(s/300).toString()+"%";
        }
    }
    


}

function sumDiff(l){
    s=0;
    m=l[0]
    for(let i=1; i<l.length; i++){
        s+=l[i]-m;
        m=l[i];
    }
    return s;
}

var rotation = 45;

logo.addEventListener('mouseover', function (event) {

    /*banner.style.backgroundColor = 'rgba(0,0,0,0.7)';*/
    mouseOverLogo = true;
    logo_heading.style.color = 'rgba(181,211,52,1)';
    logo_heading.style.textShadow = '0 0 10px  rgba(181,211,52,0.3), 0 0 30px rgba(181,211,52,0.3), 0 0 50px rgba(181,211,52,0.3), 0 0 70px  rgba(181,211,52,0.3)';

});
logo.addEventListener("mouseleave", function (event) {

    iterator = 0;
    mouseOverLogo = false;
    /*banner.style.backgroundColor = 'rgba(0,0,0,1)';*/
    logo_heading.style.color = 'rgba(255,255,255,1)';

    logo_heading.style.textShadow = '0 0 10px  rgba(181,211,52,0), 0 0 30px rgba(181,211,52,0), 0 0 50px rgba(181,211,52,0), 0 0 70px  rgba(181,211,52,0)';
});

var tally=0;

scrollPageDelay=1000;
scrollBuffer=200;
if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    scrollPageDelay=1000;
    scrollBuffer=200;
}

tally=0;

instanceCtrl=true;

document.onscroll=function () {
    //debug.textContent = currentPage.toString() + " " + document.documentElement.scrollTop.toString();
    slideout.style.visibility="hidden";

    //Passive scroll behaviour
    if(currentPage==2 && instanceCtrl){
        p=(scrollBuffer-document.documentElement.scrollTop)/scrollBuffer;
        if(p>1){p=1;}
        if(p<-1){p=-1;}
        binfsocKey(p);
      
        instanceCtrl=false;
        setTimeout(function(){instanceCtrl=true},200);
    }
    

    if (scrollSwitch == true) {

        if (currentPage == 3) {
            if(document.documentElement.scrollTop>scrollBuffer){
                p=(scrollBuffer-document.documentElement.scrollTop)/scrollBuffer;

                binfsocKey(p)
            }
            if (document.documentElement.scrollTop < 1) {
                jumpPage(currentPage - 1);
                scrollSwtich = false;
                setTimeout(function () { document.documentElement.scrollTop = scrollBuffer; scrollSwitch = true; scrollSpeed=[document.documentElement.scrollTop] }, scrollPageDelay);
            }

        } else {
            if (document.documentElement.scrollTop > scrollBuffer*2) {
                
                jumpPage(currentPage + 1);
                scrollSwitch = false;

                
                if (currentPage != 3) {
                    
                    setTimeout(function () { document.documentElement.scrollTop = scrollBuffer; scrollSwitch = true; scrollSpeed=[document.documentElement.scrollTop] }, scrollPageDelay);
                } else {

                    setTimeout(function () { scrollSwitch = true }, scrollPageDelay);
                }

                if(currentPage == 2){
                    setTimeout(function(){mainIn();},1000);
                }
                if(currentPage<2){
                    mainOut();
                }


            }
            if (document.documentElement.scrollTop < 1) {
                
                jumpPage(currentPage - 1);
                scrollSwitch = false;
                setTimeout(function () { document.documentElement.scrollTop = scrollBuffer; scrollSwitch = true ; scrollSpeed=[document.documentElement.scrollTop]}, 500);
                if(currentPage<2){
                    mainOut();
                }
            }
        }
    }

}

function jumpPage(n) {

    if (n >= 0 && n < banners.length+1) {
        if (n > currentPage) {
            pageOut(currentPage, -1);
            pageIn(n);
        } else {
            pageOut(currentPage, 1);
            pageIn(n);
        }
        currentPage = n;
    }
    if (!pageMemory.includes(n)) {
        pageMemory.push(n);
    }

}
function pageIn(n) {
    switch (n) {
        case 0:
            showNav();
            logoIn();
            break;

        case 1:
            proteinIn();
            break;
        case 2:
            binfsocKey(0);
            break;
        case 3:
            showNav();
            mainIn();
            break;
    }
}
function pageOut(n, dir) {
    switch (n) {
        case 0:
            hideNav();
            logoOut(dir);
            break;
        case 1:
            proteinOut(dir);
            break;
        case 2:
            binfsocKey(dir);
            break;
        case 3:
            hideNav();
            break;
    }
}
function binfsocOut(dir) {
    if(dir==-1){
        banner_binfsoc.style.position="absolute"
    }
    else{
        banner_binfsoc.style.opacity = "0";
        banner_binfsoc.style.visibility = "hidden";
        banner_binfsoc.style.top = ""
        banner_binfsoc.style.top = String(dir * 50) + "px";
        
        binfsoc_header.style.opacity="0";
        binfsoc_mission1.style.opacity="0";
        binfsoc_mission2.style.opacity="0";
        binfsoc_actionItems.style.opacity="0";
    
        //Background control
        bg_logo.style.top = '-100px';
        bg_logo_mid.style.top = '-70px';
        bg_logo_back.style.top = "-410px";
    }
    
}

function binfsocIn() {
    


    //Background control
    bg_logo.style.top = '50px';
    bg_logo_mid.style.top = '-35px';
    bg_logo_back.style.top = "-400px";

    
}

binfsocIn=false;
function binfsocKey(p){
    if(Math.abs(p)==1){
        if(binfsocIn){
            banner_binfsoc.style.opacity="0";
            banner_binfsoc.style.visibility = "hidden";
            binfsoc_header.style.opacity="0";
            binfsoc_mission1.style.opacity="0";
            binfsoc_mission2.style.opacity="0";
            binfsoc_actionItems.style.opacity="0";
            binfsocIn=false;
        }
    }else{
        if(!binfsocIn){
            banner_binfsoc.style.opacity = "1";
            banner_binfsoc.style.visibility = "visible";
            banner_binfsoc.style.top = "0px";
            
            setTimeout(function(){binfsoc_header.style.opacity="1";},500);
            setTimeout(function(){binfsoc_mission1.style.opacity="1";},1000);
            setTimeout(function(){binfsoc_mission2.style.opacity="1";},1200);
            setTimeout(function(){binfsoc_actionItems.style.opacity="1";},1600);
            
            binfsocIn=true;
        }
        
    }
    banner_binfsoc.style.top = String(p * 50) + "px";

    bg_logo.style.top = String(50 + p*150) + 'px';
    bg_logo_mid.style.top = String(-35 + p*35) + 'px';
    bg_logo_back.style.top = String(-400 + p*10) + "px";  
}
function logoOut(dir) {
    logo_div.style.opacity = "0";
    logo_div.style.visibility = "hidden";
    logo_div.style.top = String(dir * 30) + "px";



    //Background control
    endSlideshow();
    slideshow.opacity = "0%";

    
}
function logoIn() {

    logo_div.style.opacity = "1";
    logo_div.style.visibility = "visible";
    logo_div.style.top = "0px";


    //Background control
    startSlideshow();
    slideshow.opacity = "30%";
    

}
function proteinIn() {
    banner_protein.style.opacity = "1";
    banner_protein.style.visibility = "visible";
    banner_protein.style.top = "0px";

    if (!pageMemory.includes(1)) {
        setTimeout(proteinTopIn_delay, 1500);
        setTimeout(proteinBotIn_delay, 3000);
        setTimeout(proteinLinkIn_delay, 4500);
    } else {
        proteinTopIn_delay();
        proteinBotIn_delay();
        proteinLinkIn_delay();
    }


}
function proteinOut(dir) {
    banner_protein.style.opacity = "0";
    banner_protein.style.visibility = "hidden";
    banner_protein.style.top = String(dir * 50) + "px";
    proteinTopOut_delay();
    proteinBotOut_delay();
    proteinLinkOut_delay();



}


function mainIn() {
    main.style.opacity = "1";
    main.style.visibility = "visible";
}
function mainOut(dir) {
    main.style.opacity = "0";
    main.style.visibility = "hidden";
}





function proteinTopIn_delay() {
    bg_protein.style.top = "30%";
    bg_protein.style.opacity = "1";

    protein_header1.style.top = "49%";
    protein_header1.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"

}
function proteinBotIn_delay() {
    bg_proteinFlipped.style.top = "75%";
    bg_proteinFlipped.style.opacity = "1";
    protein_header2.style.top = "55%";
    protein_header2.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    bg_protein_codeEffects.style.opacity = "1";
    bg_protein_codeEffects.style.visibility="visible";
}

function proteinTopOut_delay() {
    bg_protein.style.top = "-20%";
    bg_protein.style.opacity = "0";

    protein_header1.style.top = "55%";
    protein_header1.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";

}
function proteinBotOut_delay() {
    bg_proteinFlipped.style.top = "120%";
    bg_proteinFlipped.style.opacity = "0";
    bg_protein_codeEffects.style.opacity = "0";
    bg_protein_codeEffects.style.visibility="hidden";
    protein_header2.style.top = "49%";
    protein_header2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
}

function proteinLinkIn_delay() {
    protein_link.style.opacity="1";

}
function proteinLinkOut_delay() {
    protein_link.style.opacity="0";
}

var current_slide = 0;
setTimeout(function(){slideshow_content[0].style.opacity="1";},17);
var slideTimer = setInterval(slideshowNext,7000);

function startSlideshow(){
    slideTimer = setInterval(slideshowNext,7000);
}

function endSlideshow(){
    clearInterval(slideTimer);
}

function slideshowNext(){
    
    slideshow_content[current_slide].style.opacity="0";
    
    current_slide+=1;
    if(current_slide>=slideshow_content.length){
        current_slide = 0;
    }

    slideshow_content[current_slide].style.opacity="1";
}






function showNav(){
    nav.style.top="0px";
    searchBox.style.top = "24px";
}

function hideNav(){
    nav.style.top="-72px";
    searchBox.style.top="-48px";
}





function discover1() {


}
function navigate(link){
    window.location.href=link;
}

window.addEventListener('click', function(e){   
    if (!slideout.contains(e.target) && !document.getElementById('menu-icon').contains(e.target)){
        slideout.style.visibility="hidden";
    }

  });


function slideoutMenu(){

    if(window.getComputedStyle(slideout).getPropertyValue('visibility')=="hidden"){
        slideout.style.visibility ="visible";
        
    }else{
        slideout.style.visibility="hidden";

    }
}