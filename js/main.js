const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');
console.log(searchInputEl);
//일단 html 요소 불러오고
searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});
//클릭하면 포커스 되는 이벤트 기능 만들어 주고
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});
//클릭하여 포커스가 되면 일단 서치 클래스에 focused 추가해주고
//setAttribute로 placeholder요소의 속성을 통합검색으로 바꿔준다
searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});
//blur :포커스가 제거 되었을 때 /클래스 이름에서 focused를 제거하고
//setAttribute로 placeholder요소의 속성 통합겁색을 제거한다. 

//돋보기 눌렀을 때의 기능을 여기서 만들어주는 것



const badgeEl = document.querySelector('.badges');
const topEl=document.querySelector('#to_top');

window.addEventListener('scroll',_.throttle(function(){
    console.log('scroll!!!');
    console.log(window.scrollY);
    //스크롤 했을 때의 위치값 height 값을 가져다 주는 것
    //위치값 찾을 때 쓰면 되겠지 ??
    if(window.scrollY>500){
        //뱃지 숨기기
        //badgeEl.style.display='none';
        //요소에 속성값 넣기
        //뚝뚝 끊기니까 오픈소스 받아와서 할거야
        //gsap.to(요소,지속시간,옵션);
        gsap.to(badgeEl,0.5,{
            opacity:0,
            display:'none'
        });
        //TOP버튼보이기
        gsap.to(topEl,0.2,{
            x:0 //x좌표 그대로
        })
        

    }else{
        //뱃지 보이기
        //badgeEl.style.display='block';
        gsap.to(badgeEl,0.5,{
            opacity:1,
            display:'block'
        });
        //TOP버튼숨기기
        gsap.to(topEl,0.2,{
            x:100
        })
    }
},300));
//1초가 1000
//window는 웹브라우져에 있는 기본 속성 값(전역변수 같은거) 위드 하이값을 가져 올 때 쓴데 
//document는 내가 변경하거나 그럴때 가져오는거 ?

topEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0
    });
});
//TOP버튼 눌렀을 때 위로 가게 하는 js



//이미지 나오게 하는거 중간 부분 
const fadeEls=document.querySelectorAll('.section1 .fade-in')
console.log(fadeEls);
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1)*.3,//점진적으로 하나 씩 나온다
        opacity:1
    });
});


//중간 공지사항과 프로모션 폈을 때 움직이는 스와이퍼
new Swiper('.inner_left .swiper',{
    direction:'vertical',
    autoplay:true,
    loop:true,//반복
    speed:100
});
new Swiper('.promotion .swiper',{
    slidesPerView: 3,//한번에 보여주는 슬라이드 개수
    spaceBetween: 10,//슬라이드 사이 여백
    autoplay: true,//자동 슬라이드
    centeredSlides:true,//첫 번째 시작이 센터로
    loop:true,//반복
    pagination:{
        el:'.promotion .swiper-pagination',//페이지 번호 요소 선택자
        clickable:true,//페이지 번호 선택확성화
    },
    navigation:{
        prevEl:'.promotion .swiper-button-prev',
        nextEl:'.promotion .swiper-button-next'
    }
});
new Swiper('.section9 .swiper',{
    slidesPerView:5,
    spaceBetween:30,
    autoplay:true,
    loop:true,
    navigation:{
        prevEl:'.section9 .swiper-button-prev',
        nextEl:'.section9 .swiper-button-next'
    }
});


//toggle:토글
// 접었다 폈다 하는 거
const promotionToggleEl= document.querySelector('.toggle-promotion');
console.log(promotionToggleEl);
const promotionEl =document.querySelector('.promotion');
let isHidePromotion=false;
promotionToggleEl.addEventListener('click',function(){
    isHidePromotion= !isHidePromotion;
    //console.log(isHidePromotion);
    if(isHidePromotion){
        //show
        promotionEl.classList.add('open');
        promotionToggleEl.classList.add('open');
    }else{
        //hide
        promotionEl.classList.remove('open');
        promotionToggleEl.classList.remove('open');
    }
});

const spyEls=document.querySelectorAll('div.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({
        triggerElements:spyEl, //내가 감지해야할 요소 지정
        triggerHook:0.8//0.8초 마다 있는 지 없는 지 확인해주는거
    })
    .setClassToggle(spyEl,'show') //classlist add 느낌이래
    .addTo(new ScrollMagic.Controller());//애니메이션 실행 하기위한 요소
});



