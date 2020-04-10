import { Application } from 'typedoc';
import { SolidityPlugin } from './plugin';

export = (host: Application) => {
  const plugin = new SolidityPlugin();
  plugin.initialize(host.application);
};
