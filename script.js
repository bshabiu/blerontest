window.addEventListener('scroll', function() {
     var companyInfo = document.querySelector('.company-info');
     var subtitle = document.querySelector('.subtitle');
     var logo = document.querySelector('.logo img');
 
     var scrollPosition = window.scrollY;
 
     companyInfo.style.transform = 'translateX(' + scrollPosition * -0.5 + 'px)';
     subtitle.style.transform = 'translateX(' + scrollPosition * -0.5 + 'px)';
     logo.style.transform = 'translateX(' + scrollPosition * 0.5 + 'px)';
 });
 