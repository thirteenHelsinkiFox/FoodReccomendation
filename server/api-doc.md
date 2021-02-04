# Food Reccomandation
-------------------------------------------------

# USER

## 1. POST /users/register

register new user

### -- Request Header --

tidak dibutuhkan

### -- Request Body --

- email
- password

### -- Response 201 --

```js
{
    "message": "Register success",
    "id": 7,
    "email": "rizkicandra@ecampuz.com"
}

```

### -- Error Response --

- 400 uniqe email
- 500 internal server error

## 2. POST /users/login

login user

### -- Request Header --

tidak dibutuhkan

### -- Request Body --

- email
- password

### -- Response 200 --

```js
{
    "access_token": "<token>"
}

```

### -- Error Response --

- 400 Invalid email or password
- 500 internal server error

# FOOD

## 1. GET /foods

mendapatkan data makanan berdasarkan cuaca

### -- Request Header --

```js
{
    "access_token": "<token>"
}
```
### -- Request Body --

tidak dibutuhkan

### -- Response 200 --

```js
{
    "weather": {
        "request": {
            "type": "City",
            "query": "Jakarta, Indonesia",
            "language": "en",
            "unit": "m"
        },
        "location": {
            "name": "Jakarta",
            "country": "Indonesia",
            "region": "Jakarta Raya",
            "lat": "-6.215",
            "lon": "106.845",
            "timezone_id": "Asia/Jakarta",
            "localtime": "2021-02-04 23:30",
            "localtime_epoch": 1612481400,
            "utc_offset": "7.0"
        },
        "current": {
            "observation_time": "04:30 PM",
            "temperature": 25,
            "weather_code": 293,
            "weather_icons": [
                "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0033_cloudy_with_light_rain_night.png"
            ],
            "weather_descriptions": [
                "Haze, Rain"
            ],
            "wind_speed": 6,
            "wind_degree": 300,
            "wind_dir": "WNW",
            "pressure": 1011,
            "precip": 0.4,
            "humidity": 94,
            "cloudcover": 50,
            "feelslike": 26,
            "uv_index": 1,
            "visibility": 5,
            "is_day": "no"
        }
    },
    "food": [
        {
            "id": 4,
            "name": "Satay",
            "img": "https://unsplash.com/photos/9tuLDya614I",
            "temp": 24,
            "description": null,
            "createdAt": "2021-02-04T13:29:26.679Z",
            "updatedAt": "2021-02-04T13:29:26.679Z"
        },
        {
            "id": 5,
            "name": "Ramen",
            "img": "https://unsplash.com/photos/RjRXzc73bEw",
            "temp": 23,
            "description": null,
            "createdAt": "2021-02-04T13:29:26.679Z",
            "updatedAt": "2021-02-04T13:29:26.679Z"
        },
        {
            "id": 9,
            "name": "Pempek",
            "img": "https://www.shutterstock.com/image-photo/pempek-palembang-savory-fish-cakes-spicy-1546516595",
            "temp": 23,
            "description": null,
            "createdAt": "2021-02-04T13:29:26.679Z",
            "updatedAt": "2021-02-04T13:29:26.679Z"
        }
    ]
}

```
### -- Error Response --

- 500 internal server error

## GET /foods/:id

menampilkan deskripsi makanan dan restaurant yang berhubungan dengan makanan tersebut

### -- Request Header --

```js
{
    "access_token": "<token>"
}
```
### -- Request Body --

tidak dibutuhkan

### -- Response 200 --

