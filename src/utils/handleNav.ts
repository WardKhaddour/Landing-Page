export function handelScroll(e: Event) {
  const el = <HTMLElement>e.target;
  if (el.tagName !== 'A') return;
  const aEl = <HTMLAnchorElement>el;
  console.log(aEl.href.split('#')[1]);

  document
    .getElementById(`#${aEl.href.split('#')[1]}`)!
    .scrollIntoView({ behavior: 'smooth' });

  handleSelectedLink(el);
}

export function handleSelectedLink(selectedEl: HTMLElement) {
  let activeLink = document.querySelector(
    '.header__nav--link__active-from-top'
  );
  if (!activeLink) {
    activeLink = document.querySelector(
      '.header__nav--link__active-from-bottom'
    );
  }

  const links = document.querySelectorAll('.header__nav--link a');

  if (activeLink === selectedEl) return;
  const activeLinkIdx = [...links].findIndex(el => el === activeLink);
  const elIdx = [...links].findIndex(el => el === selectedEl);
  links.forEach(el => {
    el.classList.remove('header__nav--link__active-from-bottom');
    el.classList.remove('header__nav--link__active-from-top');
  });
  if (elIdx > activeLinkIdx)
    selectedEl.classList.add('header__nav--link__active-from-top');
  else selectedEl.classList.add('header__nav--link__active-from-bottom');
}
