export type CarData = {
  id: number;
  title: string;
  enName: string;
  imagePath: string;
  amount: number;
};

export type BestCarData = {
  highlightedTitle: string;
  title: string;
  description: string;
  moreProductsLink: string;
  selectedItem: number;
  carsData: CarData[];
};

export const BEST_CAR_DATA: BestCarData = {
  highlightedTitle: 'برترین',
  title: 'خودرو ها',
  description: 'لیست خودرو ها',
  moreProductsLink: '/products',
  selectedItem: 4,
  carsData: [
    {
      id: 1,
      title: 'پراید ۱۳۱',
      enName: 'pride-131',
      amount: 26,
      imagePath: 'https://files.wtrue.ir/images/cars/347601_58961_AMGPlus.png',
    },
    {
      id: 2,
      title: 'سمند',
      enName: 'samand',
      amount: 42,
      imagePath: 'https://files.wtrue.ir/images/cars/252014_36673_AMGPlus.jpg',
    },
    {
      id: 3,
      title: 'تیبا',
      enName: 'tiba',
      amount: 17,
      imagePath: 'https://files.wtrue.ir/images/cars/999284_36226_AMGPlus.png',
    },
    {
      id: 4,
      title: 'شاهین',
      enName: 'shahin',
      amount: 12,
      imagePath: 'https://files.wtrue.ir/images/cars/721055_73567_AMGPlus.png',
    },
    {
      id: 5,
      title: 'دنا',
      enName: 'dena',
      amount: 29,
      imagePath: 'https://files.wtrue.ir/images/cars/869470_26216_AMGPlus.png',
    },
    {
      id: 6,
      title: 'رانا',
      enName: 'rana',
      amount: 12,
      imagePath: 'https://files.wtrue.ir/images/cars/51226_31313_AMGPlus.png',
    },
    {
      id: 7,
      title: '207',
      enName: '207',
      amount: 16,
      imagePath: 'https://files.wtrue.ir/images/cars/930881_14171_AMGPlus.png',
    },
    {
      id: 8,
      title: 'ال 90',
      enName: '',
      amount: 6,
      imagePath: 'https://files.wtrue.ir/images/cars/1778917691_7l6U5q18M2.jpg',
    },
    {
      id: 9,
      title: '206',
      enName: '206',
      amount: 33,
      imagePath: 'https://files.wtrue.ir/images/cars/1778918542_yy2ExLisYa.png',
    },
    {
      id: 10,
      title: 'تارا اتومات',
      enName: 'Automatic-tara',
      amount: 8,
      imagePath: 'https://files.wtrue.ir/images/cars/1778925589_2t7JlPRytE.webp',
    },
    {
      id: 11,
      title: 'پارس',
      enName: 'pars',
      amount: 60,
      imagePath: 'https://files.wtrue.ir/images/cars/1780053345_sjwDECHaZD.jpg',
    },
    {
      id: 12,
      title: 'پژو 405',
      enName: 'pejout-405',
      amount: 74,
      imagePath: 'https://files.wtrue.ir/images/cars/1780122453_j8QishLTYd.jpg',
    },
    {
      id: 13,
      title: 'نیسان',
      enName: 'nissan',
      amount: 3,
      imagePath: 'https://files.wtrue.ir/images/cars/1780210717_RwaxTvcWGH.jpg',
    },
    {
      id: 14,
      title: 'ریو',
      enName: 'rio',
      amount: 4,
      imagePath: 'https://files.wtrue.ir/images/cars/884472_65809_AMGPlus.webp',
    },
    {
      id: 15,
      title: 'خودرو تنظیم نشده',
      enName: 'group-not-set',
      amount: 70,
      imagePath: 'https://files.wtrue.ir/images/cars/1782111918_QFOk6LC0HF.png',
    },
    {
      id: 16,
      title: 'ساینا',
      enName: 'saina',
      amount: 14,
      imagePath: 'https://files.wtrue.ir/images/cars/1783770081_cSpo2FBzhZ.jpg',
    },
    {
      id: 17,
      title: 'زانتیا',
      enName: 'xantia',
      amount: 2,
      imagePath: 'https://files.wtrue.ir/images/cars/1785144531_OSst8dJ5Cn.jpg',
    },
  ],
};
