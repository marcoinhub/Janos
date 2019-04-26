const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    name: String,
    age: Int
  }
`);

const root = { 
  name: () => 'gao',
  age: () => 15,
  rollDice: function ({numDice, numSides}) {
    var output = [];
    for (var i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
  }
};

const Controller = require('egg').Controller;

class GQLController extends Controller {
  async index() {
    const { ctx } = this;
    const { query } = ctx;
    const { queryParam } = query;
    const data = await graphql(schema, queryParam, root);

    ctx.body = {
      success: true,
      data: data.data,
    };
  }
}

module.exports = GQLController;
