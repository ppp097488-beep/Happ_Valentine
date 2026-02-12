
const images = {
  page1: "images/page1.png",
  page4: "images/page4.jpg",
  page5: "images/page5.jpg",
  page6: "images/page6.jpg",
  page7a: "images/page7a.jpg",
  page7b: "images/page7b.jpg",
  page8: "images/page8.jpg",
  page9: "images/page9.jpg",
  page10: "images/page10.jpg",
};

const app = document.getElementById("app");
const bgm = document.getElementById("bgm");

function render(html){
  app.innerHTML = html;
}

function page1(){
  render(`
  <div class="page">
    <div class="card">
      <img src="${images.page1}" />
      <button class="primary" onclick="page2(); bgm.play();">Click</button>
    </div>
  </div>`);
}

function page2(){
  render(`<div class="page"><div class="card"><div id="typing" class="typewriter"></div><div id="btns"></div></div></div>`);

  const text = "Will you be my Valentine?";
  let i = 0;
  const typing = document.getElementById("typing");
  const interval = setInterval(()=>{
    typing.textContent += text[i];
    i++;
    if(i >= text.length){
      clearInterval(interval);
      document.getElementById("btns").innerHTML = `
        <button class="primary" onclick="page3()">Yes</button>
        <button id="noBtn" class="light">No</button>`;

      const noBtn = document.getElementById("noBtn");
      noBtn.addEventListener("mouseover",()=>{
        noBtn.style.position="absolute";
        noBtn.style.left=Math.random()*300+"px";
        noBtn.style.top=Math.random()*200+"px";
      });
    }
  },50);
}

function page3(){
  render(`
  <div class="page">
    <div class="card">
      <h2>Q. 지혁이한테 5억이 생긴다면?</h2>
      <button class="light" onclick="page4()">A. 혼자 다 쓰기</button>
      <button class="primary" onclick="page5()">B. 민정이랑 데이트 하는데 쓰기</button>
      <button class="secondary" onclick="page6()">C. 민정이 다~ 주기</button>
    </div>
  </div>`);
}

function page4(){
  render(`
  <div class="page">
    <div class="card">
      <img src="${images.page4}" />
      <p>민정이는 떠났고 지혁이는 거지가 돼었어요ㅠㅠ</p>
    </div>
    <button class="primary reselect" onclick="page3()">재선택</button>
  </div>`);
}

function page5(){
  render(`
  <div class="page">
    <div class="card">
      <img src="${images.page5}" />
      <p>사이가 좋아졌지만 발렌타인데이는 못 보내요..</p>
    </div>
    <button class="primary reselect" onclick="page3()">재선택</button>
  </div>`);
}

function page6(){
  render(`
  <div class="page">
    <div class="card">
      <img src="${images.page6}" />
      <p>민정이가 행복해해요!</p>
      <button class="secondary" onclick="page7()">발렌타인데이 보내기</button>
    </div>
  </div>`);
}

function page7(){
  render(`
  <div class="page">
    <div class="card">
      <h2>Q. 제일 귀여운 초콜릿은?</h2>
      <img src="${images.page7a}" onclick="page8()" />
      <img src="${images.page7b}" onclick="page9()" />
    </div>
  </div>`);
}

function page8(){
  render(`
  <div class="page">
    <div class="card">
      <img src="${images.page8}" />
      <p>진짜루..?ㅜㅜ</p>
    </div>
    <button class="primary reselect" onclick="page7()">재선택</button>
  </div>`);
}

function page9(){
  render(`
  <div class="page">
    <div class="card">
      <img src="${images.page9}" />
      <p>야호!!</p>
      <button class="primary" onclick="page10()">🍫</button>
    </div>
  </div>`);
}

function page10(){
  render(`
  <div class="page">
    <div class="card">
      <img src="${images.page10}" />
      <h2>Happy Valentine 💝</h2>
    </div>
  </div>`);
}

page1();


