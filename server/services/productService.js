const db = require('../models');
const validate = require("validate.js");
const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage
} = require("../helpers/responseHelper.js");

const constraints = {
    title: {
        length: {
            minimum: 2,
            maximum: 100,
            tooShort: "^The Title must be at minimum %{count} letters long.",
            tooLong: "^The Title can't be longer then %{count} letters long."
        }
    },
    price: {
        numericality: {
            lessThanOrEqualTo: 9999.99,
            notlessThanOrEqualTo: "^The Price must be less then ${count}"
        }
    }
}

async function getById(id) {
    try {
      const product = await db.product.findOne({
        where: { id },
        include: [
        db.productImage,
        {
          model: db.rating,
          include: [db.user]
        }
      ]
      });
      return createResponseSuccess(_formatProduct(product));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
}

async function getAll() {
    try {
        const allProducts = await db.product.findAll({ include: db.productImage});
        return createResponseSuccess(allProducts.map((product) => _formatProduct(product)));
    }catch (error){
        return createResponseError(error.status, error.message);
    }   
}

async function addRating(id, rating) {
    if (!id) {
      return createResponseError(422, 'Id is obligatory');
    }
    try {
      rating.productId = id;
      const newrating = await db.rating.create(rating);
      return createResponseSuccess(newrating);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
}

async function addToCart(productId, userId, amount) {
  if (!productId) {
    return createResponseError(422, 'ProductId is obligatory');
  }
  if (!userId) {
    return createResponseError(422, 'CartId is obligatory');
  }
  try {
    
    const foundOrCreatedCart = await db.cart.findOrCreate({
      
      where: { userId },
      defaults: { payed: false },
      order: [['createdAt', 'desc']]
    });
  
    const cartId = foundOrCreatedCart[0].id;

    const newLink = await db.cartRow.create({cartId, productId, amount});
    

    return createResponseSuccess(newLink);
  } catch (error) {
    console.log(error)
    return createResponseError(error.status, error.message);
  }
}

async function addImage(id, productImage) {
  if (!id) {
    return createResponseError(422, 'Id is obligatory');
  }
  try {
    productImage.productId = id;
    const newproductImage = await db.productImage.create(productImage);
    return createResponseSuccess(newproductImage);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create(product) {
    const invalideData = validate(product, constraints)
    if (invalideData) {
        return createResponseError(422, invalideData);
    } else {
        try{
            const newProduct = await db.product.create(product);
            return createResponseSuccess(newProduct);
        } catch (error) {
            return createResponseError(error.status, error.message);
        }
    }
}

async function update(product, id) {
    const invalideData = validate(product, constraints)
    if (!id){
        return createResponseError(422, "Id is obligatory")
    }
    if (invalideData) {
        return createResponseError(422, invalideData);
    } 
    try {
        const existingProduct = await db.product.findOne({ where: { id } });
        if (!existingProduct) {
            return createResponseError(404, 'Found no Product to update');
        }
        await db.product.update(product, {
            where: { id }
        });
        return createResponseMessage(200, "Updated the Product")
    } catch (error) {
        return createResponseError(error.status, error.message)
    }
}

async function destroy(id) {
    if (!id) {
        return createResponseError(422, "Id is obligatory") ;
    }
    try{
        await db.product.destroy({
            where: {id: id}
        });
        return createResponseMessage(200, "Deleted the Product");
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

function _formatProduct(product) {
    const cleanProduct = {
      id: product.id,
      title: product.title,
      body: product.body,
      price: product.price,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      imageUrl: []
    };
  
    if (product.ratings) {
      cleanProduct.ratings = [];
  
      product.ratings.map((rating) => {
        return (cleanProduct.ratings = [
          {
            title: rating.title,
            description: rating.description,
            rating: rating.rating,
            createdAt: rating.createdAt,
            userId: rating.userId
          },
          ...cleanProduct.ratings
        ]);
      });
    }

    if (product.productImages) {
        product.productImages.map((productImage) => {
          return (cleanProduct.imageUrl = [productImage.imageUrl, ...cleanProduct.imageUrl]);
        });
        return cleanProduct;
      }
  return cleanProduct;
}



module.exports = {
    getById,
    getAll,
    addRating,
    addImage,
    addToCart,
    create,
    update,
    destroy
}





/*

funktioner som behövs:
CRUD cart
add to cart

sidor som skapas:
produkt lista
individuell produkt
skapa produkt
redigera produkt
skapa user
cart

*/