import React, { useEffect, useState } from "react";
import { Card, List } from "antd";
import axios from "axios";
import "./App.scss";
const { Meta } = Card;

const App = () => {
  const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-11-14&sortBy=publishedAt&apiKey=b8606e1d04574b46a00f384c125f48c5";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      const articles = res.data.articles;
      setData(articles);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          width: "100%",
          color: "#f06e38",
          margin: "2rem 0",
        }}
      >
        {" "}
        News App
      </h1>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      >
        <List
          size="large"
          bordered
          pagination={{
            pageSize: 6,
          }}
          dataSource={data}
          renderItem={(item) => {
            const { urlToImage, title, description, publishedAt, author } =
              item;
            return (
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={urlToImage} />}
              >
                {/* <Meta title={title} description={description} /> */}
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>{publishedAt}</h3>
                <h5>{author}</h5>
              </Card>
            );
          }}
        />
      </div>
    </>
  );
};
export default App;
