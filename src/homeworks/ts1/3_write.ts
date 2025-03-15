import { randomBytes } from 'crypto';

type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type Operation = Cost | Profit;

const randomId = (): string => randomBytes(16).toString('hex');
const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const CATEGORY_NAMES = ['Food', 'Electronics', 'Books', 'Clothing', 'Home', 'Salary', 'Investment', 'Sale'];
const PRODUCT_NAMES = ['Gloves', 'Fish', 'Chicken', 'Shirt', 'Mouse', 'Table', 'Keyboard', 'Hat'];
const PRODUCT_DESC = [
  'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
  'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
  'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
  'The Football Is Good For Training And Recreational Purposes',
];
const OPERATION_NAMES = ['Interest', 'Taxes', 'Impairment charges', 'Rent', 'Salaries', 'Benefits', 'Commissions'];

const generateCategory = (): Category => ({
  id: randomId(),
  name: randomChoice(CATEGORY_NAMES),
  photo: Math.random() > 0.5 ? `https://picsum.photos/200?random=${randomId()}` : undefined,
});

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const hasOldPrice = Math.random() > 0.5;
  const hasDesc = Math.random() > 0.5;
  const price = randomInt(10, 1000);

  return {
    id: randomId(),
    name: randomChoice(PRODUCT_NAMES),
    photo: `https://picsum.photos/200?product=${randomId()}`,
    desc: hasDesc ? randomChoice(PRODUCT_DESC) : undefined,
    createdAt,
    oldPrice: hasOldPrice ? price + randomInt(50, 200) : undefined,
    price,
    category: generateCategory(),
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const isCost = Math.random() > 0.5;
  const amount = randomInt(10, 10000);
  const type = isCost ? 'Cost' : 'Profit';

  return {
    id: randomId(),
    name: randomChoice(OPERATION_NAMES),
    desc: undefined,
    createdAt,
    amount: isCost ? -amount : amount,
    category: generateCategory(),
    type: type,
  };
};
