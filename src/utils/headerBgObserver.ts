export default function () {
  const header = document.querySelector('.header')!;
  const invisibleEl = document.querySelector('.invisible')!;

  const observer = new IntersectionObserver(
    entries => {
      const el = entries[0];
      if (el.isIntersecting) {
        header.classList.remove('header__bg');
      } else {
        header.classList.add('header__bg');
      }
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(invisibleEl);
}
