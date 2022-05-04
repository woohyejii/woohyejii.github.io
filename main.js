let myImage =  document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
        myImage.setAttribute
    ('src', 'images/image.jpg')
    }else{
        myImage.setAttribute
    ('src','images/firefox.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool,' + 
        myName;
    }
}

/*
myName에 할당된 값이 없거나 null일 때, 
setUserName()함수를 처음부터 다시 실행합니다. 
값이 있으면(위의 if 조건이 not true일 때) localStorage에 값을 저장하고 헤딩의 텍스트에 값을 설정합니다.
*/

if(!localStorage.getItem('name')){
    setUserName();
}else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,' +
    storeName;
}
myButton.onclick = function() {
    setUserName();
}

/*
참고: <script> 요소를 HTML 파일의 맨 아래쪽 근처에 둔 이유는 
HTML은 파일 내에 나타나는 순서대로 브라우저에 로드(load)되기 때문입니다. 
만약 자바스크립트가 먼저 로드되고 자신의 아래 쪽에 있는 HTML에 영향을 준다고 하면, 
영향을 줄 HTML 보다 먼저 자바스크립트가 로드되기 때문에 작동하지 않을 것입니다. 
따라서, HTML 페이지의 맨 아래쪽 근처에 자바스크립트를 두는 것이 최고의 전략입니다.
*/

/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
참고: 위에서 사용한 두 기능은 모두 문서를 
조작(manipulate)할 때 사용하는 
문서 객체 모델(Document Object Model;DOM) API의 일부입니다.
*/