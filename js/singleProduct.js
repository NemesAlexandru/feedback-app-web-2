window.singleProduct = {
    API_BASE_URL: "http://localhost:8085",

    getProduct: function (productId) {
        $.ajax({
            url: singleProduct.API_BASE_URL + "/products/" + productId,
            method: "GET"
        }).done(function (response) {
            console.log(response);
            singleProduct.displayProduct(response)
        });

    },

    displayProduct: function (product) {
        let productHtml;
        productHtml = singleProduct.getSingleProductHtml(product);
        $(".col-md-8 .row:nth-child(2)").html(productHtml);
    },


    getSingleProductHtml: function (product) {

        return `<div class="col-sm-6">
                            <div class="product-inner">
                                <h2 class="product-name">${product.name}</h2>
                                <div class="product-inner-price">
                                    <ins>$700.00</ins> <del>$800.00</del>
                                </div>
                                <form action="" class="cart">
                                    <div class="quantity">
                                        <input type="number" size="4" class="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1">
                                    </div>
                                    <button class="add_to_cart_button" type="submit">Add to cart</button>
                                </form>
                                <div class="product-inner-category">
                                    <p>Category: <a href="">Summer</a>. Tags: <a href="">awesome</a>, <a href="">best</a>, <a href="">sale</a>, <a href="">shoes</a>. </p>
                                </div>
                                <div role="tabpanel">
                                    <ul class="product-tab" role="tablist">
                                        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Description</a></li>
                                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Reviews</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane fade in active" id="home">
                                            <h2>Product Description</h2>
                                            <p>Alex Nemes cel mai tare</p>
                                            <p>Cocosi pe locul 2</p>
                                        </div>
                                        <div role="tabpanel" class="tab-pane fade" id="profile">
                                            <h2>Reviews</h2>
                                            <div class="submit-review">
                                                <p><label for="name">Name</label> <input name="name" type="text"></p>
                                                <p><label for="email">Email</label> <input name="email" type="email"></p>
                                                <div class="rating-chooser">
                                                    <p>Your rating</p>
                                                    <div class="rating-wrap-post">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <p><label for="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                <p><input type="submit" value="Submit"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`

    },

};
singleProduct.getProduct(5);