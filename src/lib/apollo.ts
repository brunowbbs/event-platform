import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4u0btm80er101ui8m9i6h66/master",
  cache: new InMemoryCache(),
});
