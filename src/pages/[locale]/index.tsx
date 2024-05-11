import { type NextPage } from "next";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header
        homeHref={""}
        items={[]}
        navAriaLabelOpen={""}
        navAriaLabelClose={""}
      ></Header>
      <Container>Home</Container>
      <Footer columns={[]} lastRowLinks={[]}></Footer>
    </>
  );
};

export default Home;
