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
        /*include: [
            db.productImage,
          {
            model: db.comment,
            include: [db.user]
          }
        ]*/
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

async function addComment(id, comment) {
    if (!id) {
      return createResponseError(422, 'Id is obligatory');
    }
    try {
      comment.postId = id;
      const newComment = await db.comment.create(comment);
      return createResponseSuccess(newComment);
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
  
    if (product.comments) {
      cleanProduct.comments = [];
  
      product.comments.map((comment) => {
        return (cleanProduct.comments = [
          {
            title: comment.title,
            body: comment.body,
            author: {
                firstName: comment.user.firstName,
                lastName: comment.user.lastName
            },
            createdAt: comment.createdAt
          },
          ...cleanProduct.comments
        ]);
      });
    }

    if (product.productImages) {
        product.productImages.map((productImage) => {
          return (cleanProduct.productImage = [productImage.imageUrl, ...cleanProduct.productImages]);
        });
        return cleanProduct;
      }
}



module.exports = {
    getById,
    getAll,
    addComment,
    create,
    update,
    destroy
}