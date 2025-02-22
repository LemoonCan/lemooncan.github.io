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
    
    // 点击时不自动选中
    emailAddress.addEventListener('mousedown', function(e) {
      e.preventDefault();
    });
  }
}); 