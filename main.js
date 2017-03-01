// ==UserScript==
// @name remove-baidu-ad
// @namespace https://raw.githubusercontent.com/zhe-he/remove-baidu-ad/master/main.js
// @grant none
// @author zhe-he
// @include /^https?:\/\/www.baidu.com\//
// ==/UserScript==


function removeAd(){
    var topAd = [document.getElementById('content_right')];
    for(let i = 1; i < 10; i++){
        for(let j=1; j < 6; j++){
            let curAd = document.getElementById(`${i}00${j}`);
            if(curAd==null)break;
            topAd.push(curAd);
        }
    }
    topAd.forEach((item)=>item && item.remove());
 	nextPage();
  	setWidth();
  	setTimeout(minAd,2000);
}

removeAd();

window.addEventListener('popstate',removeAd,false);

function nextPage(){
     var aPage = document.querySelectorAll('#page > a');
    for(let i=0;i<aPage.length;i++){
        aPage[i].addEventListener('click',()=>{
            setTimeout(removeAd,2000);
        },false);
    }
}

function setWidth(){
  	var aResult = document.querySelectorAll('.result');
  	var oCon = document.getElementById('content_left');
  	for(let i=0;i<aResult.length;i++){
      	aResult[i].style.width = '100%';
    }
  	oCon.style.width = 'auto';
}

function minAd(){
  	var aAd = document.querySelectorAll('span.m');
  	for(let i=0;i<aAd.length;i++){
      	if(aAd[i].innerHTML == '广告'){
          	let parent = aAd[i].parentNode.parentNode;
          	if(/result/.test(parent.className)){
            	parent.remove();  
            }
        }
    }
}

