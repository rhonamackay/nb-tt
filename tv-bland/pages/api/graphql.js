import { graphql, buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = { hello: () => "Hello world!" };

export default async (req, res) => {
  const query = 'hello';
  const response = await graphql({schema, souce: query, root});

  return res.end(JSON.stringify(response));
};