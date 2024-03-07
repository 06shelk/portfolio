// 페이지 로드 후 타이핑 애니메이션 시작
document.addEventListener("DOMContentLoaded", function () {
    animateTyping();
});

// 타이핑 애니메이션 함수
function animateTyping() {
    var typingElement = document.querySelector(".typing-animation");
    typingElement.innerHTML = ""; // 내용 초기화
    var text = "portfolio"; // 표시할 텍스트
    var textLength = text.length;

    // 각 글자를 span으로 감싸 타이핑 효과 적용
    for (var i = 0; i < textLength; i++) {
        var charSpan = document.createElement("span");
        charSpan.textContent = text[i];
        typingElement.appendChild(charSpan);
    }
}