let colors = ['#67c5e9', '#0273b9', '#004a93', '#2e3f7d', '#563c94', '#fce026', '#4e8e3a', '#012e23', '#f682b5', '#e82391'];
let cnv; // 用于存储画布对象
let sidebar; // 用于存储侧边栏 DOM 元素




function setup() {
  // 1. 【修改】设置画布大小为整个窗口的宽度和高度
  cnv = createCanvas(windowWidth, windowHeight);
  background(5); // 保持黑色背景




  // 2. 【新增】确保画布位于 (0, 0)
  cnv.position(0, 0);




  // 3. 获取侧边栏 DOM 元素 (保留菜单功能)
  sidebar = select('#sidebar');
   
    // 获取所有需要隐藏的容器（包括新增的）
    let lectureContainer = select('#iframe-container');
    let quizContainer = select('#quiz-iframe-container');
    let homeContent = select('#home-content');
    let workContainer = select('#unit1-work-container');
    let quizNotesContainer = select('#quiz-notes-container');
    let workNotesContainer = select('#work-notes-container');
    let tkuContainer = select('#tku-container'); // 新增




  // 设置第一单元作品的点击事件
  select('#unit1-work').mousePressed(function() {
    let workIframe = select('#unit1-work-iframe');
   
    // 隐藏所有其他内容
    lectureContainer.style('display', 'none');
    quizContainer.style('display', 'none');
    homeContent.style('display', 'none');
    quizNotesContainer.style('display', 'none');
    workNotesContainer.style('display', 'none');
    tkuContainer.style('display', 'none'); // 新增


    // 切换作品容器显示状态
    if (workContainer.style('display') === 'none') {
      workIframe.attribute('src', 'https://lyanyu975-boop.github.io/20251110./');
      workContainer.style('display', 'block');
    } else {
      workContainer.style('display', 'none');
      workIframe.attribute('src', '');
    }
  });


  // 4. 设置第一单元讲义的点击事件
  select('#lecture-notes').mousePressed(function() {
    let lectureIframe = select('#lecture-iframe');
   
    // 隐藏所有其他内容
    quizContainer.style('display', 'none');
    homeContent.style('display', 'none');
    workContainer.style('display', 'none');
    quizNotesContainer.style('display', 'none');
    workNotesContainer.style('display', 'none');
    tkuContainer.style('display', 'none'); // 新增
   
    // 切换讲义容器显示状态
    if (lectureContainer.style('display') === 'none') {
      lectureIframe.attribute('src', 'https://hackmd.io/@04fMwW4jRiynXYgw6Je4mw/SJBbvXCogg');
      lectureContainer.style('display', 'block');
    } else {
      lectureContainer.style('display', 'none');
      lectureIframe.attribute('src', '');
    }
  });


  // 5. 设置测验系统的点击事件
  select('#quiz-system').mousePressed(function() {
    let quizIframe = select('#quiz-iframe');
   
    // 隐藏所有其他内容
    lectureContainer.style('display', 'none');
    homeContent.style('display', 'none');
    workContainer.style('display', 'none');
    quizNotesContainer.style('display', 'none');
    workNotesContainer.style('display', 'none');
    tkuContainer.style('display', 'none'); // 新增
   
    // 切换测验容器显示状态
    if (quizContainer.style('display') === 'none') {
      quizIframe.attribute('src', 'https://lyanyu975-boop.github.io/20251115./');
      quizContainer.style('display', 'block');
    } else {
      quizContainer.style('display', 'none');
      quizIframe.attribute('src', '');
    }
  });


    // 6. 设置测验卷笔记的点击事件
    select('#quiz-notes').mousePressed(function() {
        let quizNotesIframe = select('#quiz-notes-iframe');
       
        // 隐藏所有其他内容
        lectureContainer.style('display', 'none');
        quizContainer.style('display', 'none');
        homeContent.style('display', 'none');
        workContainer.style('display', 'none');
        workNotesContainer.style('display', 'none');
        tkuContainer.style('display', 'none'); // 新增


        // 切换笔记容器显示状态
        if (quizNotesContainer.style('display') === 'none') {
            quizNotesIframe.attribute('src', 'about:blank');
            quizNotesContainer.style('display', 'block');
        } else {
            quizNotesContainer.style('display', 'none');
            quizNotesIframe.attribute('src', '');
        }
    });


    // 7. 设置作品笔记的点击事件
    select('#work-notes').mousePressed(function() {
        let workNotesIframe = select('#work-notes-iframe');
       
        // 隐藏所有其他内容
        lectureContainer.style('display', 'none');
        quizContainer.style('display', 'none');
        homeContent.style('display', 'none');
        workContainer.style('display', 'none');
        quizNotesContainer.style('display', 'none');
        tkuContainer.style('display', 'none'); // 新增


        // 切换笔记容器显示状态
        if (workNotesContainer.style('display') === 'none') {
            workNotesIframe.attribute('src', 'about:blank');
            workNotesContainer.style('display', 'block');
        } else {
            workNotesContainer.style('display', 'none');
            workNotesIframe.attribute('src', '');
        }
    });


    // 8. 【新增】设置淡江大學的点击事件
    select('#tku-link').mousePressed(function() {
        let tkuIframe = select('#tku-iframe');
       
        // 隐藏所有其他内容
        lectureContainer.style('display', 'none');
        quizContainer.style('display', 'none');
        homeContent.style('display', 'none');
        workContainer.style('display', 'none');
        quizNotesContainer.style('display', 'none');
        workNotesContainer.style('display', 'none');


        // 切换淡江大學容器显示状态
        if (tkuContainer.style('display') === 'none') {
            tkuIframe.attribute('src', 'https://www.tku.edu.tw/'); // 链接到淡江大学首页
            tkuContainer.style('display', 'block');
        } else {
            tkuContainer.style('display', 'none');
            tkuIframe.attribute('src', '');
        }
    });




  // 9. 设置回到首页的点击事件
  select('#home-link').mousePressed(function() {
   
    // 隐藏所有内容
    lectureContainer.style('display', 'none');
    quizContainer.style('display', 'none');
    workContainer.style('display', 'none');
    quizNotesContainer.style('display', 'none');
    workNotesContainer.style('display', 'none');
    tkuContainer.style('display', 'none'); // 新增


    // 清除所有 iframe 源
    select('#lecture-iframe').attribute('src', '');
    select('#quiz-iframe').attribute('src', '');
    select('#unit1-work-iframe').attribute('src', '');
    select('#quiz-notes-iframe').attribute('src', '');
    select('#work-notes-iframe').attribute('src', '');
    select('#tku-iframe').attribute('src', ''); // 新增
   
    // 显示首页内容
    homeContent.style('display', 'block');
  });




  // 额外：确保页面背景为黑色，且移除默认的边距
  document.body.style.backgroundColor = '#000000';
  document.body.style.margin = '0';
  document.body.style.overflow = 'hidden'; // 防止滚动条出现
}