```js
{
    "food": {
        "id": 6,
        "name": "Sushi",
        "img": "https://unsplash.com/photos/RjRXzc73bEw",
        "temp": 27,
        "description": null,
        "createdAt": "2021-02-04T13:29:26.679Z",
        "updatedAt": "2021-02-04T13:29:26.679Z"
    },
    "wikepedia": {
        "batchcomplete": "",
        "query": {
            "pages": {
                "28271": {
                    "pageid": 28271,
                    "ns": 0,
                    "title": "Sushi",
                    "extract": "Sushi (すし, 寿司, 鮨, pronounced [sɯɕiꜜ] or [sɯꜜɕi]) is a traditional Japanese dish of prepared vinegared rice (鮨飯, sushi-meshi), usually with some sugar and salt, accompanying a variety of ingredients (ネタ, neta), such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is \"sushi rice\", also referred to as shari (しゃり), or sumeshi (酢飯).Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat. Many types of sushi are vegetarian. It is often served with pickled ginger (gari), wasabi, and soy sauce. Daikon radish or pickled daikon  (takuan) are popular garnishes for the dish.\nSushi is sometimes confused with sashimi, a related dish in Japanese cuisine that consists of thinly sliced raw fish, or occasionally meat, and an optional serving of rice."
                }
            }
        }
    },
    "restaurant": {
        "results_found": 438,
        "results_start": 0,
        "results_shown": 5,
        "restaurants": [
            {
                "restaurant": {
                    "R": {
                        "res_id": 18597282,
                        "is_grocery_store": false,
                        "has_menu_status": {
                            "delivery": -1,
                            "takeaway": -1
                        }
                    },
                    "apikey": "b33aca47499ffaf5e35d3df6b6d44ba7",
                    "id": "18597282",
                    "name": "Sushi Go!",
                    "url": "https://www.zomato.com/jakarta/sushi-go-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                    "location": {
                        "address": "Grand Indonesia Mall, Lantai 5, FoodPrint, West Mall, Jl. MH Thamrin, Thamrin, Jakarta",
                        "locality": "Grand Indonesia Mall, Thamrin",
                        "city": "Jakarta",
                        "city_id": 74,
                        "latitude": "-6.1950580000",
                        "longitude": "106.8201350000",
                        "zipcode": "",
                        "country_id": 94,
                        "locality_verbose": "Grand Indonesia Mall, Thamrin, Jakarta"
                    },
                    "switch_to_order_menu": 0,
                    "cuisines": "Sushi, Japanese",
                    "timings": "10 AM to 10 PM",
                    "average_cost_for_two": 100000,
                    "price_range": 2,
                    "currency": "IDR",
                    "highlights": [
                        "Cash",
                        "Debit Card",
                        "Lunch",
                        "Credit Card",
                        "Takeaway Available",
                        "Dinner",
                        "Air Conditioned",
                        "Wifi",
                        "Indoor Seating"
                    ],
                    "offers": [],
                    "opentable_support": 0,
                    "is_zomato_book_res": 0,
                    "mezzo_provider": "OTHER",
                    "is_book_form_web_view": 0,
                    "book_form_web_view_url": "",
                    "book_again_url": "",
                    "thumb": "https://b.zmtcdn.com/data/reviews_photos/7d7/5bdde06e7a7719f6f89cf3cc6f9117d7_1548768766.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                    "user_rating": {
                        "aggregate_rating": "4.5",
                        "rating_text": "Excellent",
                        "rating_color": "3F7E00",
                        "rating_obj": {
                            "title": {
                                "text": "4.5"
                            },
                            "bg_color": {
                                "type": "lime",
                                "tint": "700"
                            }
                        },
                        "votes": 3818
                    },
                    "all_reviews_count": 3062,
                    "photos_url": "https://www.zomato.com/jakarta/sushi-go-thamrin/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                    "photo_count": 2034,
                    "menu_url": "https://www.zomato.com/jakarta/sushi-go-thamrin/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                    "featured_image": "https://b.zmtcdn.com/data/reviews_photos/7d7/5bdde06e7a7719f6f89cf3cc6f9117d7_1548768766.jpg",
                    "medio_provider": false,
                    "has_online_delivery": 0,
                    "is_delivering_now": 0,
                    "store_type": "",
                    "include_bogo_offers": true,
                    "deeplink": "zomato://restaurant/18597282",
                    "is_table_reservation_supported": 0,
                    "has_table_booking": 0,
                    "events_url": "https://www.zomato.com/jakarta/sushi-go-thamrin/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                    "phone_numbers": "021 23580010",
                    "all_reviews": {
                        "reviews": [
                            {
                                "review": []
                            },
                            {
                                "review": []
                            },
                            {
                                "review": []
                            },
                            {
                                "review": []
                            },
                            {
                                "review": []
                            }
                        ]
                    },
                    "establishment": [
                        "Food Court"
                    ],
                    "establishment_types": []
                }
            },
                    ]
    }
}


```

### -- Error Response --

- 500 internal server error



## ERROR RESPONSE DETAIL

### -- 400 Unique data --

```js
{
    "message": [
        "email must be unique"
    ]
}
```

### -- 400 Invalid Email or Password --

```js
{
    "message": [
        "Invalid email or password"
    ]
}
```

### -- 401 Invalid Email or Password --

```js
{
    "message": [
        "Invalid token"
    ]
}
```

### -- 500 internal server error --

```js
{ 
    'message': "internal server error"
}
```