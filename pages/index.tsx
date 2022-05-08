import type { NextPage } from "next";

import { Container } from "utilities/Container";

const Home: NextPage = () => {
  return (
    <Container>
      {[
        {
          name: "svg",
          props: {
            viewBox: "0 0 300 100",
          },
        },
        {
          children: [
            {
              name: "Cat",
              props: {
                snuggly: true,
              },
            },
            {
              name: "Dog",
            },
            {
              name: "Robot",
              props: {
                taste: "zingy",
              },
            },
          ],
          name: "div",
          props: {
            className: "style",
            contentEditable: true,
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
