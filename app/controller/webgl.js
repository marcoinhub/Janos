'use strict';

const Controller = require('egg').Controller;

class WebglController extends Controller {
  async index() {
    await this.ctx.render('webgl.html');
  }
}

module.exports = WebglController;
