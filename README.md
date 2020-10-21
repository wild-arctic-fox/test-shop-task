# test-shop-task
Use MongoDB database. Link to DB visualization - https://whimsical.com/KccMXT342wH2GdUWRvDDZF@2Ux7TurymNEWe6obzv5p


## Run the app 
`node app.js`

# REST API
The REST API to the example app is described below.

**Show Providers**
----
Returns json data about all providers.
* **URL**

  /read/providers
* **Method:**
  `GET`
*  **URL Params:** None
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ``` [
  {
  "_id": "5f8ff38146d23d06a4dd278b",
  "name": "Villanell",
  "email": "villanell@qwerty.com",
  "phone": "380697658976"
  }, ... ]```
* **Sample Call:**
`http://localhost:3000/read/providers`





**Show Products**
----
Returns json data about all products.
* **URL**

  /read/products
* **Method:**
  `GET`
*  **URL Params:** None
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ``` [
  {
  "_id": "5f8ff665dc010f2c04df60a6",
  "name": "Kiwi",
  "category": "Fruit",
  "price": 12.4,
  "expirationDate": "2030-11-09T22:00:00.000Z",
  "measurability": "kg",
  "amount": 3003,
  "idProvider": {
  "_id": "5f8ff38146d23d06a4dd278b",
  "name": "Villanell",
  "email": "villanell@qwerty.com",
  "phone": "380697658976"
  }
  }, ... ]```
* **Sample Call:**
`http://localhost:3000/read/products`


**Show Provider**
----
Returns json data about a single provider.
* **URL**

  /read/provider/:id
* **Method:**
  `GET`
*  **URL Params:** 


    Required: `id`
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ``` {
"_id": "5f8ff3ab46d23d06a4dd278c",
"name": "Hannah",
"email": "hanna@student.com",
"phone": "380697658999"
}```
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
"message": "Provider not found"
}`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{"message": "Internal server error"}`
* **Sample Call:**
`http://localhost:3000/read/provider/5f8ff3ab46d23d06a4dd278c`


**Show Product**
----
Returns json data about a single product.
* **URL**

  /read/product/:id
* **Method:**
  `GET`
*  **URL Params:** 


    Required: `id`
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ```{
  "_id": "5f8ff665dc010f2c04df60a6",
  "name": "Kiwi",
  "category": "Fruit",
  "price": 12.4,
  "expirationDate": "2030-11-09T22:00:00.000Z",
  "measurability": "kg",
  "amount": 3003,
  "idProvider": {
  "_id": "5f8ff38146d23d06a4dd278b",
  "name": "Villanell",
  "email": "villanell@qwerty.com",
  "phone": "380697658976"
  }
  }```
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
  "message": "Product not found"
  }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ "message": "Internal server error" }`
* **Sample Call:**
`http://localhost:3000/read/product/5f8ff665dc010f2c04df60a6`

---



**Delete Product**
  ----
  Delete a single product.
* **URL**

    /delete/product/:id
* **Method:**
  `DELETE`
*  **URL Params:** 

      Required: `id`
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ```{ message: "Product deleted" }```
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message: "Product was not deleted" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`
* **Sample Call:**
  ```javascript 
  const id = "5f8ff665dc010f2c04df60a6";

  const deleteData = async (id) => {
    const response = await fetch(`/delete/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
  };

  deleteData(id);
  ```
  
  
  
  
**Delete Provider**
----
Delete a single provider.
* **URL**

  /delete/provider/:id
* **Method:**
`DELETE`
*  **URL Params:** 

      Required: `id`
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ```{ message: "Provider deleted" }```
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message: "Provider was not deleted" }`

      OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`
* **Sample Call:**
  ```javascript 
  const id = "5f8ff3e346d23d06a4dd278e";

  const deleteData = async (id) => {
    const response = await fetch(`/delete/provider/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
  };

  deleteData(id);
  ```

---

**Create Provider**
----
Create a single provider.
* **URL**

  /create/provider
* **Method:**
`POST`
*  **URL Params:** None
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ```{ message: "Provider created" }```
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message: "Unable create provider" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`
* **Sample Call:**
  ```javascript 
  const user = {
  name: "Hope",
  email: "email@qwerty.com",
  phone: "380697658976"
  };

    const postData = async (user) => {
      const response = await fetch("/create/provider", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();
      console.log(result);
    };

    postData(user);
    ```
    
**Create Product**
----
Create a single product.
* **URL**

  /create/product
* **Method:**
`POST`
*  **URL Params:** None
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ```{ message: "Product created" }```
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message: "Unable create product" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`
* **Sample Call:**
    ```javascript 
    const product = {
    name: "Banana",
    category: "Fruit",
    price: 12.5,
    expirationDate: new Date(),
    measurability: "kg",
    amount: 1007,
    idProvider: "5f8ff3ab46d23d06a4dd278c",
    };

    const postData = async (product) => {
      const response = await fetch("/create/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const result = await response.json();
      console.log(result);
    };

    postData(product);
    ```
    
    ---
    
        
**Update Product**
----
Update a single product.
* **URL**

  /update/product
* **Method:**
  `PUT`
*  **URL Params:** 

      Required: `id`
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ```{ message: "Product updated" }```
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message: "Unable update product" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`
* **Sample Call:**
    ```javascript 
    const product = {
  name: "Kiwi",
  category: "Fruit",
  price: 12.4,
  expirationDate: new Date(),
  measurability: "kg",
  amount: 1003,
  idProvider: "5f8ff38146d23d06a4dd278b",
  };
  const id = "5f8ff685dc010f2c04df60a7";

  const putData = async (product,id) => {
    const response = await fetch(`/update/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const result = await response.json();
    console.log(result);
  };

  putData(product,id);
    ```
    
    
    
**Update Provider**
----
Update a single provider.
* **URL**

  /update/provider
* **Method:**
  `PUT`
*  **URL Params:** 

      Required: `id`
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** ```{ message: "Provider updated" }```
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ message: "Unable update provider" }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`
* **Sample Call:**
    ```javascript 
   const user = {
  name: "Jenny",
  email: "email@qwerty.com",
  phone: "380697658976",
  };
  const id = "5f8ff38146d23d06a4dd278b";

  const putData = async (user,id) => {
    const response = await fetch(`/update/provider/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const result = await response.json();
    console.log(result);
  };

  putData(user,id);
  ```
---
  
  
**Find Products With Params**
----
Returns json data about products.
* **URL**

  /read/product?
* **Method:**
  `GET`
*  **URL Params:** 


    Optional: id, name, category, measurability, amount
* **Success Response:**

  * **Code:** 200 <br />
      **Content:** 
      ```
            [{
      "_id": "5f8ff685dc010f2c04df60a7",
      "name": "Apple",
      "category": "Fruit",
      "price": 45.8,
      "expirationDate": "2020-10-21T08:51:17.023Z",
      "measurability": "kg",
      "amount": 2000,
      "idProvider": {
      "_id": "5f8ff3ab46d23d06a4dd278c",
      "name": "Hannah",
      "email": "hanna@student.com",
      "phone": "380697658999"
      }
      }
      ]
      ```
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
  "message": "Product not found"
  }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ "message": "Internal server error" }`
* **Sample Call:**
`http://localhost:3000/read/product?amount=2000`
  
  

