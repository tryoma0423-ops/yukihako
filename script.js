// スマホ用メニュー（☰ボタン）の開け閉め
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// お問い合わせフォーム（課題用なので実際には送信しない）
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。\n※本サイトは講義課題のため、実際には送信されません。');
    form.reset();
  });
}
