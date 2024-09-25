import { NextPage } from "next";
import TanstackProvider from "src/component/providers/TanstackProvider";
import Component from "../component/Component";

const Home: NextPage = () => {
  return (
    <TanstackProvider>
      <Component />
    </TanstackProvider>
  );
};

export default Home;
