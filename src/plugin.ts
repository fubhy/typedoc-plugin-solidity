import hljs from 'highlight.js';
// @ts-ignore
import { definer } from 'highlightjs-solidity';
import { Application } from 'typedoc';
import { Converter } from 'typedoc/dist/lib/converter';

export class SolidityPlugin {
  initialize(app: Application) {
    app.converter.on(Converter.EVENT_BEGIN, () => {
      hljs.registerLanguage('solidity', definer);
    });
  }
}
