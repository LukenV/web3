import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
