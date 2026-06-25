export const notFound = {
  title: 'Not found',
  template: () => /* html */ `
    <section class="wa-stack wa-gap-l" style="padding: var(--wa-space-2xl) var(--wa-space-l); max-width: 60ch;">
      <h1 class="wa-heading-xl">404 — Not found</h1>
      <p class="wa-body-m wa-color-text-quiet">
        The page you're looking for doesn't exist.
      </p>
      <wa-button variant="brand" onclick="location.hash='#/'">
        <wa-icon slot="start" name="house"></wa-icon>
        Go home
      </wa-button>
    </section>
  `,
};
