const recipes = [
   {
      id: "ec011fff-006a-47ec-839a-67811e2d49f1",
      title: "Buffalo Chicken Wrap",
      cookTime: "20-30 mins",
      servingSize: "1",
      mealFor: "dinner",
      userId: "9b607c36-4103-4f01-afff-d06e7737a116",
      ingredients: [
         {
            id: "a1c37620-27fa-4f7a-8d00-2a130a2d7e64",
            ingredient: "chicken thighs",
            amount: "1 pound",
            isInStock: true,
         },
         {
            id: "de85c9c8-1d09-4e70-917a-27a1243cf8ca",
            ingredient: "carrot",
            amount: "1",
            isInStock: true,
         },
         {
            id: "3ce5fc6a-6943-439b-9e3e-6527ffb8e525",
            ingredient: "tomatoes",
            amount: "3",
            isInStock: true,
         },
      ],

      directions:
         "chop the chicken, toast the bread, stir the pot, melt the chesse, dont put too much milk.",
      favorites: true,
   },
   {
      id: "4a481e74-a05c-4148-a0c3-e6b7d959fba0",
      title: "Cheese Pizza",
      cookTime: "20-30 mins",
      servingSize: "4",
      mealFor: "dinner",
      userId: "ee2e843d-e2e1-47ab-8ae7-0ec501bd6864",

      ingredients: [
         {
            id: "10a88863-3ebe-463d-b28a-58b19a532098",
            ingredient: "chesse",
            amount: "1 pound",
            isInStock: true,
         },
         {
            id: "bcf9e655-c839-4b03-9874-5fc7f0be5933",
            ingredient: "pizza sauce",
            amount: "1 jar",
            isInStock: true,
         },
         {
            id: "07c7c751-3d49-44ed-a745-a4471d9dc460",
            ingredient: "pizza dough",
            amount: "3",
            isInStock: true,
         },
      ],

      directions:
         "speard the sauce, add lots of cheese, 375 degree oven for 25 mins,till cheese is melted.",
      favorites: false,
   },
   {
      id: "c7917ecd-ccc6-4512-8cce-b5f0dcba1f25",
      title: "Veggie Burrito",
      cookTime: "10-20 mins",
      servingSize: "2",
      mealFor: "dinner",
      userId: "68247db4-ab28-4e05-ba10-90a6f6360e56",
      ingredients: [
         {
            id: "1ffe90f5-fbf1-4114-8253-058d998b9efa",
            ingredient: "black beans",
            amount: "1 can",
            isInStock: true,
         },
         {
            id: "241b55e1-e869-4e14-9082-4f5ae03351ec",
            ingredient: "onions",
            amount: "quarter",
            isInStock: true,
         },
         {
            id: "fb3f5de4-97dd-4d1f-9541-bfa3c8aed503",
            ingredient: "green peppers",
            amount: "3",
            isInStock: true,
         },
      ],

      directions: "chop veggies,add to flour tortilla,.",
      favorites: false,
   },
   {
      id: "1e47bd90-51bf-45c1-bae3-2089942cd872",
      title: "Avocado Toast",
      cookTime: "10-20 mins",
      servingSize: "3",
      mealFor: "brunch",
      userId: "a0ded867-644b-448d-a441-8aff79044ec6",

      ingredients: [
         {
            id: "beb3e34a-8495-4353-8cff-56339f90ee53",
            ingredient: "avocado",
            amount: "1",
            isInStock: true,
         },
         {
            id: "10a88863-3ebe-463d-b28a-58b19a532098",
            ingredient: "cheese",
            amount: "1 cup",
            isInStock: true,
         },
         {
            id: "5583ed6b-8bd1-426d-8afa-c4469860ac73",
            ingredient: "egg",
            amount: "3",
            isInStock: true,
         },
         {
            id: "071b8371-c555-4b35-84c2-dff7b8fd9d47",
            ingredient: "bread",
            amount: "3 slices",
            isInStock: true,
         },
      ],

      directions:
         "cut the avocado, toast the bread, add some cheese before tomatoes",
      favorites: true,
   },
];
export default recipes;
