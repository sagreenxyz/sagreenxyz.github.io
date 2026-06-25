export const contact = {
  title: 'Contact',
  template: () => /* html */ `
    <section class="wa-stack wa-gap-l" style="padding: var(--wa-space-2xl) var(--wa-space-l); max-width: 60ch;">
      <h1 class="wa-heading-xl">Contact</h1>
      <p class="wa-body-m wa-color-text-quiet">
        The best way to reach me is on the platforms below.
      </p>
      <div class="wa-cluster wa-gap-m">
        <wa-button appearance="outlined" href="https://github.com/sagreenxyz" target="_blank" rel="noopener">
          <wa-icon slot="start" name="github" family="brands"></wa-icon>
          GitHub
        </wa-button>
      </div>
    </section>
  `,
};
