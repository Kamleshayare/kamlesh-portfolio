export type ResourceType = "product";

export type ResourceItem = {
  title: string;
  type: ResourceType;
  url: string;
  tags: string[];
  author?: string;
  meta?: string;
  cover?: string;
};

export const resources: ResourceItem[] = [
  {
    title: "AirPods Max",
    type: "product",
    url: "/products/10001.png",
    author: "Apple",
    meta: "Audio",
    tags: ["Audio"],
    cover: "/products/10001.png",
  },
  {
    title: "MX Master Mouse",
    type: "product",
    url: "/products/10002.png",
    author: "Logitech",
    meta: "Accessories",
    tags: ["Accessories"],
    cover: "/products/10002.png",
  },
  {
    title: "Vision Pro",
    type: "product",
    url: "/products/10003.png",
    author: "Apple",
    meta: "Wearable",
    tags: ["Wearable"],
    cover: "/products/10003.png",
  },
  {
    title: "Studio Display",
    type: "product",
    url: "/products/10004.png",
    author: "Apple",
    meta: "Computing",
    tags: ["Computing"],
    cover: "/products/10004.png",
  },
  {
    title: "Apple Watch Ultra",
    type: "product",
    url: "/products/10005.png",
    author: "Apple",
    meta: "Wearable",
    tags: ["Wearable"],
    cover: "/products/10005.png",
  },
  {
    title: "MacBook Air",
    type: "product",
    url: "/products/10006.png",
    author: "Apple",
    meta: "Computing",
    tags: ["Computing"],
    cover: "/products/10006.png",
  },
  {
    title: "Ear (2)",
    type: "product",
    url: "/products/10007.png",
    author: "Nothing",
    meta: "Audio",
    tags: ["Audio"],
    cover: "/products/10007.png",
  },
  {
    title: "Concept SUV",
    type: "product",
    url: "/products/10008.png",
    meta: "Automotive",
    tags: ["Automotive"],
    cover: "/products/10008.png",
  },
  {
    title: "911 Turbo",
    type: "product",
    url: "/products/10009.png",
    author: "Porsche",
    meta: "Automotive",
    tags: ["Automotive"],
    cover: "/products/10009.png",
  },
  {
    title: "Mustang GT",
    type: "product",
    url: "/products/10010.png",
    author: "Ford",
    meta: "Automotive",
    tags: ["Automotive"],
    cover: "/products/10010.png",
  },
  {
    title: "Everyday Backpack",
    type: "product",
    url: "/products/10011.png",
    meta: "Accessories",
    tags: ["Accessories"],
    cover: "/products/10011.png",
  },
  {
    title: "Sling Bag",
    type: "product",
    url: "/products/10012.png",
    meta: "Accessories",
    tags: ["Accessories"],
    cover: "/products/10012.png",
  },
  {
    title: "Eames Lounge Chair",
    type: "product",
    url: "/products/10013.jpg",
    author: "Herman Miller",
    meta: "Furniture",
    tags: ["Furniture"],
    cover: "/products/10013.jpg",
  },
  {
    title: "Court Sneaker",
    type: "product",
    url: "/products/10014.png",
    meta: "Footwear",
    tags: ["Footwear"],
    cover: "/products/10014.png",
  },
];
