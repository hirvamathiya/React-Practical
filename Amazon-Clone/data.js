import bcrypt from 'bcryptjs';

const data = {
     
     users : [
         {
           name : 'Hirva',
           email : 'hirva.m@gmail.com',
           password:bcrypt.hashSync('1234',8),
           isAdmin: true
         },
         {
          name : 'Yashvi',
          email : 'yashvimodi8@gmail.com',
          password:bcrypt.hashSync('4567',8),
          isAdmin: false
        },
        

     ],

    products: [
      {
        name: 'New Apple iPad',
        category: 'Electronic Items/ipad',
        image: '/images/p1.jpg',
        price: 29900,
        countInStock: 30,
        brand: 'Apple',
        rating: 4.5,
        numReviews: 30,
        description: 'New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Silver (Latest Model, 8th Generation by Apple',
      },
      {
        name:'New Apple iPad Pro ',
        category: 'Electronics Item/ipad',
        image: '/images/p2.jpg',
        price: 71900,
        countInStock: 20,
        brand: 'Apple',
        rating: 4.5,
        numReviews: 10,
        description: 'New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation) by Apple',
      },
      {
        
        name: 'Alexa Smart Home ',
        category: 'Electronic Items/Smart Item',
        image: '/images/p8.jpg',
        price: 10000,
        countInStock: 25,
        brand: 'Amazon',
        rating: 4.5,
        numReviews: 35,
        description:'Amazon Echo Smart speaker with Alexa',
      },
      {
        
        name: 'Apple MacBook Pro ',
        category: 'Electronic Items/ipad',
        image: '/images/p4.jpg',
        price: 99990,
        countInStock: 15,
        brand: 'Apple',
        rating: 4.5,
        numReviews: 24,
        description: '13-inch, 8GB RAM, 256GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Magic Keyboard- Space Grey',
      },
      {
        name: 'Boat Watch',
        category: 'Electronic Items/Watches',
        image: '/images/p5.jpg',
        price: 2499,
        countInStock: 3,
        brand: 'Boat',
        rating: 4,
        numReviews: 15,
        description: '1.3 Inches LCD Display with multiple strap colors',
      },
      {
        name: 'Motorola Escape 210 Headphones',
        category: 'Electronic Items/Headphone',
        image: '/images/p6.jpg',
        price: 1799,
        countInStock: 12,
        brand: 'Motorola',
        rating: 3.5,
        numReviews: 15,
        description: 'Motorola Escape 210 Over-Ear Bluetooth Headphones with Alexa Black',
      },
      {
        
        name: 'Motorola Escape 210 Earphones',
        category: 'Electronic Items/Earphone',
        image: '/images/p7.jpg',
        price: 399,
        countInStock: 12,
        brand: 'Motorola',
        rating: 3,
        numReviews: 10,
        description: 'Motorola Pace 100 in-Ear Headphones with Mic & Alexa Built-in(Black)'
      },
    ],
  };
  export default data;