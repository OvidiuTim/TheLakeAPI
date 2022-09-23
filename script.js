function headerLogo() {
  window.open(
  '/index.html', "_self");
}

//----------HEADER MOBILE BURGER----------//

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.mob-navbar');
const navBar = document.querySelectorAll('.mob-navbar a')

  burger.addEventListener('click', () => {

//toggle nav regtangle
    nav.classList.toggle('nav-active');

//animate linksß
navBar.forEach((link, index) => {
  if(link.style.animation){
    link.style.animation = '';
  } else {
  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.01}s`;
  }
  });

//burger animation
burger.classList.toggle('toggle');
  });

}

navSlide();


//----------HEADER DATABASE----------//
//accordion blocs
function showBloc(anything){
  document.querySelector('.BlocsBox').value = anything;
}
let blocdropdown = document.querySelector('.blocs-names');
blocdropdown.onclick = function(){
  blocdropdown.classList.toggle('active');
}


//mobile active - bloc 
let mobBloc = document.querySelector('.db-blocs');
mobBloc.onclick = function(){
  mobBloc.classList.toggle('active');
}
//mobile active - vila 
let mobVila = document.querySelector('.db-vila');
mobVila.onclick = function(){
  mobVila.classList.toggle('active');
}
//mobile active - camere 
let mobNrCam = document.querySelector('.db-camere');
mobNrCam.onclick = function(){
  mobNrCam.classList.toggle('active');
}


//----------ALL TAGS ACCORDION----------//
const mobtagBoxes=document.querySelectorAll('#mobtag1content, #mobtag2content, #mobtag3content, #mobtag4content, #mobtag5content, #mobtag6content, #mobtag7content, #mobtag8content, #tag1content, #tag2content, #tag3content, #tag4content, #tag5content, #tag6content, #tag7content, #tag8content')
const mobtagBtns=document.querySelectorAll('#mobtagBtn, #mobtagBtn2, #mobtagBtn3, #mobtagBtn4, #mobtagBtn5, #mobtagBtn6, #mobtagBtn7, #mobtagBtn8, #tagBtn, #tagBtn2, #tagBtn3, #tagBtn4, #tagBtn5, #tagBtn6, #tagBtn7, #tagBtn8')
for(let i = 0; i <mobtagBtns.length; i++)
{
  mobtagBtns[i].onclick = function(){
    
    if(mobtagBoxes[i].className == "open"){
      mobtagBoxes[i].className = "";
      mobtag1content.className = "";
      mobtag2content.className = "";
      mobtag3content.className = "";
      mobtag4content.className = "";
      mobtag5content.className = "";
      mobtag6content.className = "";
      mobtag7content.className = "";
      mobtag8content.className = "";
      tag1content.className = "";
      tag2content.className = "";
      tag3content.className = "";
      tag4content.className = "";
      tag5content.className = "";
      tag6content.className = "";
      tag7content.className = "";
      tag8content.className = "";
/*add other tag contents above*/
    }
    else{

      mobtag1content.className = "";
      mobtag2content.className = "";
      mobtag3content.className = "";
      mobtag4content.className = "";
      mobtag5content.className = "";
      mobtag6content.className = "";
      mobtag7content.className = "";
      mobtag8content.className = "";
      tag1content.className = "";
      tag2content.className = "";
      tag3content.className = "";
      tag4content.className = "";
      tag5content.className = "";
      tag6content.className = "";
      tag7content.className = "";
      tag8content.className = "";
/*add other tag content above*/

      mobtagBoxes[i].className = "open";
    }
  }
}

//--------------------MOBILE TAGS SLIDER--------------------//

$( document ).ready(function() {

    let mobBxsliderElems = $('.tagElements');
    let listBox = $('.mobBxslider');
    let mobBxsliderElemsLength = mobBxsliderElems.length ;
  
    let elemsPerSlide = 1; //DEFAULT VALUE !!! HERE U PUT HOW MANY U WANT TO HAVE DYSPLAYED AT ONCE

  
    $('.mob-tag-slider-controls').css('display', 'flex');
  
    let mobTagprevArrow = $('.mob-tag-slider-controls #mob-tag-slide-prev');
    let mobTagnextArrow = $('.mob-tag-slider-controls #mob-tag-slide-next');
  
    let elemWidth;
    let maxMargin;
    let firstSeven;
    let lastSeven;
    let marginLeft;
    let count;
    let numSlides;
  
    let isComplete = true;
  
    blueSlider();
  
    function blueSlider() {
  
      $( 'li.tagElements' ).remove('.cloneBefore').removeClass('cloneBefore');
      $( 'li.tagElements' ).remove('.cloneAfter').removeClass('cloneAfter');
      
      elemWidth = 100 / elemsPerSlide;
      maxMargin = 100;
      marginLeft = -maxMargin;
  
      mobBxsliderElems = $('.tagElements');
      mobBxsliderElemsLength = mobBxsliderElems.length;
  
      cloneBefore = mobBxsliderElems.slice(mobBxsliderElemsLength - elemsPerSlide,mobBxsliderElemsLength);
      cloneAfter = mobBxsliderElems.slice(0,elemsPerSlide);
      cloneBefore.clone().addClass('cloneBefore').prependTo(listBox);
      cloneAfter.clone().addClass('cloneAfter').appendTo(listBox);
  
      mobBxsliderElems = $('.tagElements');
      mobBxsliderElemsLength = mobBxsliderElems.length;
      mobBxsliderElems.css('width', elemWidth + '%');
      listBox.css('width', (elemWidth*mobBxsliderElemsLength) + '%');
      listBox.css('marginLeft', -maxMargin + '%');
  
      count = 1;
      numSlides = Math.floor( (mobBxsliderElemsLength - elemsPerSlide*2) / elemsPerSlide );
  
    }
  
    mobTagnextArrow.click(function(){
  
      if ( isComplete ) {
  
        
        isComplete = false;

        if (mobBxsliderElemsLength % elemsPerSlide != 0) {

          if ( marginLeft <= 0 && marginLeft > -(elemWidth * (mobBxsliderElemsLength - elemsPerSlide*2)) ) {
            marginLeft = marginLeft - maxMargin;
  
            console.log('1');
          }
  
          if ( marginLeft == -(elemWidth * (mobBxsliderElemsLength - elemsPerSlide*2)) ) {
            listBox.css('marginLeft', 0 + '%' );
            marginLeft = -maxMargin;
  
            console.log('2');
          }
  
          if (marginLeft < -(elemWidth * (mobBxsliderElemsLength - elemsPerSlide*2)) ) {
            marginLeft = -(elemWidth * (mobBxsliderElemsLength - elemsPerSlide*2));
  
            console.log('3');
          }
          document.getElementById("carouselimg1").style.opacity = "none";

        } else {
  
          if ( marginLeft == -maxMargin*numSlides && count == numSlides ) {
  
            listBox.css('marginLeft', 0 + '%' );
            marginLeft = -maxMargin;
            count = 1;
  
            console.log('4');
  
          } else {
  
            marginLeft = marginLeft -maxMargin;
            count++;
  
            console.log('5');
  
          }
  
        }
  
        listBox.animate({
          marginLeft: marginLeft + '%'
        }, 1000, function() {
          isComplete = true;
        });
  
      }
  
    });
  
    mobTagprevArrow.click(function(){
  
      if ( isComplete ) {
  
        isComplete = false;
  
        if (mobBxsliderElemsLength % elemsPerSlide != 0) {
  
          if (marginLeft < 0 && marginLeft != -maxMargin) {
            marginLeft = marginLeft + maxMargin;
          }
  
          if (marginLeft == -maxMargin) {
            listBox.css('marginLeft', -(elemWidth* (mobBxsliderElemsLength - elemsPerSlide)) + '%' );
            marginLeft = -(elemWidth * (mobBxsliderElemsLength - elemsPerSlide*2));
          }
  
          if (marginLeft >= -maxMargin) {
            marginLeft = -maxMargin;
          }
  
        } else {
  
          if ( marginLeft == -maxMargin && count == 1 ) {
  
            listBox.css('marginLeft', -(elemWidth* (mobBxsliderElemsLength - elemsPerSlide)) + '%' );
            marginLeft = -(elemWidth * (mobBxsliderElemsLength - elemsPerSlide*2));
  
            count = count*numSlides;
  
          } else {
  
            marginLeft = marginLeft + maxMargin;
            count--;
  
          }
  
        }
  
        listBox.animate({
          marginLeft: marginLeft + '%'
        }, 1000, function() {
          isComplete = true;
        });
  
      }
  
    });
  
  });

  
//--------------------TAGS SLIDER--------------------//
var tagSlide = document.getElementById("tagSectionWrapper")
let withOfTag = tagSlide.offsetWidth // with of the container
var buttonSlideNEXT = document.getElementById("tagSlideNext")
var buttonSlidePREV = document.getElementById("tagSlidePrev")
var buttonSlideNEXT1 = document.getElementById("tagSlideNext1")
var buttonSlidePREV1 = document.getElementById("tagSlidePrev1")

let lastBox = document.getElementById("tag8content")

function checkbuttons(){
  if (counter >= 3){
    buttonSlideNEXT.style.display = ' none ';
    buttonSlideNEXT1.style.display = ' flex ';
  }
}
function checkbuttonsPREV(){
  if (counter >= 1){
    buttonSlidePREV1.style.display = ' none ';
    buttonSlidePREV.style.display = ' flex ';
  }
}

let clickedRight = 50
let counter = 1
buttonSlideNEXT.addEventListener('click' ,  function(){
  checkbuttons();
  checkbuttonsPREV();
  tagSlide.style.marginLeft = clickedRight*-1 + 'rem';
  clickedRight += 50
  counter ++
  console.log(counter)
  
});

buttonSlidePREV.addEventListener('click' ,  function(){

  buttonSlideNEXT.style.display = ' flex ';
  buttonSlideNEXT1.style.display = ' none ';
  clickedRight -= 100;
  tagSlide.style.marginLeft = clickedRight*-1+ 'rem';
  clickedRight += 50;
  counter --;
  console.log(counter);

  if (counter <= 1){
    buttonSlidePREV1.style.display = ' flex ';
    buttonSlidePREV.style.display = ' none ';
  }
});





//-------------------- ALEGETI LOCUINTA--------------------//
/* MOBILE SLIDER*/
$(document).ready(function(){
  var currentIndex = 0;
  var boxSlide = $('.bowWrap ul li');
  var boxTotal =  $(boxSlide).length;

  var indicator = $('ul.indicator li');
  var indiTotal = $(indicator).length;


  $('#mob-bloc-next').click(function() {
    currentIndex ++;
    if (currentIndex > boxTotal - 1 && currentIndex > indiTotal - 1) {
      currentIndex = 0;
    }
    cycle();
  });

  $('#mob-bloc-prev').click(function() {
    currentIndex --;
    if (currentIndex < 0) {
      currentIndex = boxTotal - 1;
      currentIndex = indiTotal - 1;
    }
    cycle();
  });

  $(indicator).click(function(){
    var point = $(this).index();
    currentIndex = point;
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var boxImg = $(boxSlide).eq(point);
    boxImg.siblings().removeClass('show');
    boxImg.addClass('show');
  });

  function cycle(){
    var thumb = $(boxSlide).eq(currentIndex);
    thumb.siblings().removeClass('show');
    thumb.addClass('show');
    var bullet = $(indicator).eq(currentIndex);
    bullet.siblings().removeClass('active');
    bullet.addClass('active');
  };
});


/* DROPDOWN ETAJ*/
function show(anything){
  document.querySelector('.textBox').value = anything;
}
let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
  dropdown.classList.toggle('active');
}
/* DROPDOWN CAMERE*/
function showCam(anything){
  document.querySelector('.textBoxCam').value = anything;
}
let dropdownCam = document.querySelector('.dropdownCam');
dropdownCam.onclick = function(){
  dropdownCam.classList.toggle('active');
}

/* DESKTOP SLIDER BLOCS*/
$( document ).ready(function() {

  let SliderBlocs = $('.Dblocs');
  let dListBlocs = $('.slider-blocs');
  let SliderBlocsLength = SliderBlocs.length ;

  let elemsPerSlide = 1; //DEFAULT VALUE !!! HERE U PUT HOW MANY U WANT TO HAVE DYSPLAYED AT ONCE


  $('.select-blocs-btns').css('display', 'flex');

  let mobTagprevArrow = $('.select-blocs-btns #bloc-prev');
  let mobTagnextArrow = $('.select-blocs-btns #bloc-next');

  let elemWidth;
  let maxMargin;
  let firstSeven;
  let lastSeven;
  let marginLeft;
  let count;
  let numSlides;

  let isComplete = true;

  blueSlider();

  function blueSlider() {

    $( 'li.Dblocs' ).remove('.cloneBefore').removeClass('cloneBefore');
    $( 'li.Dblocs' ).remove('.cloneAfter').removeClass('cloneAfter');
    
    elemWidth = 100 / elemsPerSlide;
    maxMargin = 100;
    marginLeft = -maxMargin;

    SliderBlocs = $('.Dblocs');
    SliderBlocsLength = SliderBlocs.length;

    cloneBefore = SliderBlocs.slice(SliderBlocsLength - elemsPerSlide,SliderBlocsLength);
    cloneAfter = SliderBlocs.slice(0,elemsPerSlide);
    cloneBefore.clone().addClass('cloneBefore').prependTo(dListBlocs);
    cloneAfter.clone().addClass('cloneAfter').appendTo(dListBlocs);

    SliderBlocs = $('.Dblocs');
    SliderBlocsLength = SliderBlocs.length;
    SliderBlocs.css('width', elemWidth + '%');
    dListBlocs.css('width', (elemWidth*SliderBlocsLength) + '%');
    dListBlocs.css('marginLeft', -maxMargin + '%');

    count = 1;
    numSlides = Math.floor( (SliderBlocsLength - elemsPerSlide*2) / elemsPerSlide );

  }

  mobTagnextArrow.click(function(){

    if ( isComplete ) {

      
      isComplete = false;

      if (SliderBlocsLength % elemsPerSlide != 0) {

        if ( marginLeft <= 0 && marginLeft > -(elemWidth * (SliderBlocsLength - elemsPerSlide*2)) ) {
          marginLeft = marginLeft - maxMargin;

          console.log('1');
        }

        if ( marginLeft == -(elemWidth * (SliderBlocsLength - elemsPerSlide*2)) ) {
          dListBlocs.css('marginLeft', 0 + '%' );
          marginLeft = -maxMargin;

          console.log('2');
        }

        if (marginLeft < -(elemWidth * (SliderBlocsLength - elemsPerSlide*2)) ) {
          marginLeft = -(elemWidth * (SliderBlocsLength - elemsPerSlide*2));

          console.log('3');
        }
        document.getElementById("carouselBloc").style.opacity = "none";

      } else {

        if ( marginLeft == -maxMargin*numSlides && count == numSlides ) {

          dListBlocs.css('marginLeft', 0 + '%' );
          marginLeft = -maxMargin;
          count = 1;

          console.log('4');

        } else {

          marginLeft = marginLeft -maxMargin;
          count++;

          console.log('5');

        }

      }

      dListBlocs.animate({
        marginLeft: marginLeft + '%'
      }, 1000, function() {
        isComplete = true;
      });

    }

  });

  mobTagprevArrow.click(function(){

    if ( isComplete ) {

      isComplete = false;

      if (SliderBlocsLength % elemsPerSlide != 0) {

        if (marginLeft < 0 && marginLeft != -maxMargin) {
          marginLeft = marginLeft + maxMargin;
        }

        if (marginLeft == -maxMargin) {
          dListBlocs.css('marginLeft', -(elemWidth* (SliderBlocsLength - elemsPerSlide)) + '%' );
          marginLeft = -(elemWidth * (SliderBlocsLength - elemsPerSlide*2));
        }

        if (marginLeft >= -maxMargin) {
          marginLeft = -maxMargin;
        }

      } else {

        if ( marginLeft == -maxMargin && count == 1 ) {

          dListBlocs.css('marginLeft', -(elemWidth* (SliderBlocsLength - elemsPerSlide)) + '%' );
          marginLeft = -(elemWidth * (SliderBlocsLength - elemsPerSlide*2));

          count = count*numSlides;

        } else {

          marginLeft = marginLeft + maxMargin;
          count--;

        }

      }

      dListBlocs.animate({
        marginLeft: marginLeft + '%'
      }, 1000, function() {
        isComplete = true;
      });

    }

  });

});

/* DESKTOP SLIDER PLANS*/
$(document).ready(function(){
  
  var currentIndex = 0;
  var boxSlide = $('.plans-imgs ul li');
  var boxTotal =  $(boxSlide).length;

  var indicator = $('ul.plan-indicator li');
  var indiTotal = $(indicator).length;


  $('#plans-next').click(function() {
    currentIndex ++;
    if (currentIndex > boxTotal - 1 && currentIndex > indiTotal - 1) {
      currentIndex = 0;
    }
    cycle();
  });

  $('#plans-prev').click(function() {
    currentIndex --;
    if (currentIndex < 0) {
      currentIndex = boxTotal - 1;
      currentIndex = indiTotal - 1;
    }
    cycle();
  });

  $(indicator).click(function(){
    var point = $(this).index();
    currentIndex = point;
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    var boxImg = $(boxSlide).eq(point);
    boxImg.siblings().removeClass('show');
    boxImg.addClass('show');
  });

  function cycle(){
    var thumb = $(boxSlide).eq(currentIndex);
    thumb.siblings().removeClass('show');
    thumb.addClass('show');
    var bullet = $(indicator).eq(currentIndex);
    bullet.siblings().removeClass('active');
    bullet.addClass('active');
  };
});

//--------------------MOBILE TIMELINE SLIDER--------------------//
var timelineSlide = document.getElementById("mob-timeline-image-wrapper")
var buttontimeNEXT = document.getElementById("timeline-next")
var buttontimePREV = document.getElementById("timeline-prev")
var buttontimeNEXT1 = document.getElementById("timeline-next1")
var buttontimePREV1 = document.getElementById("timeline-prev1")

let clickedRight1 = 0
let counter1 = 1
function checkbuttons1(){
if (counter1 >= 5){
  buttontimeNEXT.style.display = ' none ';
  buttontimeNEXT1.style.display = ' flex ';
}
}
function checkbuttonsPREV1(){
if (counter1 >= 1){
  buttontimePREV1.style.display = ' none ';
  buttontimePREV.style.display = ' flex ';
}
}

buttontimeNEXT.addEventListener('click' ,  function(){
checkbuttons1();
checkbuttonsPREV1();
timelineSlide.style.marginLeft = clickedRight1*-1 + 'rem';
clickedRight1 += 10
counter1 ++
});

buttontimePREV.addEventListener('click' ,  function(){

buttontimeNEXT.style.display = ' flex ';
buttontimeNEXT1.style.display = ' none ';

clickedRight1 -= 20;
timelineSlide.style.marginLeft = clickedRight1*-1+ 'rem';
clickedRight1 += 10;
counter1 --;

if (counter1 <= 1){
  buttontimePREV1.style.display = ' flex ';
  buttontimePREV.style.display = ' none ';
}
});

//--------------------CALCULATOR--------------------//
function add()
{
  
  var numOne, numTwo, sum;
  if((document.getElementById("first").value) > 6999){
      if (document.getElementById('age2').checked) {
        numTwo = document.getElementById('age2').value;}
      if (document.getElementById('age3').checked) {
        numTwo = document.getElementById('age3').value;}
      if (document.getElementById('age4').checked) {
        numTwo = document.getElementById('age4').value;}

      numOne = parseInt(document.getElementById("first").value);
        
      sum = numOne + (numOne * numTwo / 100);
      pro = numOne * numTwo / 100;

      document.getElementById("answer3").value = numTwo + "%";

      if(pro<1000){
          document.getElementById("answer2").value = pro + " €";
      }
      else {
          document.getElementById("answer2").value =(pro/1000).toFixed(3) + " €";
      }
      if(sum >1000){
          document.getElementById("answer").value = (sum/1000).toFixed(3) + " €";
      }
      else {
          document.getElementById("answer").value =sum + " €";
      }
      
  }
  else{
      alert("Suma minima de investiție este 7000 €");
      if ($(first).val().trim() == "") {$(first).val(7000);};
  }

}

//--------------------GALLERY SLIDER--------------------//

$( document ).ready(function() {

  let bxsliderElems = $('.elements');
  let listBox = $('.bxslider');
  let bxsliderElemsLength = bxsliderElems.length ;

  let elemsPerSlide = 1; //DEFAULT VALUE !!! HERE U PUT HOW MANY U WANT TO HAVE DYSPLAYED AT ONCE


  $('.slider-controls').css('display', 'flex');

  let prevArrow = $('.slider-controls #slide-prev');
  let nextArrow = $('.slider-controls #slide-next');

  let elemWidth;
  let maxMargin;
  let firstSeven;
  let lastSeven;
  let marginLeft;
  let count;
  let numSlides;

  let isComplete = true;

  blueSlider();

  function blueSlider() {

    $( 'li.elements' ).remove('.cloneBefore').removeClass('cloneBefore');
    $( 'li.elements' ).remove('.cloneAfter').removeClass('cloneAfter');
    
    elemWidth = 100 / elemsPerSlide;
    maxMargin = 100;
    marginLeft = -maxMargin;

    bxsliderElems = $('.elements');
    bxsliderElemsLength = bxsliderElems.length;

    cloneBefore = bxsliderElems.slice(bxsliderElemsLength - elemsPerSlide,bxsliderElemsLength);
    cloneAfter = bxsliderElems.slice(0,elemsPerSlide);
    cloneBefore.clone().addClass('cloneBefore').prependTo(listBox);
    cloneAfter.clone().addClass('cloneAfter').appendTo(listBox);

    bxsliderElems = $('.elements');
    bxsliderElemsLength = bxsliderElems.length;
    bxsliderElems.css('width', elemWidth + '%');
    listBox.css('width', (elemWidth*bxsliderElemsLength) + '%');
    listBox.css('marginLeft', -maxMargin + '%');

    count = 1;
    numSlides = Math.floor( (bxsliderElemsLength - elemsPerSlide*2) / elemsPerSlide );

  }

  nextArrow.click(function(){

    if ( isComplete ) {

      
      isComplete = false;

      if (bxsliderElemsLength % elemsPerSlide != 0) {

        if ( marginLeft <= 0 && marginLeft > -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2)) ) {
          marginLeft = marginLeft - maxMargin;

          console.log('1');
        }

        if ( marginLeft == -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2)) ) {
          listBox.css('marginLeft', 0 + '%' );
          marginLeft = -maxMargin;

          console.log('2');
        }

        if (marginLeft < -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2)) ) {
          marginLeft = -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2));

          console.log('3');
        }
        document.getElementById("carouselimg1").style.opacity = "none";

      } else {

        if ( marginLeft == -maxMargin*numSlides && count == numSlides ) {

          listBox.css('marginLeft', 0 + '%' );
          marginLeft = -maxMargin;
          count = 1;

          console.log('4');

        } else {

          marginLeft = marginLeft -maxMargin;
          count++;

          console.log('5');

        }

      }

      listBox.animate({
        marginLeft: marginLeft + '%'
      }, 1000, function() {
        isComplete = true;
      });

    }

  });

  prevArrow.click(function(){

    if ( isComplete ) {

      isComplete = false;

      if (bxsliderElemsLength % elemsPerSlide != 0) {

        if (marginLeft < 0 && marginLeft != -maxMargin) {
          marginLeft = marginLeft + maxMargin;
        }

        if (marginLeft == -maxMargin) {
          listBox.css('marginLeft', -(elemWidth* (bxsliderElemsLength - elemsPerSlide)) + '%' );
          marginLeft = -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2));
        }

        if (marginLeft >= -maxMargin) {
          marginLeft = -maxMargin;
        }

      } else {

        if ( marginLeft == -maxMargin && count == 1 ) {

          listBox.css('marginLeft', -(elemWidth* (bxsliderElemsLength - elemsPerSlide)) + '%' );
          marginLeft = -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2));

          count = count*numSlides;

        } else {

          marginLeft = marginLeft + maxMargin;
          count--;

        }

      }

      listBox.animate({
        marginLeft: marginLeft + '%'
      }, 1000, function() {
        isComplete = true;
      });

    }

  });

});

//--------------------LOCATIA ACCORDION--------------------//

const panels=document.querySelectorAll('#panel1, #panel2, #panel3, #panel4')
for(let i = 0; i <panels.length; i++)
{
  panels[i].onclick = function(){
    console.log("yo");
    if(panels[i].className == "open"){
      panel1.className = "";
      panel2.className = "";
      panel3.className = "";
      panel4.className = "";
    }
    else{
      panel1.className = "";
      panel2.className = "";
      panel3.className = "";
      panel4.className = "";
      panels[i].className = "open";
    }
  }
}

//--------------------TESTIMONIALS--------------------//

$( document ).ready(function() {

  let bxsliderElems = $('.elements-Testm');
  let listBox = $('.bxslider-Testm');
  let bxsliderElemsLength = bxsliderElems.length ;

  let elemsPerSlide = 1; //DEFAULT VALUE !!! HERE U PUT HOW MANY U WANT TO HAVE DYSPLAYED AT ONCE


  $('.slider-controls-Testm').css('display', 'flex');

  let prevArrow = $('.slider-controls-Testm #testm-slide-prev');
  let nextArrow = $('.slider-controls-Testm #testm-slide-next');

  let elemWidth;
  let maxMargin;
  let firstSeven;
  let lastSeven;
  let marginLeft;
  let count;
  let numSlides;

  let isComplete = true;

  blueSlider();

  function blueSlider() {

    $( 'li.elements-Testm' ).remove('.cloneBefore').removeClass('cloneBefore');
    $( 'li.elements-Testm' ).remove('.cloneAfter').removeClass('cloneAfter');
    
    elemWidth = 100 / elemsPerSlide;
    maxMargin = 100;
    marginLeft = -maxMargin;

    bxsliderElems = $('.elements-Testm');
    bxsliderElemsLength = bxsliderElems.length;

    cloneBefore = bxsliderElems.slice(bxsliderElemsLength - elemsPerSlide,bxsliderElemsLength);
    cloneAfter = bxsliderElems.slice(0,elemsPerSlide);
    cloneBefore.clone().addClass('cloneBefore').prependTo(listBox);
    cloneAfter.clone().addClass('cloneAfter').appendTo(listBox);

    bxsliderElems = $('.elements-Testm');
    bxsliderElemsLength = bxsliderElems.length;
    bxsliderElems.css('width', elemWidth + '%');
    listBox.css('width', (elemWidth*bxsliderElemsLength) + '%');
    listBox.css('marginLeft', -maxMargin + '%');

    count = 1;
    numSlides = Math.floor( (bxsliderElemsLength - elemsPerSlide*2) / elemsPerSlide );

  }

  nextArrow.click(function(){

    if ( isComplete ) {

      
      isComplete = false;

      if (bxsliderElemsLength % elemsPerSlide != 0) {

        if ( marginLeft <= 0 && marginLeft > -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2)) ) {
          marginLeft = marginLeft - maxMargin;

          console.log('1');
        }

        if ( marginLeft == -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2)) ) {
          listBox.css('marginLeft', 0 + '%' );
          marginLeft = -maxMargin;

          console.log('2');
        }

        if (marginLeft < -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2)) ) {
          marginLeft = -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2));

          console.log('3');
        }
        document.getElementById("carouselimg1").style.opacity = "none";

      } else {

        if ( marginLeft == -maxMargin*numSlides && count == numSlides ) {

          listBox.css('marginLeft', 0 + '%' );
          marginLeft = -maxMargin;
          count = 1;

          console.log('4');

        } else {

          marginLeft = marginLeft -maxMargin;
          count++;

          console.log('5');

        }

      }

      listBox.animate({
        marginLeft: marginLeft + '%'
      }, 1000, function() {
        isComplete = true;
      });

    }

  });

  prevArrow.click(function(){

    if ( isComplete ) {

      isComplete = false;

      if (bxsliderElemsLength % elemsPerSlide != 0) {

        if (marginLeft < 0 && marginLeft != -maxMargin) {
          marginLeft = marginLeft + maxMargin;
        }

        if (marginLeft == -maxMargin) {
          listBox.css('marginLeft', -(elemWidth* (bxsliderElemsLength - elemsPerSlide)) + '%' );
          marginLeft = -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2));
        }

        if (marginLeft >= -maxMargin) {
          marginLeft = -maxMargin;
        }

      } else {

        if ( marginLeft == -maxMargin && count == 1 ) {

          listBox.css('marginLeft', -(elemWidth* (bxsliderElemsLength - elemsPerSlide)) + '%' );
          marginLeft = -(elemWidth * (bxsliderElemsLength - elemsPerSlide*2));

          count = count*numSlides;

        } else {

          marginLeft = marginLeft + maxMargin;
          count--;

        }

      }

      listBox.animate({
        marginLeft: marginLeft + '%'
      }, 1000, function() {
        isComplete = true;
      });

    }

  });

});

//--------------------FOOTER BUTTONS--------------------//

  function NewTabNovarion() {
    window.open(
    "http://novarion.ro", "_blank");
  }

  function NewTabFb() {
    window.open(
    "https://www.facebook.com/thelakehome/", "_blank");
  }function NewTabLi() {
    window.open(
    "https://www.linkedin.com/company/the-lake-home-living-xperience/", "_blank");
  }function NewTabIg() {
    window.open(
    "https://www.instagram.com/thelakehomelx/", "_blank");
  }function NewTabYt() {
    window.open(
    "https://www.youtube.com/channel/UCjExjuoQ-Oui73BCi9WjQsg", "_blank");
  }