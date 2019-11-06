import { configure } from '@storybook/angular';

const req = require.context('../', true, /\.stories\.js$/); // <- import all the stories at once

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
