document.addEventListener('DOMContentLoaded', function() {
  const emailLink = document.querySelector('.social-link.email');
  const emailAddress = document.querySelector('.email-address');
  
  if (emailLink && emailAddress) {
    emailLink.addEventListener('mouseenter', function() {
      emailAddress.style.opacity = '1';
      emailAddress.style.visibility = 'visible';
    });
    
    emailLink.addEventListener('mouseleave', function() {
      emailAddress.style.opacity = '0';
      emailAddress.style.visibility = 'hidden';
      // 清除选中状态
      window.getSelection().removeAllRanges();
    });

    emailAddress.addEventListener('click', function() {
      const email = this.textContent;
      navigator.clipboard.writeText(email).then(() => {
          // 添加copied类显示提示
          this.classList.add('copied');
          
          // 2秒后移除提示
          setTimeout(() => {
              this.classList.remove('copied');
          }, 2000);
      }).catch(err => {
          console.error('复制失败:', err);
      });
    });
  }
}); 


