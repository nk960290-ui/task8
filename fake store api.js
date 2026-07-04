fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    console.log("Product Titles:");
    products.forEach(product => {
      console.log(product.title);
    });

    console.log("Prices:");
    products.forEach(product => {
      console.log(product.price);
    });

    console.log("Products costing more than ₹100:");
    products
      .filter(product => product.price > 100)
      .forEach(product => {
        console.log(product.title, "-", product.price);
      });

    console.log("Total Products:", products.length);

    console.log("Category Names:");
    products.forEach(product => {
      console.log(product.category);
    });

  })
  .catch(error => {
    console.log("Error:", error);
  });
