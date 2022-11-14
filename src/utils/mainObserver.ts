import { handleSelectedLink } from './handleNav';

export default function () {
  const mainElements = document.querySelector('.main')?.children!;
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const { id } = entry.target;
        if (entry.isIntersecting) {
          handleSelectedLink(
            document.querySelectorAll(`a[href='${id}']`)[0] as HTMLElement
          );
          location.href = id;
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  [...mainElements].forEach(el => observer.observe(el));
}
