import type { NextPage } from "next";

import { Container } from "utilities/Container";

const Home: NextPage = () => {
  return (
    <Container>
      {[
        {
          children: [
            {
              name: "button",
              props: {
                style: {
                  backgroundColor: "yellowgreen",
                },
                type: "button",
              },
            },
          ],
          name: "div",
          props: {
            className: "style",
            style: {
              backgroundColor: "deeppink",
              height: "100px",
              width: "100px",
            },
          },
        },
      ]}
    </Container>
  );
};

export default Home;