function draw() {
  // 菜单滑出/隐藏的逻辑：当鼠标 X 坐标小于 100 时滑出菜单
  if (mouseX < 100) {
    sidebar.class('active');
  } else {
    sidebar.removeClass('active');
  }




  // 以下是您原有的绘图代码
  for(let i=0; i<20; i++){
    let x = random(-0.1, 1.1) * width;
    let y = random(-0.1, 1.1) * height;
    stroke(random(colors));
    wlkr(x, y);
    if(random()<0.5){
    noStroke();
    fill(random(colors));
    circle(x, y, random(random(random(50))));
    }
  }
}




function wlkr(x, y){
  for(let i=0; i<1000; i++){
    point(x, y);
    // 使用 noise() 生成更平滑的路径
    let a = noise(x*0.005, y*0.005, i*0.001)*10;
    // 将其移动方向与随机位移结合
    x += cos(a) + (random(-1, 1)*2);
    y += sin(a) + (random(-1, 1)*2);
  }
}




function keyPressed(){
  if(key == 's'){
    save(day() + '_' +month() + '_' +year() + '_' +hour() + '_' + minute() +'_' + second());
  }
  if(key == ' '){
    noLoop();
  }
}




// 【修改】确保窗口大小变化时画布依然保持全屏
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cnv.position(0, 0); // 确保位置始终在 (0, 0)
}

