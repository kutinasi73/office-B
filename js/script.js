document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const box = btn.closest('.faq-box');
            const answer = box.querySelector('.faq-answer');
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            // 1. ボタンの状態を更新
            btn.setAttribute('aria-expanded', !isOpen);
            
            // 2. 回答の表示・非表示を切り替え
            answer.hidden = isOpen;

            // 3. 【重要】親のboxに .is-open クラスを付け外しする
            // これでCSSの「下の角丸を消す」設定が発動します！
            box.classList.toggle('is-open', !isOpen);
        });
    });
});