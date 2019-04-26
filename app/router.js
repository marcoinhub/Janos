'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/webgl', controller.webgl.index);
  router.get('/gql', controller.gql.index);
  router.get('/zone', controller.zone.index);
};
