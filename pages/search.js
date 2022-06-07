import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../Keys";
import Response from "../response";
import SearchResults from "../components/SearchResults";

const Search = ({ results }) => {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      {/* Header */}
      <Header />
      {/* Search Result */}
      <SearchResults results={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());
  console.log(data);

  // After the server has rendered ... pass the results to the client
  return {
    props: {
      results: data,
    },
  };
}
