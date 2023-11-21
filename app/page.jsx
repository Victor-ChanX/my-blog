import React from 'react';
import Layout from "components/Layout";
import HomeComponent from "../components/HomeComponent";

const Page = ({children}) => {
  return (
    <div>
      <Layout>
        <HomeComponent />
      </Layout>
    </div>
  );
};

export default Page;

