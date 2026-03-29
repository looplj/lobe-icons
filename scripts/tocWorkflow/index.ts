import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import * as Icons from '../../src/icons';
import { customKebabCase } from './utils';

const rootDir = resolve(__dirname, '../..');

const run = () => {
  const list = Object.entries(Icons).map(([key, Icon]: [string, any]) => {
    return {
      color: Icon.colorPrimary,
      colorGradient: Icon?.colorGradient,
      desc: Icon.title,
      docsUrl: customKebabCase(key),
      fullTitle: Icon.title,
      group: 'model',
      id: key,
      param: {
        hasAvatar: !!Icon?.Avatar,
        hasBrand: !!Icon?.Brand,
        hasBrandColor: !!Icon?.BrandColor,
        hasColor: !!Icon?.Color,
        hasCombine: !!Icon?.Combine,
        hasText: !!Icon?.Text,
        hasTextCn: !!Icon?.TextCn,
        hasTextColor: !!Icon?.hasTextColor,
      },
      title: Icon.title,
    };
  });

  const content = `export interface IconToc {
  color: string;
  colorGradient?: string;
  desc: string;
  docsUrl: string;
  fullTitle: string;
  group: 'model' | 'provider' | 'application';
  id: string;
    param: {
    hasAvatar: boolean;
    hasBrand: boolean;
    hasBrandColor: boolean;
    hasColor: boolean;
    hasCombine: boolean;
    hasText: boolean;
    hasTextCn: boolean;
    hasTextColor: boolean;
  };
  title: string;
}

const toc: IconToc[] = ${JSON.stringify(list, null, 2)}

export default toc;`;

  writeFileSync(resolve(rootDir, 'src/toc.ts'), content);
};

run();
