const MAX_SNOWFLAKES = 80; // 限制最大雪花数量
let snowflakeCount = 0;
let snowflakeInterval;

// 当文档的可见性改变时调用此函数
function handleVisibilityChange() {
  if (document.hidden) {
    stopSnowing(); // 页面不可见，停止产生雪花
  } else {
    startSnowing(); // 页面可见，开始产生雪花
  }
}

function createSnowflake() {
  // 限制最大数量
  if (snowflakeCount >= MAX_SNOWFLAKES) {
    return;
  }

  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerText = '❄';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 25 + 25 + 's'; // 随机动画持续时间25-50秒
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

  document.body.appendChild(snowflake);
  snowflakeCount++;

  // 动画结束后移除雪花
  snowflake.addEventListener('animationend', function () {
    snowflake.remove();
    snowflakeCount--;
  });
}

function stopSnowing() {
  clearInterval(snowflakeInterval);
}

function startSnowing() {
  snowflakeInterval = setInterval(createSnowflake, 300);
}

// 初始化
document.addEventListener('visibilitychange', handleVisibilityChange, false);
startSnowing(); // 页面加载时开始下雪 