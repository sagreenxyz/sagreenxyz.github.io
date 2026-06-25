// Web Awesome — bundler-style imports.
// Styles: load the full bundle. To trim, swap for individual files under dist/styles/.
import '@awesome.me/webawesome/dist/styles/webawesome.css';

// Cherry-pick only the components used on the page.
// Icons are fetched from the Font Awesome CDN at runtime; no setBasePath needed
// unless you self-host icons. To use Font Awesome Pro, call setKitCode('YOUR_KIT').
import '@awesome.me/webawesome/dist/components/page/page.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/card/card.js';
import '@awesome.me/webawesome/dist/components/divider/divider.js';

// Site-specific styles.
import './styles.css';

// Hash-based client-side router.
import { startRouter } from './router.js';
startRouter();

