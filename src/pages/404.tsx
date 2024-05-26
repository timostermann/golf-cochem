import { type NextPage } from "next";
import { Container } from "@/components/Container";

const NotFound: NextPage = () => {
  return (
    <>
      <Container innerClassName="flex flex-col gap-16 py-12 min-h-[calc(100vh-40rem)]">
        Not found
      </Container>
    </>
  );
};

export default NotFound;
