const db = require('../models');
const validate = require("validate.js");
const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage
} = require("../helpers/responseHelper.js");

const constraints = {
    email: {
        length: {
            minimum: 4,
            maximum: 200,
            tooShort: "^The E-mail address must be at minimum %{count} letters long.",
            tooLong: "^The E-mail address can't be longer then %{count} letters long."
        },
        email: {
            message: "E-mail adress is in a wrong format."
        }
    },
    password: {
        length: {
            minimum: 6,
            maximum: 50,
            tooShort: "^The Password must be at minimum %{count} characters long.",
            tooLong: "^The Password can't be longer then %{count} characters long."
        }
    },
    imageUrl: {
        url: {
            message: "^Invalid URL"
        }    
    }
}

async function getById(id) {
    try {
      const user = await db.user.findOne({
        where: { id },
        include: [
            {
                model: db.cart,
                include: [db.product]
            }
        ]
      });
      return createResponseSuccess(_formatUser(user));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
}

async function getCart(id){
    try {
        const user = await db.user.findOne({
          where: { id },
          include: [
              {
                  model: db.cart,
                  include: [db.product]
              }
          ]
        });
        return createResponseSuccess(_formatCart(user));
      } catch (error) {
        return createResponseError(error.status, error.message);
      }
}

async function getAll() {
    try {
        const allUsers = await db.user.findAll({ include: db.cart});
        return createResponseSuccess(allUsers.map((user) => _formatUser(user)));
    }catch (error){
        return createResponseError(error.status, error.message);
    }   
}

async function create(user) {
    const invalideData = validate(user, constraints)
    if (invalideData) {
        return createResponseError(422, invalideData);
    } else {
        try{
            const newUser = await db.user.create(user);
            return createResponseSuccess(newUser);
        } catch (error) {
            return createResponseError(error.status, error.message);
        }
    }
}

async function update(user, id) {
    const invalideData = validate(user, constraints)
    if (!id){
        return createResponseError(422, "Id is obligatory")
    }
    if (invalideData) {
        return createResponseError(422, invalideData);
    } 
    try {
        const existingUser = await db.user.findOne({ where: { id } });
        if (!existingUser) {
            return createResponseError(404, 'Found no User to update');
        }
        await db.user.update(user, {
            where: { id }
        });
        return createResponseMessage(200, "Updated the User")
    } catch (error) {
        return createResponseError(error.status, error.message)
    }
}

async function destroy(id) {
    if (!id) {
        return createResponseError(422, "Id is obligatory") ;
    }
    try{
        await db.user.destroy({
            where: {id: id}
        });
        return createResponseMessage(200, "Deleted the User");
    } catch (error) {
        return createResponseError(error.status, error.message);
    }
}

function _formatUser(user) {
    const cleanUser = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      imageUrl: user.imageUrl,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      body: user.body
    };

    if (user.carts) {
        cleanUser.carts = [];
    
        user.carts.map((cart) => {
          return (cleanUser.carts = [
            {
              id: cart.id,  
              payed: cart.payed,
              createdAt: cart.createdAt,
              products: cart.products
            },
            ...cleanUser.carts
          ]);
        });
    }
    return cleanUser;  
}

function _formatCart(user) {
    const cleanCart = {};

    if (user.carts) {
        cleanCart.carts = [];
    
        user.carts.map((cart) => {
          return (cleanCart.carts = [
            {
              id: cart.id,  
              payed: cart.payed,
              createdAt: cart.createdAt,
              products: cart.products
            },
            ...cleanCart.carts
          ]);
        });
    }
    return cleanCart;  
}



module.exports = {
    getById,
    getCart,
    getAll,
    create,
    update,
    destroy
}
