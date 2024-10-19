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
            realised: 1000,
            planned: 900,
          },
          EMEA: {
            realised: 400,
            planned: 350,
          },
          APAC: {
            realised: 250,
            planned: 200,
          },
          LATAM: {
            realised: 150,
            planned: 150,
          },
          NA: {
            realised: 200,
            planned: 200,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 600,
            planned: 550,
          },
          EMEA: {
            realised: 200,
            planned: 180,
          },
          APAC: {
            realised: 150,
            planned: 120,
          },
          LATAM: {
            realised: 100,
            planned: 100,
          },
          NA: {
            realised: 150,
            planned: 150,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 400,
            planned: 350,
          },
          EMEA: {
            realised: 200,
            planned: 170,
          },
          APAC: {
            realised: 100,
            planned: 80,
          },
          LATAM: {
            realised: 50,
            planned: 50,
          },
          NA: {
            realised: 50,
            planned: 50,
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
            realised: 700,
            planned: 650,
          },
          EMEA: {
            realised: 250,
            planned: 230,
          },
          APAC: {
            realised: 170,
            planned: 160,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 450,
            planned: 420,
          },
          EMEA: {
            realised: 120,
            planned: 110,
          },
          APAC: {
            realised: 100,
            planned: 90,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 250,
            planned: 230,
          },
          EMEA: {
            realised: 130,
            planned: 120,
          },
          APAC: {
            realised: 70,
            planned: 70,
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
            realised: 850,
            planned: 900,
          },
          EMEA: {
            realised: 300,
            planned: 320,
          },
          APAC: {
            realised: 210,
            planned: 220,
          },
          NA: {
            realised: 170,
            planned: 180,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 520,
            planned: 550,
          },
          EMEA: {
            realised: 140,
            planned: 150,
          },
          APAC: {
            realised: 120,
            planned: 130,
          },
          NA: {
            realised: 120,
            planned: 120,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 330,
            planned: 350,
          },
          EMEA: {
            realised: 160,
            planned: 170,
          },
          APAC: {
            realised: 90,
            planned: 90,
          },
          NA: {
            realised: 50,
            planned: 60,
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
            realised: 600,
            planned: 650,
          },
          EMEA: {
            realised: 190,
            planned: 210,
          },
          APAC: {
            realised: 140,
            planned: 170,
          },
          LATAM: {
            realised: 110,
            planned: 130,
          },
          NA: {
            realised: 160,
            planned: 140,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 500,
            planned: 480,
          },
          EMEA: {
            realised: 150,
            planned: 120,
          },
          APAC: {
            realised: 110,
            planned: 100,
          },
          LATAM: {
            realised: 80,
            planned: 90,
          },
          NA: {
            realised: 160,
            planned: 170,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 100,
            planned: 170,
          },
          EMEA: {
            realised: 40,
            planned: 70,
          },
          APAC: {
            realised: 30,
            planned: 60,
          },
          LATAM: {
            realised: 20,
            planned: 50,
          },
          NA: {
            realised: 10,
            planned: 40,
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
            realised: 1200,
            planned: 1150,
          },
          EMEA: {
            realised: 420,
            planned: 400,
          },
          APAC: {
            realised: 320,
            planned: 310,
          },
          LATAM: {
            realised: 260,
            planned: 250,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 700,
            planned: 680,
          },
          EMEA: {
            realised: 220,
            planned: 210,
          },
          APAC: {
            realised: 180,
            planned: 170,
          },
          LATAM: {
            realised: 160,
            planned: 150,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 500,
            planned: 470,
          },
          EMEA: {
            realised: 200,
            planned: 190,
          },
          APAC: {
            realised: 140,
            planned: 140,
          },
          LATAM: {
            realised: 100,
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
            realised: 1600,
            planned: 1500,
          },
          EMEA: {
            realised: 580,
            planned: 550,
          },
          APAC: {
            realised: 380,
            planned: 360,
          },
          LATAM: {
            realised: 250,
            planned: 240,
          },
          NA: {
            realised: 390,
            planned: 350,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 900,
            planned: 850,
          },
          EMEA: {
            realised: 280,
            planned: 260,
          },
          APAC: {
            realised: 230,
            planned: 210,
          },
          LATAM: {
            realised: 160,
            planned: 150,
          },
          NA: {
            realised: 230,
            planned: 230,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 700,
            planned: 650,
          },
          EMEA: {
            realised: 300,
            planned: 290,
          },
          APAC: {
            realised: 150,
            planned: 150,
          },
          LATAM: {
            realised: 90,
            planned: 90,
          },
          NA: {
            realised: 160,
            planned: 120,
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
            realised: 900,
            planned: 1100,
          },
          EMEA: {
            realised: 300,
            planned: 400,
          },
          APAC: {
            realised: 200,
            planned: 300,
          },
          LATAM: {
            realised: 180,
            planned: 280,
          },
          NA: {
            realised: 220,
            planned: 320,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 600,
            planned: 500,
          },
          EMEA: {
            realised: 200,
            planned: 150,
          },
          APAC: {
            realised: 150,
            planned: 100,
          },
          LATAM: {
            realised: 120,
            planned: 80,
          },
          NA: {
            realised: 180,
            planned: 120,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 300,
            planned: 600,
          },
          EMEA: {
            realised: 100,
            planned: 250,
          },
          APAC: {
            realised: 50,
            planned: 200,
          },
          LATAM: {
            realised: 60,
            planned: 200,
          },
          NA: {
            realised: 40,
            planned: 200,
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
            realised: 1100,
            planned: 1050,
          },
          EMEA: {
            realised: 380,
            planned: 360,
          },
          LATAM: {
            realised: 240,
            planned: 230,
          },
          NA: {
            realised: 280,
            planned: 260,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 650,
            planned: 620,
          },
          EMEA: {
            realised: 190,
            planned: 180,
          },
          LATAM: {
            realised: 140,
            planned: 130,
          },
          NA: {
            realised: 180,
            planned: 180,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 450,
            planned: 430,
          },
          EMEA: {
            realised: 190,
            planned: 180,
          },
          LATAM: {
            realised: 100,
            planned: 100,
          },
          NA: {
            realised: 100,
            planned: 80,
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
            realised: 1000,
            planned: 950,
          },
          APAC: {
            realised: 300,
            planned: 280,
          },
          LATAM: {
            realised: 200,
            planned: 190,
          },
          NA: {
            realised: 250,
            planned: 230,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 600,
            planned: 570,
          },
          APAC: {
            realised: 180,
            planned: 170,
          },
          LATAM: {
            realised: 120,
            planned: 110,
          },
          NA: {
            realised: 150,
            planned: 150,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 400,
            planned: 380,
          },
          APAC: {
            realised: 120,
            planned: 110,
          },
          LATAM: {
            realised: 80,
            planned: 80,
          },
          NA: {
            realised: 100,
            planned: 80,
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
            realised: 1500,
            planned: 1400,
          },
          EMEA: {
            realised: 550,
            planned: 520,
          },
          APAC: {
            realised: 350,
            planned: 330,
          },
          LATAM: {
            realised: 220,
            planned: 210,
          },
          NA: {
            realised: 380,
            planned: 340,
          },
        },
      },
      {
        id: "2",
        name: "cost",
        values: {
          World: {
            realised: 850,
            planned: 800,
          },
          EMEA: {
            realised: 280,
            planned: 260,
          },
          APAC: {
            realised: 220,
            planned: 200,
          },
          LATAM: {
            realised: 150,
            planned: 140,
          },
          NA: {
            realised: 200,
            planned: 200,
          },
        },
      },
      {
        id: "3",
        name: "profit",
        values: {
          World: {
            realised: 650,
            planned: 600,
          },
          EMEA: {
            realised: 270,
            planned: 260,
          },
          APAC: {
            realised: 130,
            planned: 130,
          },
          LATAM: {
            realised: 70,
            planned: 70,
          },
          NA: {
            realised: 180,
            planned: 140,
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
    unit: "mil USD",
  },
  {
    id: 2,
    name: KPIName.COST,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    calculation:
      "Total Cost = Asset Cost + Depreciation + Amortization + Labor Cost + Materials Cost + Other Cost",
    unit: "mil USD",
  },
  {
    id: 3,
    name: KPIName.PROFIT,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    calculation: "Profit = Revenue - Total Cost",
    unit: "mil USD",
  },
];

export { assets, kpis };
