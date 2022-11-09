var ObjectID = require('mongodb').ObjectID;
const products = [
    {
      name: 'Airpods Wireless Bluetooth Headphones',
      image: '/images/airpods.jpg',
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      brand: 'Apple',
      category: 'Electronics',
      price: 89.99,
      countInStock: 3,
      rating: 0,
      reviews:[
        {name:'review1', rating: 1, comment: 'mon premier reviews',  user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review2', rating: 1, comment: 'mon deuxieme reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review3', rating: 1, comment: 'mon troisieme reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
      numReviews: 3,
    },
    {
      name: 'iPhone 11 Pro 256GB Memory',
      image: '/images/phone.jpg',
      description:
        'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
      brand: 'Apple',
      category: 'Electronics',
      price: 599.99,
      countInStock: 10,
      rating: 0,
      numReviews: 3,
      reviews:[
        {name:'review4', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review5', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review6', rating: 1, comment: 'mon trois reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },
    {
      name: 'Cannon EOS 80D DSLR Camera',
      image: '/images/camera.jpg',
      description:
        'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
      brand: 'Cannon',
      category: 'Electronics',
      price: 929.99,
      numReviews: 2,
      reviews:[
        {name:'review7', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review8', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },
    {
      name: 'Sony Playstation 4 Pro White Version',
      image: '/images/playstation.jpg',
      description:
        'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
      brand: 'Sony',
      category: 'Electronics',
      price: 399.99,
      numReviews: 2,
      reviews:[
        {name:'review9', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review10', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },
    {
      name: 'Logitech G-Series Gaming Mouse',
      image: '/images/mouse.jpg',
      description:
        'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
      brand: 'Logitech',
      category: 'Electronics',
      price: 49.99,
    },
    {
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      numReviews: 4,
      reviews:[
        {name:'review11', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review12', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review13', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review14', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },


    {
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      numReviews: 4,
      reviews:[
        {name:'review15', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review16', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review17', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review18', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },
    {
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      numReviews: 4,
      reviews:[
        {name:'review19', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review20', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review21', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review22', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },
    {
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      numReviews: 4,
      reviews:[
        {name:'review23', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review24', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review25', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review26', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },
    {
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      numReviews: 4,
      reviews:[
        {name:'review89', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review27', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review28', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review29', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },
    {
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      numReviews: 4,
      reviews:[
        {name:'review30', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review31', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review32', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review33', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },
    {
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      numReviews: 4,
      reviews:[
        {name:'review34', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review35', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review36', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review54', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },
    {
      name: 'Amazon Echo Dot 3rd Generation',
      image: '/images/alexa.jpg',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 29.99,
      numReviews: 4,
      reviews:[
        {name:'review38', rating: 1, comment: 'mon  reviews cinq', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review39', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review40', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
        {name:'review41', rating: 1, comment: 'mon six reviews', user: new ObjectID("636bb7a05b83e5c2afd59279")},
      ],
    },

  ];

  export default products;
