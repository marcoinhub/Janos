'use strict';

module.exports = appInfo => {

  return {
    keys: appInfo.name + '_1548000373583_802',
    middleware: [],
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.html': 'nunjucks',
      },
    },
  };
};
