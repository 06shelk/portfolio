document.addEventListener('DOMContentLoaded', function () {
    // 네비게이션 토글 버튼과 내비게이션 메뉴 요소를 가져옵니다.
    var navToggle = document.getElementById('nav_toggle');
    var navigationMenu = document.querySelector('.navigation ul');

    // 토글 버튼을 클릭했을 때 이벤트를 처리합니다.
    navToggle.addEventListener('click', function () {
      // 내비게이션 메뉴의 가시성을 토글합니다.
      navigationMenu.classList.toggle('visible');
    });
  });