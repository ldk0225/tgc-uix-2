import { NextPage } from 'next';
import { Suspense } from 'react';
import Component from "../component/Component";

const Home: NextPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};


export default Home;
