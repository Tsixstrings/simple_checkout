# Checkout App
To run the app just type the following command and the server will run in http://localhost:3000
```
npm start
```

By default, the catalog has 3 products, but you can update your catalog by clicking the gear button (in the top).

To upload the catalog, the data structure must be respected. This is a array of objects like this
```
[...
{
    "sku": number,
    "icon": string(fontawesome icon name),
    "name": string,
    "price": number,
    "promo": string
}
...
]
```

You also can specify the 2 promos in the updated products just typing this 2 codes in the "promo" property.

```
"2x1" ==> 2 for 1 promo
"bulk>3": ==> Bulk discount (-1€ in each item if quantity is >= 3)
```

Also the app has 2 end-2-end tests using the cypress library.
To run the tests just run the app and then execute the following command
```
npm run cypress open
```
This tests the correct use of both promotions.