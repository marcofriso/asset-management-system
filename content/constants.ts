import { Asset, KPI, KPIName } from "./types";

const assets: Asset[] = [
  {
    id: 1,
    name: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "EMEA", "APAC", "LATAM", "NA"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 580,
            planned: 500,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 580,
            planned: 500,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 580,
            planned: 500,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "EMEA", "APAC"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 340,
            planned: 300,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 340,
            planned: 300,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 340,
            planned: 300,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
        },
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "EMEA", "APAC", "NA"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 500,
            planned: 500,
          },
          EMEA: {
            realised: 220,
            planned: 250,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 500,
            planned: 500,
          },
          EMEA: {
            realised: 220,
            planned: 250,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 500,
            planned: 500,
          },
          EMEA: {
            realised: 220,
            planned: 250,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
    ],
  },
  {
    id: 4,
    name: "Product 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "EMEA", "APAC", "LATAM", "NA"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 580,
            planned: 900,
          },
          EMEA: {
            realised: 220,
            planned: 400,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 300,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 580,
            planned: 900,
          },
          EMEA: {
            realised: 220,
            planned: 400,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 300,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 580,
            planned: 900,
          },
          EMEA: {
            realised: 220,
            planned: 400,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 300,
          },
        },
      },
    ],
  },
  {
    id: 5,
    name: "Product 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "EMEA", "APAC", "LATAM"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 320,
            planned: 400,
          },
          EMEA: {
            realised: 120,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 320,
            planned: 400,
          },
          EMEA: {
            realised: 120,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 320,
            planned: 400,
          },
          EMEA: {
            realised: 120,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
        },
      },
    ],
  },
  {
    id: 6,
    name: "Product 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "EMEA", "APAC", "LATAM", "NA"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 420,
            planned: 400,
          },
          EMEA: {
            realised: 120,
            planned: 100,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          LATAM: {
            realised: 80,
            planned: 50,
          },
          NA: {
            realised: 100,
            planned: 100,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 420,
            planned: 400,
          },
          EMEA: {
            realised: 120,
            planned: 100,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          LATAM: {
            realised: 80,
            planned: 50,
          },
          NA: {
            realised: 100,
            planned: 100,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 420,
            planned: 400,
          },
          EMEA: {
            realised: 120,
            planned: 100,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          LATAM: {
            realised: 80,
            planned: 50,
          },
          NA: {
            realised: 100,
            planned: 100,
          },
        },
      },
    ],
  },
  {
    id: 7,
    name: "Product 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "EMEA", "APAC", "LATAM", "NA"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 620,
            planned: 400,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 620,
            planned: 400,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 620,
            planned: 400,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          APAC: {
            realised: 120,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
    ],
  },
  {
    id: 8,
    name: "Product 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "EMEA", "LATAM", "NA"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 620,
            planned: 400,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 620,
            planned: 400,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 620,
            planned: 400,
          },
          EMEA: {
            realised: 220,
            planned: 200,
          },
          LATAM: {
            realised: 80,
            planned: 100,
          },
          NA: {
            realised: 160,
            planned: 100,
          },
        },
      },
    ],
  },
  {
    id: 9,
    name: "Product 9",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "APAC", "LATAM", "NA"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 300,
            planned: 400,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          LATAM: {
            realised: 80,
            planned: 150,
          },
          NA: {
            realised: 100,
            planned: 100,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 300,
            planned: 400,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          LATAM: {
            realised: 80,
            planned: 150,
          },
          NA: {
            realised: 100,
            planned: 100,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 300,
            planned: 400,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          LATAM: {
            realised: 80,
            planned: 150,
          },
          NA: {
            realised: 100,
            planned: 100,
          },
        },
      },
    ],
  },
  {
    id: 10,
    name: "Product 10",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    areas: ["World", "EMEA", "APAC", "LATAM", "NA"],
    businessQuestions: [
      {
        title: "Question 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        title: "Question 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    kpis: [
      {
        id: "1",
        name: "sales",
        values: {
          World: {
            realised: 420,
            planned: 400,
          },
          EMEA: {
            realised: 120,
            planned: 100,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          LATAM: {
            realised: 80,
            planned: 50,
          },
          NA: {
            realised: 100,
            planned: 100,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 420,
            planned: 400,
          },
          EMEA: {
            realised: 120,
            planned: 100,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          LATAM: {
            realised: 80,
            planned: 50,
          },
          NA: {
            realised: 100,
            planned: 100,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 420,
            planned: 400,
          },
          EMEA: {
            realised: 120,
            planned: 100,
          },
          APAC: {
            realised: 120,
            planned: 150,
          },
          LATAM: {
            realised: 80,
            planned: 50,
          },
          NA: {
            realised: 100,
            planned: 100,
          },
        },
      },
    ],
  },
];

const kpis: KPI[] = [
  {
    id: 1,
    name: KPIName.SALES,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    calculation: "Sales = Number of Units Sold x Price per Unit",
    unit: "million USD",
  },
  {
    id: 2,
    name: KPIName.COST,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    calculation:
      "Total Cost = Asset Cost + Depreciation + Amortization + Labor Cost + Materials Cost + Other Cost",
    unit: "million USD",
  },
  {
    id: 3,
    name: KPIName.PROFIT,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    calculation: "Profit = Revenue - Total Cost",
    unit: "million USD",
  },
];

export { assets, kpis };
