const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async() => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: "Hoodies" },
        { name: "T-Shirts" },
        { name: 'Acessories' },
        { name: 'Music' },
        { name: 'Home Decor' },
        { name: 'Sale' }
    ]);

    console.log('Categories have been added/updated');

    await Product.deleteMany();

    const products = await Product.insertMany([
        //Category [0] - Hoodies
        {
            name: 'Grace and Faith Unisex Hoodie',
            description: "Everyone needs a cozy go-to cozy hoodie to curl up in, so go for one that's soft, smooth, and stylish. It's the perfect choice for cooler evenings!",
            image: 'grace_faith.jpg',
            category: categories[0]._id,
            price: 44.99,
            quantity: 500,
            sizes: ['XS', 'S', 'M', 'L', 'XL']
        },
        {
            name: "That's My God Unisex Hoodie",
            description: "Wear a constant reminder of all the things God is with this T-Shirt. You'll have all of your friends and family saying, That's My God!",
            image: 'blessed_allover.jpg',
            category: categories[0]._id,
            price: 64.99,
            quantity: 500,
            sizes: ['XS', 'S', 'M', 'L', 'XL']

        },
        //Category [1] - Tees
        {
            name: 'I Fight With My Faith Unisex Tee',
            description: "This t-shirt is everything you've dreamed of and more. It feels soft and lightweight, with the right amount of stretch.",
            image: 'faith_fight.jpg',
            category: categories[1]._id,
            price: 24.99,
            quantity: 500,
            sizes: ['XS', 'S', 'M', 'L', 'XL']

        },
        {
            name: 'Christian Unisex Tee',
            category: categories[1]._id,
            description: "This t-shirt is everything you've dreamed of and more. It feels soft and lightweight, with the right amount of stretch. It's comfortable and flattering for both men and women.",
            image: 'christian.jpg',
            price: 24.99,
            quantity: 500,
            sizes: ['XS', 'S', 'M', 'L', 'XL']

        },
        {
            name: 'Blessed All Over Unisex Tee',
            category: categories[1]._id,
            description: "Handmade with premium wear resistent fabric, this carefully crafted tee is a daily wardrobe essential. Dressed up or down, our Men's Tee offers complete comfort and style.",
            image: 'blessed_allover_tee.jpg',
            price: 38.99,
            quantity: 500,
            sizes: ['XS', 'S', 'M', 'L', 'XL']

        },
        //Category [2] Accessories
        {
            name: "She's Blessed Beanie",
            category: categories[2]._id,
            description: "A snug, form-fitting beanie. It's not only a great head-warming piece but a staple accessory in anyone's wardrobe.",
            image: 'shes_blessed.JPG',
            price: 19.99,
            sizes: 'OS',
            quantity: 200
        },
        {
            name: "He's Blessed Beanie",
            category: categories[2]._id,
            description: "A snug, form-fitting beanie. It's not only a great head-warming piece but a staple accessory in anyone's wardrobe.",
            image: 'hes_blessed.JPG',
            price: 19.99,
            sizes: 'OS',
            quantity: 200
        },
        {
            name: "Blessed Phone Case",
            category: categories[2]._id,
            description: "This case looks sleek, but it's tough. Its solid construction fits your phone perfectly, and it protects from scratches, dust, oil, and dirt. The smooth finish also makes it stylish and easy to hold.",
            image: 'blessed_case.JPG',
            price: 24.99,
            sizes: 'OS',
            quantity: 300
        },
        //Category [3] Music
        {
            name: 'Curtis Henderson - Chapter 1 (Full Album)',
            category: categories[3]._id,
            description: "Listen to the debut album of Contemporary Gospel Artist, Curtis Henderson. Hear the hits track That's My God along with brand new songs and collaborations",
            image: 'chapter1.jpg',
            price: 12.50,
            quantity: 100
        },
        {
            name: "Curtis Henderson - That's My God (Single)",
            category: categories[3]._id,
            description: "Listen to the debut album of Contemporary Gospel Artist, Curtis Henderson. Hear the hits track That's My God along with brand new songs and collaborations",
            image: 'tmgsingle.jpg',
            price: 1.00,
            quantity: 100
        },
        //Category [4] Home Decor
        {
            name: "She's Blessed Pillow",
            category: categories[4]._id,
            description: 'Spice up your home with this soft, smooth, custom designed Throw Pillow. You can add a touch of comfort to any living space. Pillow insert not included.',
            image: 'shespillow.JPG',
            price: 19.97,
            quantity: 100
        },
        {
            name: "He's Blessed Pillow",
            category: categories[4]._id,
            description: 'Spice up your home with this soft, smooth, custom designed Throw Pillow. You can add a touch of comfort to any living space. Pillow insert not included.',
            image: 'hespillow.JPG',
            price: 19.97,
            quantity: 100
        },

        //Category [5] Sale Items

        {
            name: "GCF Water Bottle (White)",
            category: categories[5]._id,
            description: 'Quench your thirst.',
            image: 'GCFwaterbottle.jpg',
            price: 69.99,
            quantity: 100,
            sizes: '32 oz.'
        },
        {
            name: "GCF Water Bottle (Black)",
            category: categories[5]._id,
            description: 'Quench your thirst.',
            image: 'GCFwaterbottle-b.png',
            price: 69.99,
            quantity: 100,
            sizes: '32 oz.'
        }
    ]);

    console.log('Products have been added/updated');

    await User.deleteMany();

    await User.create({
        firstName: 'Curtis',
        lastName: 'Henderson',
        email: 'curtis@testmail.com',
        password: '12345',
        orders: [{
            products: [products[0]._id, products[0]._id, products[1]._id]
        }]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });

    console.log('Test Users have been added');

    process.exit();
});