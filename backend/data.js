import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'shubham',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            mobile: 1234567898,
            isAdmin: true,
        },
        {
            name: 'tiwari',
            email: 'tiwari@example.com',
            password: bcrypt.hashSync('1234', 8),
            mobile: 7987654532,
            isAdmin: false,
        },
    ],
    products: [
        {

            name: 'Nike Slim Shirt',
            image: '/images/p1.jpg',
            price: 1200,
            description: 'high quality product',
        },
        {

            name: 'Adidas Fit Shirt',
            image: '/images/p2.jpg',
            price: 1000,
            description: 'high quality product',
        },
        {

            name: 'Lacoste Free Shirt',
            image: '/images/p3.jpg',
            price: 2200,
            description: 'high quality product',
        },
        {

            name: 'Nike Slim Pant',
            image: '/images/p4.jpg',
            price: 1780,
            description: 'high quality product',
        },
        {

            name: 'Puma Slim Pant',
            image: '/images/p5.jpg',
            price: 1650,
            description: 'high quality product',
        },
        {

            name: 'Adidas Fit Pant',
            image: '/images/p6.jpg',
            price: 1139,
            description: 'high quality product',
        },
        {

            name: 'Nike Slim_ Shirt',
            image: '/images/p1.jpg',
            price: 1200,
            description: 'high quality product',
        },
        {

            name: 'Adidas Fit_ Shirt',
            image: '/images/p2.jpg',
            price: 1000,
            description: 'high quality product',
        },
        {

            name: 'Lacoste Free_ Shirt',
            image: '/images/p3.jpg',
            price: 2200,
            description: 'high quality product',
        }
    ],
};
export default data;