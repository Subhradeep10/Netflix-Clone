import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import request from "../config";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={request.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={request.requestPopular} />
      <Row rowID="4" title="Top Rated" fetchURL={request.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={request.requestHorror} />
    </>
  );
};

export default Home;
