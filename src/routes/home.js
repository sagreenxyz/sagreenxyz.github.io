export const home = {
  title: 'Home',
  template: () => /* html */ `
    <section class="wa-stack wa-gap-l" style="padding: var(--wa-space-2xl) var(--wa-space-l);">
      <h1 class="wa-heading-2xl">Hello, I'm sagreen.</h1>
      <p class="wa-body-l wa-color-text-quiet">
        A personal site built with Web Awesome.
      </p>
      <div class="wa-cluster wa-gap-s">
        <wa-button variant="brand" appearance="filled" onclick="location.hash='#/projects'">
          <wa-icon slot="start" name="rocket"></wa-icon>
          See projects
        </wa-button>
        <wa-button appearance="outlined" onclick="location.hash='#/about'">About me</wa-button>
      </div>
    </section>
  `,
};
