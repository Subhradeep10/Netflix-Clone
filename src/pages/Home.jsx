import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../config";
import MetaData from "../utils/MetaData";
const Home = () => {
  return (
    <>
      <MetaData title="Netflix India-Watch TV Shows Online, Watch Movies Online" />
      <Main />
      <Row
        rowID="1"
        title="Recently Added"
        fetchURL={request.requestUpcoming}
      />
      <Row rowID="2" title="Trending Now" fetchURL={request.requestPopular} />
      <Row rowID="3" title="Top Rated" fetchURL={request.requestTopRated} />
      <Row rowID="4" title="Horror" fetchURL={request.requestHorror} />
    </>
  );
};

export default Home;
