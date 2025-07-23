// 구매하기 버튼 클릭 시 알림
const buyBtns = document.querySelectorAll('.buy-btn');
buyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('구매 기능은 데모용입니다.');
    });
});

// 문의 폼 제출 시 알림
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('문의가 정상적으로 접수되었습니다!');
        contactForm.reset();
    });
}
