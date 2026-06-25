const items = [
  { title: 'Project one', summary: 'A short description of the project.' },
  { title: 'Project two', summary: 'A short description of the project.' },
  { title: 'Project three', summary: 'A short description of the project.' },
];

export const projects = {
  title: 'Projects',
  template: () => /* html */ `
    <section class="wa-stack wa-gap-l" style="padding: var(--wa-space-2xl) var(--wa-space-l);">
      <h1 class="wa-heading-xl">Projects</h1>
      <div class="wa-grid" style="--min-column-size: 16rem;">
        ${items
          .map(
            (p) => /* html */ `
              <wa-card>
                <strong>${p.title}</strong>
                <p class="wa-color-text-quiet">${p.summary}</p>
              </wa-card>
            `,
          )
          .join('')}
      </div>
    </section>
  `,
};
