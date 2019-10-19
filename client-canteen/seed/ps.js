const Product = require('../models/product');
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));




  const products=[
    new Product({
            "imagePath":"product-images/sandwich.jpg",
            "title":"sandwich",
            "description":"Giving your Hunger a new sandwich Option",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"25",
    }),
    new Product({
            "imagePath":"product-images/grilled_chicken_sandwich.jpg",
            "title":" grilled chicken sandwich",
            "description":"A Trendy sandwich for Human",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"35",
     }),
    new Product({
            "imagePath":"product-images/chickenburger.jpg",
            "title":"cheese toast sandwich",
            "description":"Desire meets a new Sandwich",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"25",
    }),
    new Product({
            "imagePath":"product-images/hakkanoodles.jpg",
            "title":" hakka Noodles",
            "description":"Deliciousness jumping into the mouth",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"60",
    }),
    new Product({
            "imagePath":"product-images/omlette.jpg",
            "title":"Omlette ",
            "description":"Chase the flavors",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"20",
    }), 
    new Product({
            "imagePath":"product-images/vadapav.jpg",
            "title":"Vada-Pav",
            "description":"deep fried potatoes with taste of spice",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"12",
    }),  
    new Product({
            "imagePath":"product-images/samosa.jpg",
            "title":"Samosa",
            "description":"Crunchy and crispy",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"10",
    }),   
    new Product({
            "imagePath":"product-images/pattice.jpg",
            "title":"Pattice",
            "description":"puff filled with tasty mashed potatoes",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"20",
    }), 
    new Product({
            "imagePath":"product-images/cholebhature.jpg",
            "title":"chole bhature",
            "description":"A Mouthful Of Tangy Temptation, Chole-Bhature Is Definitely One Of India’s Most Delectable Foods",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"40",
    }),
   
    new Product({
            "imagePath":"product-images/Spring-Rolls.jpg",
            "title":"Spring Roll ",
            "description":"A roll of happiness ",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"30",
    }), 
    new Product({
            "imagePath":"product-images/chicken roll.jpg",
            "title":"Chicken Roll ",
            "description":" Crisp, flaky parathas wrapped with a spicy chicken filling ",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"35",
    }),
                    
    new Product({
            "imagePath":"product-images/vegpizza.jpg",
            "title":" Veg Pizza",
            "description":"Delicious and Hot, Pizza Just for You.",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"100",
    }),
    new Product({
            "imagePath":"product-images/chickenpizza.jpg",
            "title":"Chicken Pizza",
            "description":"All the taste, not on your waist!",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"120",
    }), 
     
    new Product({
            "imagePath":"product-images/misalpav.jpg",
            "title":"Misal Pav",
            "description":"Have a dip of soft pavs in spicy gravy  ",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"25",
    }),     
    new Product({
            "imagePath":"product-images/poha.jpg",
            "title":"Poha",
            "description":"Traditional maharashtrian food flavored with chillies onions and mustards",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"15",
    }),     
    new Product({
            "imagePath":"product-images/upma.jpg",
            "title":"upma",
            "description":"made with  refined ground wheat ,rice and  vegetables garnished with a variety of beans",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"15",
    }), 
    
    new Product({
            "imagePath":"product-images/alooparatha.jpg",
            "title":"Aloo Paratha",
            "description":"Healty treat for paratha lovers served with yoghurt and raita",
            "foodtype":"Veg",
            "category":"Veg meal",
            "price":"30",
    }),  
    new Product({
            "imagePath":"product-images/butterparatha.jpg",
            "title":"Butter aloo Paratha ",
            "description":"Delicous parathas with power of butter",
            "foodtype":"Veg",
            "category":"veg meal ",
            "price":"35",
    }),
    new Product({
            "imagePath":"product-images/pavbhaji.jpg",
            "title":"Pav Bhaji ",
            "description":"spiced mixture of mashed vegetables served hot with a soft white bread roll",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"90",
    }),
    new Product({
            "imagePath":"product-images/cheese_pav_bhaji.jpg",
            "title":"cheese Pav bhaji ",
            "description":"spiced mixture of mashed vegetables flavoured with cheese served hot with a soft white bread ",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"100",
    }),
    new Product({
            "imagePath":"product-images/sadadosa.jpg",
            "title":"sada Dosa",
            "description":"tasty and delicious",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"30",
    }),
    new Product({
            "imagePath":"product-images/masaladosa.jpg",
            "title":"Masala Dosa",
            "description":" has potato masala or spiced and seasoned potatoes stuffed a served with coocnut chutney and sambhar",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"45",
    }),
    new Product({
            "imagePath":"product-images/Mysoredosa.jpg",
            "title":"Mysore Masala Dosa ",
            "description":"the first choice when you want to enjoy South Indian food.",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"60",
    }),
    
    new Product({
            "imagePath":"product-images/idli.jpg",
            "title":"idli-sambhar ",
            "description":"traditional South Indian food made of fermented rice and black gram batter",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"25",
    }),
    new Product({
            "imagePath":"product-images/sadauttappa.jpg",
            "title":"sada uttappa" ,
            "description":"Awesome fastfood!!!",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"30",
    }),
    
    new Product({
            "imagePath":"product-images/Biryani.jpg",
            "title":"Veg biryani",
            "description":"Long-grained rice flavored with exotic spices",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"125",
    }),
    new Product({
            "imagePath":"product-images/chickenbiryani.jpg",
            "title":"chicken biryani",
            "description":"delicious savory rice dish loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"140",
    }),
    new Product({
            "imagePath":"product-images/muttonbiryani.jpg",
            "title":"mutton biryani",
            "description":"Awesome fastfood!!!",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"25",
    }),
    
    new Product({
            "imagePath":"product-images/chicken-lollipop.jpg",
            "title":"chicken lolipop",
            "description":"Awesome fastfood!!!",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"40",
    }),
    new Product({
            "imagePath":"product-images/chickenchilly.jpg",
            "title":"chicken chilly",
            "description":"Awesome fastfood!!!",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"75",
    }),
    new Product({
            "imagePath":"product-images/chickengarlic.jpg",
            "title":"chicken hot garlic",
            "description":"Awesome fastfood!!!",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"110",
    }),
    new Product({
            "imagePath":"product-images/chickencrispy.jpg",
            "title":"chicken crispy",
            "description":"Eat bite with a crisp of delicious chicken ",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"100",
    }),
    
    new Product({
            "imagePath":"product-images/eggrice.jpg",
            "title":"Egg Fried rice",
            "description":"Rice Krispies: Snap! Crackle! Pop!",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"90",
    }),
    new Product({
            "imagePath":"product-images/chickenschezwan.jpg",
            "title":"chicken schezwan rice ",
            "description":"Lick your lips after our chicken strips!",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"95",
    }),
    new Product({
            "imagePath":"product-images/manchurianrice.jpg",
            "title":"veg Manchurian rice",
            "description":"Mixed vegetable balls along with rice  tossed in soy tomato  sauce",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"80",
    }),
    new Product({
            "imagePath":"product-images/sabudanavada.jpg",
            "title":"sabodana vada",
            "description":"tasty and light",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"30",
    }),
    
    new Product({
            "imagePath":"product-images/dhokla.jpg",
            "title":"dhokla",
            "description":"fermented batter derived from rice and split chickpeas",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"20",
    }),
   
    new Product({
            "imagePath":"product-images/cheesemomos.jpg",
            "title":"cheese momos",
            "description":"filled with sautéed vegetables and pepper seasoning",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"60",
    }),
    new Product({
            "imagePath":"product-images/tandoorimomos.jpg",
            "title":"tandoori momos ",
            "description":"a perfect treat for your desi taste buds.",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"65",
    }),
    new Product({
            "imagePath":"product-images/chickenmomos.jpg",
            "title":"chicken momos",
            "description":"filled with sautéed vegetables and pepper seasoning",
            "foodtype":"Non-Veg",
            "category":"snacks",
            "price":"75",
    }),
   
    new Product({
            "imagePath":"product-images/pasta.jpg",
            "title":"pasta",
            "description":"Taste the real Italian Pasta with Spaghetti, macaroni, and noodles",
            "foodtype":"Veg",
            "category":"snacks",
            "price":"40",
    }),
    new Product({
        "imagePath": "/product-images/sprite.jpg",
        "title": "Sprite [1.25 Ltr]",
        "description": "This will help you in summer!",
        "price": "55",
        "category": "cold drinks"
        }),
        new Product({
        "imagePath": "/product-images/maaza.jpg",
        "title": "Maaza [1.5 Ltr]",
        "description": "Taste the sweetness and freshness of mangoes in any season",
        "price": 65,
        "category": "cold drinks",
        }),
        new Product({
            "imagePath": "/product-images/cocacola.jpg",
            "title": "Coca-cola [1.5 Ltr]",
            "description": "Cooling agent",
            "price": 65,
            "category": "cold drinks",
        }),
        new Product({
            "imagePath": "/product-images/pepsi.jpg",
            "title": "pepsi [1.5 Ltr]",
            "description": "Splashes into spring",
            "price": 65,
            "category": "cold drinks",
        }),
        new Product({
            "imagePath": "/product-images/mirinda.jpg",
            "title": "mirinda [1.5 Ltr]",
            "description": "Thirst knows no season",
            "price": 65,
            "category": "cold drinks",
        }),
        new Product({
            "imagePath": "/product-images/cavinslassi.jpg",
            "title": "Cavins Rose Lassi, 200ml",
            "description": "Lassi is an easy Indian Summer Drink made with yogurt and flavored with cardamom powder and rose essence.",
                "price":"20",
            "category": "beverages",
            }),
            
            new Product({
                "imagePath": "/product-images/real_fruit_juice.jpg",
                "title": "Real fruit juice, 200ml",
                "description": "Essence of real fruit",
                    "price":"20",
                "category": "beverages",
            }),
            
            new Product({
                "imagePath": "/product-images/Amulkool.jpg",
                "title":"Amul Kool, 200ml",
                "description": "Amul Kool is a refreshing beverage range with a variety of flavours",
                    "price":"20",
                "category": "beverages",
            }),
            
            new Product({
            "imagePath": "/product-images/greentea.jpg",
            "title": "Green Tea, 100ml",
            "description": "Green tea is the healthiest beverage on the planet. It is loaded with antioxidants and nutrients that have powerful effects on the body.",
            "price": 20,
            "category": "beverages"
            }),
            new Product({
                "imagePath": "/product-images/coffee.jpg",
                "title": "Coffee",
                "description": "a brewed drink prepared from roasted coffee beans",
                "price": 10,
                "category": "beverages"
            }),
            new Product({
                "imagePath": "/product-images/coldcoffee.jpg",
                "title": "cold coffee",
                "description": "No one can understand the truth until he drinks of coffee’s frothy goodness.",
                "price": 20,
                "category": "beverages"
            }),
            new Product({
                "imagePath": "/product-images/Amulkulfi.jpg",
                "title": "Amul Kulfi - Pista Malai, 60ml",
                "description": "Traditional Indian ice-cream at its best in Pista Malai flavorby Amul.",
                "price": 30,
                "category": "desserts",
                }),
                new Product({
                "imagePath": "/product-images/unicornetto.jpg",
                "title": "kwality walls Frozen Dessert - Uni Cornetto, 74 g",
                "description": "With the first ever purple cone, Kwality wall's Uni Cornetto is a creamy berry dessert with praline sprinkles and a white chocolate disc which makes it just right to share a bite with your loved one.",
                "price": 60,
                "category": "desserts",
                }),
                new Product({
                    "imagePath": "/product-images/Amultricone.jpg",
                    "title": "Amul tricone , 120ml",
                    "description": "flavour of chocolate with choco chips",
                    "price": 30,
                    "category": "desserts",
                }),
                new Product({
                    "imagePath": "/product-images/Amulvanillacone.jpg",
                    "title": "Amul vanilla Cone, 70g",
                    "description": "A taste of heaven on earth.",
                    "price": 35,
                    "category": "desserts",
                }),
                
                new Product({
                    "imagePath": "/product-images/Creambell_vanilla.jpg",
                    "title": "Cream bell vanilla , 60ml",
                    "description":"snacks",
                    "price": 40,
                    "category": "desserts",
                }),
                
                new Product({
                    "imagePath": "/product-images/Creambell_butterscotch.jpg",
                    "title": "Cream bell butterscotch , 60ml",
                    "description":"indulge in the indian desi flavour",
                    "price": 25,
                    "category": "desserts",
                }),
                
                new Product({
                    "imagePath": "/product-images/mangodolly.jpg",
                    "title": "Cream bell mango dolly, 60ml",
                    "description":"Taste of mango woth vanilla essence",
                    "price": 30,
                    "category": "desserts",
                }),
                new Product({
                    "imagePath": "/product-images/chocobar.jpg",
                    "title": "Kwality walls chocobar, 60ml",
                    "description":" tasty Chocolate in every bite ",
                    "price": 30,
                    "category": "desserts",
                })
        
];

let done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}