export const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Products",
    path: "/Products",
  },
];

export const products = [
  {
    img: "https://picsum.photos/300/300?random1",
    title: "Wireless Bluetooth Headphones",
    price: 99.99,
    ratings: 4.5,
    category: "Electronics",
    brand: "VisionTech",
    description:
      "High-quality over-ear headphones with noise-cancellation and long battery life.",
    date: 1625078400000,
  },
  {
    img: "https://picsum.photos/300/300?random11",
    title: "Men's Leather Jacket",
    price: 129.99,
    ratings: 4.8,
    category: "Fashion",
    brand: "UrbanStyle",
    description:
      "Stylish black leather jacket with a slim fit and durable finish.",
    date: 1625078400000,
  },
  {
    img: "https://picsum.photos/300/300?random21",
    title: "Stainless Steel Cookware Set",
    price: 199.99,
    ratings: 4.7,
    category: "Home and Kitchen",
    brand: "BrewMaster",
    description:
      "10-piece stainless steel cookware set with durable and non-stick coating.",
    date: 1625078400000,
  },
  {
    img: "https://picsum.photos/300/300?random22",
    title: "Electric Kettle",
    price: 39.99,
    ratings: 4.5,
    category: "Home and Kitchen",
    brand: "BrewMaster",
    description:
      "Fast-boiling electric kettle with auto-shutoff and stainless steel body.",
    date: 1627766400000,
  },
  {
    img: "https://picsum.photos/300/300?random31",
    title: "The Great Gatsby",
    price: 15.99,
    ratings: 4.8,
    category: "Books",
    brand: "Harper",
    description:
      "A classic novel by F. Scott Fitzgerald, exploring themes of wealth and the American Dream.",
    date: 1625078400000,
  },
  {
    img: "https://picsum.photos/300/300?random41",
    title: "Mountain Bike",
    price: 499.99,
    ratings: 4.7,
    category: "Sports and Outdoors",
    brand: "ZenFlex",
    description:
      "High-performance mountain bike with 21-speed gears and durable aluminum frame.",
    date: 1625078400000,
  },
  {
    img: "https://picsum.photos/300/300?random42",
    title: "Camping Tent",
    price: 129.99,
    ratings: 4.8,
    category: "Sports and Outdoors",
    brand: "ZenFlex",
    description:
      "Waterproof 4-person tent with easy setup and sturdy weatherproof materials.",
    date: 1627766400000,
  },
  {
    img: "https://picsum.photos/300/300?random50",
    title: "Soccer Ball",
    price: 24.99,
    ratings: 4.6,
    category: "Sports and Outdoors",
    brand: "ZenFlex",
    description:
      "Official size and weight soccer ball with durable stitching and high visibility.",
    date: 1648771200000,
  },
];

export const showOptions = [{ number: 6 }, { number: 9 }, { number: 12 }];

export const sortOptions = [
  { name: "Default" },
  { name: "Newest" },
  { name: "Oldest" },
  { name: "Price: Low to High" },
  { name: "Price: High to Low" },
];

export const filters = [
  {
    _id: "1",
    title: "Categorys",
    options: [
      {
        _id: "1",
        label: "Electronics",
        img: "https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-682.jpg",
      },
      {
        _id: "2",
        label: "Fashion",
        img: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        _id: "3",
        label: "Home and Kitchen",

        img: "https://media.designcafe.com/wp-content/uploads/2020/10/26182026/modular-kitchen-accessories-for-modern-homes.jpg",
      },
      {
        _id: "4",
        label: "Books",
        img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1723695980~exp=1723696580~hmac=da890aaea179af2b9911be4ab9ca4f96b9124edd38a8d36b5c66f44dc3c0951f",
      },
      {
        _id: "5",
        label: "Sports and Outdoors",
        img: "https://img.freepik.com/premium-vector/diverse-group-people-enjoying-outdoor-activities-running-cycling-mountain-view_1294240-10673.jpg?w=740",
      },
    ],
  },

  {
    _id: "2",
    title: "Brand",
    options: [
      {
        _id: "1",
        label: "VisionTech",
      },
      {
        _id: "2",
        label: "UrbanStyle",
      },
      {
        _id: "3",
        label: "BrewMaster",
      },
      {
        _id: "4",
        label: "Harper",
      },
      {
        _id: "5",
        label: "ZenFlex",
      },
    ],
  },
];
