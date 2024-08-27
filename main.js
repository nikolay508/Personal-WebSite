import page from './node_modules/page/page.mjs';

import { showAboutView } from './views/aboutView.js';
import { showHomeView } from './views/homeView.js';
import { showServicesView } from './views/servicesView.js';
import { showWorkView } from './views/workView.js';

page('/', showHomeView);
page('/about', showAboutView);
page('/services', showServicesView);
page('/work', showWorkView);

page.start();
