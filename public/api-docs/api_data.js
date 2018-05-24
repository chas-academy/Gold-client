define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Post method to sign in",
    "version": "0.1.0",
    "name": "postLogin",
    "group": "1_Authentication",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/login",
        "type": "js"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-key",
            "description": "<p>Users unique access-key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Content-Type\": \"application/json\",\n     \"Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     token: \"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtZSI6IlN2ZW4gU3ZlbnNzb24iLCJwZXJzX29yZ19udW0iOiI\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n     error: \"Wrong Password\" or \"Can't find user with that email\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n id: \"1\",\n name: \"John Doe\",\n user_type: \"customer\",\n customer_type: \"private\" or \"company\",\n email: \"customer@email.com\",\n tel: \"070XXXXXX\",\n address: \"Elektravägen\",\n lat: 59.295348,\n lon: 18.011468\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Post method to register",
    "version": "0.1.0",
    "name": "postRegister",
    "group": "1_Authentication",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/register",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Content-Type\": \"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  type: \"customer\", <--type of user\n  name: \"John Doe\",\n  email: \"customer@email.com\",\n  tel: \"070XXXXXX\",\n  password: \"$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK\",\n     customer: {\n         type: \"private\" or \"company\", <--type of customer\n         address: \"Elektravägen\",\n         lat: 59.295348,\n         lon: 18.011468\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Successfully registered\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: error\n  \"Various errors depending on what failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./auth.js",
    "groupTitle": "1_Authentication"
  },
  {
    "type": "post",
    "url": "/users/create",
    "title": "3.Create user",
    "version": "0.1.0",
    "name": "createUser",
    "group": "2_User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users/create",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  type: \"customer\", \"admin\" or \"employee\"\n  name: \"John Doe\",\n  email: \"example@email.com\",\n  tel: \"070XXXXXX\",\n  password: \"$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"User Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: error\n  \"Various errors depending on what failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./users.js",
    "groupTitle": "2_User"
  },
  {
    "type": "delete",
    "url": "/users/:id/delete",
    "title": "5.Delete user",
    "version": "0.1.0",
    "name": "deletetUser",
    "group": "2_User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users/:id/delete",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  id: 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"User deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Cant delete user\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./users.js",
    "groupTitle": "2_User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "1.Get all users",
    "version": "0.1.0",
    "name": "getAllUsers",
    "group": "2_User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    [\n    {\n        \"id\": 2,\n        \"type\": \"employee\",\n        \"name\": \"Erica\",\n        \"email\": \"emp.erica@email.com\",\n        \"tel\": \"\",\n        \"customer\": null,\n        \"services\": [\n            {\n                \"id\": 3,\n                \"client_id\": 7,\n                \"order_type\": \"order\",\n                \"company_name\": null,\n                \"con_pers\": \"Tyrone\",\n                \"con_tel\": \"0721292314\",\n                \"datetime\": \"2018-05-25T14:00:00.000Z\",\n                \"status\": \"assigned\",\n                \"createdAt\": \"2018-05-17T10:09:16.279Z\",\n                \"updatedAt\": \"2018-05-17T10:09:16.279Z\",\n                \"employee_services\": {\n                    \"serviceId\": 3,\n                    \"userId\": 2\n                }\n            },\n            {\n                \"id\": 5,\n                \"client_id\": 7,\n                \"order_type\": \"order\",\n                \"company_name\": \"Mäklarringen\",\n                \"con_pers\": \"Jakob\",\n                \"con_tel\": \"0712391234\",\n                \"datetime\": \"2018-05-24T14:30:00.000Z\",\n                \"status\": \"done\",\n                \"createdAt\": \"2018-05-17T10:09:16.279Z\",\n                \"updatedAt\": \"2018-05-17T10:09:16.279Z\",\n                \"employee_services\": {\n                    \"serviceId\": 5,\n                    \"userId\": 2\n                }\n            }\n        ]\n    },\n    {\n        \"id\": 5,\n        \"type\": \"customer\",\n        \"name\": \"Sven Svensson\",\n        \"email\": \"cmr.sven@email.com\",\n        \"tel\": \"0737223452\",\n        \"customer\": {\n            \"user_id\": 5,\n            \"type\": \"private\",\n            \"address\": \"Drottninggatan 14\",\n            \"lat\": \"59.3298085\",\n            \"lon\": \"18.0633878\"\n        },\n        \"services\": []\n    },\n    {\n        \"id\": 7,\n        \"type\": \"customer\",\n        \"name\": \"Mäklarringen\",\n        \"email\": \"cmr.maklarringen@email.com\",\n        \"tel\": \"08246812\",\n        \"customer\": {\n            \"user_id\": 7,\n            \"type\": \"company\",\n            \"address\": \"Elektravägen 29\",\n            \"lat\": \"59.2950814\",\n            \"lon\": \"18.0088671\"\n        },\n        \"services\": []\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find user\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./users.js",
    "groupTitle": "2_User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "2.Get user by ID",
    "version": "0.1.0",
    "name": "getUsersById",
    "group": "2_User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users/:id",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"id\": 2,\n        \"type\": \"employee\",\n        \"name\": \"Erica\",\n        \"email\": \"emp.erica@email.com\",\n        \"tel\": \"\",\n        \"customer\": null,\n        \"services\": [\n            {\n                \"id\": 3,\n                \"client_id\": 7,\n                \"order_type\": \"order\",\n                \"company_name\": null,\n                \"con_pers\": \"Tyrone\",\n                \"con_tel\": \"0721292314\",\n                \"datetime\": \"2018-05-25T14:00:00.000Z\",\n                \"status\": \"assigned\",\n                \"createdAt\": \"2018-05-17T10:09:16.279Z\",\n                \"updatedAt\": \"2018-05-17T10:09:16.279Z\",\n                \"employee_services\": {\n                    \"serviceId\": 3,\n                    \"userId\": 2\n                }\n            },\n            {\n                \"id\": 9,\n                \"client_id\": 8,\n                \"order_type\": \"complaint\",\n                \"company_name\": \"Hidden Company\",\n                \"con_pers\": \"Mindy\",\n                \"con_tel\": \"0721292314\",\n                \"datetime\": \"2018-05-25T14:00:00.000Z\",\n                \"status\": \"assigned\",\n                \"createdAt\": \"2018-05-17T10:09:16.279Z\",\n                \"updatedAt\": \"2018-05-17T10:09:16.279Z\",\n                \"employee_services\": {\n                    \"serviceId\": 9,\n                    \"userId\": 2\n                }\n            },        \n            {\n                \"id\": 11,\n                \"client_id\": null,\n                \"order_type\": \"int_order\",\n                \"company_name\": null,\n                \"con_pers\": null,\n                \"con_tel\": null,\n                \"datetime\": \"2018-05-25T14:00:00.000Z\",\n                \"status\": \"assigned\",\n                \"createdAt\": \"2018-05-17T10:09:16.279Z\",\n                \"updatedAt\": \"2018-05-17T10:09:16.279Z\",\n                \"employee_services\": {\n                    \"serviceId\": 11,\n                    \"userId\": 2\n                }\n            }                                                                                                                \n        ]\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find user\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./users.js",
    "groupTitle": "2_User"
  },
  {
    "type": "put",
    "url": "/users/:id/update",
    "title": "4.Update user",
    "version": "0.1.0",
    "name": "putUser",
    "group": "2_User",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/users/:id/update",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  type: \"admin\" or \"employee\"\n  name: \"John Doe\",\n  email: \"example@email.com\",\n  tel: \"070XXXXXX\",\n  password: \"$2a$10$30EGSWnvXYuaucQvZXzvnO1xXjYEoajbCz8.p.qBNFT/S5Vm1HWQK\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"User updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Cant update user\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./users.js",
    "groupTitle": "2_User"
  },
  {
    "type": "get",
    "url": "/services/assigned",
    "title": "4.Get all assigned services",
    "version": "0.1.0",
    "name": "getAllAssignedServices",
    "group": "3_Service",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/services/assigned",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  [\n    {\n        \"id\": 3,\n        \"client_id\": 7,\n        \"order_type\": \"order\",\n        \"company_name\": null,\n        \"con_pers\": \"Tyrone\",\n        \"con_tel\": \"0721292314\",\n        \"datetime\": \"2018-05-25T14:00:00.000Z\",\n        \"status\": \"assigned\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": {\n            \"service_id\": 3,\n            \"address\": \"Elektravägen 29\",\n            \"lat\": 59.2950814,\n            \"lon\": 18.0088671,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        },\n        \"complaint\": null\n    },\n    {\n        \"id\": 4,\n        \"client_id\": 6,\n        \"order_type\": \"order\",\n        \"company_name\": null,\n        \"con_pers\": \"Bob\",\n        \"con_tel\": \"0730987634\",\n        \"datetime\": \"2018-05-23T12:00:00.000Z\",\n        \"status\": \"assigned\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": {\n            \"service_id\": 4,\n            \"address\": \"Grinstagatan 49\",\n            \"lat\": 59.3583324,\n            \"lon\": 17.8692312,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        },\n        \"complaint\": null\n    },\n    {\n        \"id\": 9,\n        \"client_id\": 8,\n        \"order_type\": \"complaint\",\n        \"company_name\": \"Hidden Company\",\n        \"con_pers\": \"Mindy\",\n        \"con_tel\": \"0721292314\",\n        \"datetime\": \"2018-05-25T14:00:00.000Z\",\n        \"status\": \"assigned\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": null,\n        \"complaint\": {\n            \"service_id\": 9,\n            \"order_id\": 7,\n            \"description\": \"Description of a general complaint. Something was done wrong.\",\n            \"image_path\": null,\n            \"order\": {\n                \"service_id\": 7,\n                \"address\": \"Solursgränd 2\",\n                \"lat\": 59.3627103,\n                \"lon\": 17.8738748,\n                \"description\": \"Description of a general order. Do that, that and some of this.\",\n                \"image_path\": null\n            }\n        }\n    },\n    {\n        \"id\": 11,\n        \"client_id\": null,\n        \"order_type\": \"int_order\",\n        \"company_name\": null,\n        \"con_pers\": null,\n        \"con_tel\": null,\n        \"datetime\": \"2018-05-25T14:00:00.000Z\",\n        \"status\": \"assigned\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": {\n            \"service_id\": 11,\n            \"address\": \"Konstigt gatan 12\",\n            \"lat\": 60.3298085,\n            \"lon\": 15.0633878,\n            \"description\": \"Buy plz some of those and more of these.\",\n            \"image_path\": null\n        },\n        \"order\": null,\n        \"complaint\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find assigned services\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./services.js",
    "groupTitle": "3_Service"
  },
  {
    "type": "get",
    "url": "/services/done",
    "title": "5.Get all done services",
    "version": "0.1.0",
    "name": "getAllDoneServices",
    "group": "3_Service",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/services/done",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  [\n    {\n        \"id\": 5,\n        \"client_id\": 7,\n        \"order_type\": \"order\",\n        \"company_name\": \"Mäklarringen\",\n        \"con_pers\": \"Jakob\",\n        \"con_tel\": \"0712391234\",\n        \"datetime\": \"2018-05-24T14:30:00.000Z\",\n        \"status\": \"done\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": {\n            \"service_id\": 5,\n            \"address\": \"Elektravägen 29\",\n            \"lat\": 59.2950814,\n            \"lon\": 18.0088671,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        },\n        \"complaint\": null\n    },\n    {\n        \"id\": 6,\n        \"client_id\": 5,\n        \"order_type\": \"order\",\n        \"company_name\": null,\n        \"con_pers\": \"Sven\",\n        \"con_tel\": \"0737223452\",\n        \"datetime\": \"2018-05-25T08:00:00.000Z\",\n        \"status\": \"done\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": {\n            \"service_id\": 6,\n            \"address\": \"Drottninggatan 14\",\n            \"lat\": 59.3298085,\n            \"lon\": 18.0633878,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        },\n        \"complaint\": null\n    },\n    {\n        \"id\": 7,\n        \"client_id\": 8,\n        \"order_type\": \"order\",\n        \"company_name\": \"Hidden Company\",\n        \"con_pers\": \"Mindy\",\n        \"con_tel\": \"0721292314\",\n        \"datetime\": \"2018-05-25T08:00:00.000Z\",\n        \"status\": \"done\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": {\n            \"service_id\": 7,\n            \"address\": \"Solursgränd 2\",\n            \"lat\": 59.3627103,\n            \"lon\": 17.8738748,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        },\n        \"complaint\": null\n    },\n    {\n        \"id\": 10,\n        \"client_id\": 7,\n        \"order_type\": \"complaint\",\n        \"company_name\": \"Mäklarringen\",\n        \"con_pers\": \"Jakob\",\n        \"con_tel\": \"0712391234\",\n        \"datetime\": \"2018-05-24T17:00:00.000Z\",\n        \"status\": \"done\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": null,\n        \"complaint\": {\n            \"service_id\": 10,\n            \"order_id\": 5,\n            \"description\": \"Description of a general complaint. Something was done wrong.\",\n            \"image_path\": null,\n            \"order\": {\n                \"service_id\": 5,\n                \"address\": \"Elektravägen 29\",\n                \"lat\": 59.2950814,\n                \"lon\": 18.0088671,\n                \"description\": \"Description of a general order. Do that, that and some of this.\",\n                \"image_path\": null\n            }\n        }\n    },\n    {\n        \"id\": 12,\n        \"client_id\": null,\n        \"order_type\": \"int_order\",\n        \"company_name\": null,\n        \"con_pers\": null,\n        \"con_tel\": null,\n        \"datetime\": \"2018-05-25T14:00:00.000Z\",\n        \"status\": \"done\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": {\n            \"service_id\": 12,\n            \"address\": \"Konstigt gatan 12\",\n            \"lat\": 58.3298085,\n            \"lon\": 17.0633878,\n            \"description\": \"Buy plz some of those and more of these.\",\n            \"image_path\": null\n        },\n        \"order\": null,\n        \"complaint\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find done services\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./services.js",
    "groupTitle": "3_Service"
  },
  {
    "type": "get",
    "url": "/services/new",
    "title": "3.Get all new services",
    "version": "0.1.0",
    "name": "getAllNewServices",
    "group": "3_Service",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/services/new",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n  [\n    {\n        \"id\": 1,\n        \"client_id\": 5,\n        \"order_type\": \"order\",\n        \"company_name\": null,\n        \"con_pers\": \"Sven\",\n        \"con_tel\": \"0737223452\",\n        \"datetime\": \"2018-05-23T14:00:00.000Z\",\n        \"status\": \"new\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": {\n            \"service_id\": 1,\n            \"address\": \"Drottninggatan 14\",\n            \"lat\": 59.3298085,\n            \"lon\": 18.0633878,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        },\n        \"complaint\": null\n    },\n    {\n        \"id\": 2,\n        \"client_id\": 8,\n        \"order_type\": \"order\",\n        \"company_name\": null,\n        \"con_pers\": \"Robert\",\n        \"con_tel\": \"0721255555\",\n        \"datetime\": \"2018-05-25T14:00:00.000Z\",\n        \"status\": \"new\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": {\n            \"service_id\": 2,\n            \"address\": \"Solursgränd 2\",\n            \"lat\": 59.3627103,\n            \"lon\": 17.8738748,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        },\n        \"complaint\": null\n    },\n    {\n        \"id\": 8,\n        \"client_id\": 5,\n        \"order_type\": \"complaint\",\n        \"company_name\": null,\n        \"con_pers\": \"Sven\",\n        \"con_tel\": \"0737223452\",\n        \"datetime\": \"2018-05-24T10:00:00.000Z\",\n        \"status\": \"new\",\n        \"createdAt\": \"2018-05-21T08:42:17.503Z\",\n        \"updatedAt\": \"2018-05-21T08:42:17.503Z\",\n        \"internal_order\": null,\n        \"order\": null,\n        \"complaint\": {\n            \"service_id\": 8,\n            \"order_id\": 6,\n            \"description\": \"Description of a general complaint. Something was done wrong.\",\n            \"image_path\": null,\n            \"order\": {\n                \"service_id\": 6,\n                \"address\": \"Drottninggatan 14\",\n                \"lat\": 59.3298085,\n                \"lon\": 18.0633878,\n                \"description\": \"Description of a general order. Do that, that and some of this.\",\n                \"image_path\": null\n            }\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find new services\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./services.js",
    "groupTitle": "3_Service"
  },
  {
    "type": "get",
    "url": "/services",
    "title": "1.Get all services",
    "version": "0.1.0",
    "name": "getAllServices",
    "group": "3_Service",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/services",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   [\n    {\n        \"id\": 11,\n        \"client_id\": null,\n        \"order_type\": \"int_order\",\n        \"company_name\": null,\n        \"con_pers\": null,\n        \"con_tel\": null,\n        \"datetime\": \"2018-05-25T14:00:00.000Z\",\n        \"status\": \"assigned\",\n        \"createdAt\": \"2018-05-18T10:45:15.606Z\",\n        \"updatedAt\": \"2018-05-18T10:45:15.606Z\",\n        \"internal_order\": {\n            \"service_id\": 11,\n            \"address\": \"Konstigt gatan 12\",\n            \"lat\": 60.3298085,\n            \"lon\": 15.0633878,\n            \"description\": \"Buy plz some of those and more of these.\",\n            \"image_path\": null\n        },\n        \"order\": null,\n        \"complaint\": null\n    },\n    {\n        \"id\": 20,\n        \"client_id\": 5,\n        \"order_type\": \"order\",\n        \"company_name\": \"\",\n        \"con_pers\": \"Sven Svensson\",\n        \"con_tel\": \"0737223452\",\n        \"datetime\": \"2018-05-20T10:00:00.000Z\",\n        \"status\": \"new\",\n        \"createdAt\": \"2018-05-18T12:08:02.381Z\",\n        \"updatedAt\": \"2018-05-18T12:08:02.381Z\",\n        \"internal_order\": null,\n        \"order\": {\n            \"service_id\": 20,\n            \"address\": \"Stockholm, Швеция\",\n            \"lat\": 59.3293235,\n            \"lon\": 18.0685808000001,\n            \"description\": \"Super duper description\",\n            \"image_path\": [\n                \"C:\\\\Users\\\\Oleg\\\\AppData\\\\Local\\\\Temp\\\\upload_bbc5556c165d5186fcee6276e4c6a5ea.png\"\n            ]\n        },\n        \"complaint\": null\n    },\n    {\n        \"id\": 10,\n        \"client_id\": 7,\n        \"order_type\": \"complaint\",\n        \"company_name\": \"Mäklarringen\",\n        \"con_pers\": \"Jakob\",\n        \"con_tel\": \"0712391234\",\n        \"datetime\": \"2018-05-24T17:00:00.000Z\",\n        \"status\": \"done\",\n        \"createdAt\": \"2018-05-18T10:45:15.606Z\",\n        \"updatedAt\": \"2018-05-18T10:45:15.606Z\",\n        \"internal_order\": null,\n        \"order\": null,\n        \"complaint\": {\n            \"service_id\": 10,\n            \"order_id\": 5,\n            \"description\": \"Description of a general complaint. Something was done wrong.\",\n            \"image_path\": null,\n            \"order\": {\n                \"service_id\": 5,\n                \"address\": \"Elektravägen 29\",\n                \"lat\": 59.2950814,\n                \"lon\": 18.0088671,\n                \"description\": \"Description of a general order. Do that, that and some of this.\",\n                \"image_path\": null\n            }\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find any services\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./services.js",
    "groupTitle": "3_Service"
  },
  {
    "type": "get",
    "url": "/services/:id",
    "title": "2.Get all services by ID",
    "version": "0.1.0",
    "name": "getAllServicesById",
    "group": "3_Service",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/services/:id",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Service's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 3,\n    \"client_id\": 7,\n    \"order_type\": \"order\",\n    \"company_name\": null,\n    \"con_pers\": \"Tyrone\",\n    \"con_tel\": \"0721292314\",\n    \"datetime\": \"2018-05-25T14:00:00.000Z\",\n    \"status\": \"assigned\",\n    \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n    \"updatedAt\": \"2018-05-18T14:26:08.070Z\",\n    \"internal_order\": null,\n    \"order\": {\n        \"service_id\": 3,\n        \"address\": \"Elektravägen 29\",\n        \"lat\": 59.2950814,\n        \"lon\": 18.0088671,\n        \"description\": \"Description of a general order. Do that, that and some of this.\",\n        \"image_path\": null\n    },\n    \"complaint\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find service\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./services.js",
    "groupTitle": "3_Service"
  },
  {
    "type": "post",
    "url": "/orders/create",
    "title": "3.Create order",
    "version": "0.1.0",
    "name": "createOrder",
    "group": "4_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/orders/create",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  client_id: 3,\n  order_type: \"order\",\n  company_name: \"Mäklaringen\",\n  con_pers: \"Jonas\",\n  con_tel: \"070XXXXXXX\",\n  datetime: \"2018-05-25T14:00:00.000Z\",\n     order: {\n         address: \"Elektravägen XX\",\n         lat: 59.3627103,\n         lon: 17.8738748,\n         description: \"Description text here\",\n         image_path: \"path/to/image/here\"\n     \n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Order Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n     error: \"Can't create order\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./orders.js",
    "groupTitle": "4_Order"
  },
  {
    "type": "delete",
    "url": "/orders/:id/delete",
    "title": "5.Delete order",
    "version": "0.1.0",
    "name": "deletetOrder",
    "group": "4_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/orders/:id/delete",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Order's unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  id: 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Order deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Cant delete order\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./orders.js",
    "groupTitle": "4_Order"
  },
  {
    "type": "get",
    "url": "/orders",
    "title": "1.Get all orders",
    "version": "0.1.0",
    "name": "getAllOrders",
    "group": "4_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/orders",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n [\n    {\n        \"service_id\": 6,\n        \"address\": \"Drottninggatan 14\",\n        \"lat\": 59.3298085,\n        \"lon\": 18.0633878,\n        \"description\": \"Description of a general order. Do that, that and some of this.\",\n        \"image_path\": null,\n        \"service\": {\n            \"id\": 6,\n            \"client_id\": 5,\n            \"order_type\": \"order\",\n            \"company_name\": null,\n            \"con_pers\": \"Sven\",\n            \"con_tel\": \"0737223452\",\n            \"datetime\": \"2018-05-25T08:00:00.000Z\",\n            \"status\": \"done\",\n            \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n            \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n        },\n        \"complaints\": [\n            {\n                \"service_id\": 8,\n                \"order_id\": 6,\n                \"description\": \"Description of a general complaint. Something was done wrong.\",\n                \"image_path\": null\n            }\n        ]\n    },\n    {\n        \"service_id\": 7,\n        \"address\": \"Solursgränd 2\",\n        \"lat\": 59.3627103,\n        \"lon\": 17.8738748,\n        \"description\": \"Description of a general order. Do that, that and some of this.\",\n        \"image_path\": null,\n        \"service\": {\n            \"id\": 7,\n            \"client_id\": 8,\n            \"order_type\": \"order\",\n            \"company_name\": \"Hidden Company\",\n            \"con_pers\": \"Mindy\",\n            \"con_tel\": \"0721292314\",\n            \"datetime\": \"2018-05-25T08:00:00.000Z\",\n            \"status\": \"done\",\n            \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n            \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n        },\n        \"complaints\": [\n            {\n                \"service_id\": 9,\n                \"order_id\": 7,\n                \"description\": \"Description of a general complaint. Something was done wrong.\",\n                \"image_path\": null\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find any orders\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./orders.js",
    "groupTitle": "4_Order"
  },
  {
    "type": "get",
    "url": "/orders/:id",
    "title": "2.Get all orders by ID",
    "version": "0.1.0",
    "name": "getAllOrdersById",
    "group": "4_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/orders/:id",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Order's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"service_id\": 2,\n    \"address\": \"Solursgränd 2\",\n    \"lat\": 59.3627103,\n    \"lon\": 17.8738748,\n    \"description\": \"Description of a general order. Do that, that and some of this.\",\n    \"image_path\": null,\n    \"service\": {\n        \"id\": 2,\n        \"client_id\": 8,\n        \"order_type\": \"order\",\n        \"company_name\": null,\n        \"con_pers\": \"Robert\",\n        \"con_tel\": \"0721255555\",\n        \"datetime\": \"2018-05-25T14:00:00.000Z\",\n        \"status\": \"new\",\n        \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n        \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n    },\n    \"complaints\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find order\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./orders.js",
    "groupTitle": "4_Order"
  },
  {
    "type": "put",
    "url": "/orders/:id/update",
    "title": "4.Update order",
    "version": "0.1.0",
    "name": "putOrder",
    "group": "4_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/orders/:id/update",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Order's unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  client_id: 3,\n  order_type: \"order\",\n  company_name: \"update Mäklaringen\",\n  con_pers: \"update Jonas\",\n  con_tel: \"update 070XXXXXXX\",\n  datetime: \"2018-05-25T14:00:00.000Z\",\n     order: {\n         address: \"update Elektravägen XX\",\n         lat: 59.3627103,\n         lon: 17.8738748,\n         description: \"update Description text here\",\n         image_path: \"update path/to/image/here\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Order updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find order\",\n  error: \"Can't update order\",\n  error: \"Can't find service\",\n  error: \"Can't update service\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./orders.js",
    "groupTitle": "4_Order"
  },
  {
    "type": "post",
    "url": "/complaints/create",
    "title": "3.Create complaint",
    "version": "0.1.0",
    "name": "createComplaint",
    "group": "5_Complaint",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/complaints/create",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  order_type: \"complaint\",\n  datetime: \"2018-05-25T14:00:00.000Z\",\n     complaint: {\n         order_id: 3\n         description: \"Description text here\",\n         image_path: \"path/to/image/here\"\n     \n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Complaint Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n     error: \"Can't create complaint\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./complaints.js",
    "groupTitle": "5_Complaint"
  },
  {
    "type": "delete",
    "url": "/complaints/:id/delete",
    "title": "5.Delete complaint",
    "version": "0.1.0",
    "name": "deletetComplaint",
    "group": "5_Complaint",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/complaints/:id/delete",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Complaint's unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  id: 8\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Complaint deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Cant delete complaint\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./complaints.js",
    "groupTitle": "5_Complaint"
  },
  {
    "type": "get",
    "url": "/complaints",
    "title": "1.Get all complaints",
    "version": "0.1.0",
    "name": "getAllComplaints",
    "group": "5_Complaint",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/complaints",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n [\n    {\n        \"service_id\": 8,\n        \"order_id\": 6,\n        \"description\": \"Description of a general complaint. Something was done wrong.\",\n        \"image_path\": null,\n        \"service\": {\n            \"id\": 8,\n            \"client_id\": 5,\n            \"order_type\": \"complaint\",\n            \"company_name\": null,\n            \"con_pers\": \"Sven\",\n            \"con_tel\": \"0737223452\",\n            \"datetime\": \"2018-05-24T10:00:00.000Z\",\n            \"status\": \"new\",\n            \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n            \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n        },\n        \"order\": {\n            \"service_id\": 6,\n            \"address\": \"Drottninggatan 14\",\n            \"lat\": 59.3298085,\n            \"lon\": 18.0633878,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        }\n    },\n    {\n        \"service_id\": 9,\n        \"order_id\": 7,\n        \"description\": \"Description of a general complaint. Something was done wrong.\",\n        \"image_path\": null,\n        \"service\": {\n            \"id\": 9,\n            \"client_id\": 8,\n            \"order_type\": \"complaint\",\n            \"company_name\": \"Hidden Company\",\n            \"con_pers\": \"Mindy\",\n            \"con_tel\": \"0721292314\",\n            \"datetime\": \"2018-05-25T14:00:00.000Z\",\n            \"status\": \"assigned\",\n            \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n            \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n        },\n        \"order\": {\n            \"service_id\": 7,\n            \"address\": \"Solursgränd 2\",\n            \"lat\": 59.3627103,\n            \"lon\": 17.8738748,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        }\n    },\n    {\n        \"service_id\": 10,\n        \"order_id\": 5,\n        \"description\": \"Description of a general complaint. Something was done wrong.\",\n        \"image_path\": null,\n        \"service\": {\n            \"id\": 10,\n            \"client_id\": 7,\n            \"order_type\": \"complaint\",\n            \"company_name\": \"Mäklarringen\",\n            \"con_pers\": \"Jakob\",\n            \"con_tel\": \"0712391234\",\n            \"datetime\": \"2018-05-24T17:00:00.000Z\",\n            \"status\": \"done\",\n            \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n            \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n        },\n        \"order\": {\n            \"service_id\": 5,\n            \"address\": \"Elektravägen 29\",\n            \"lat\": 59.2950814,\n            \"lon\": 18.0088671,\n            \"description\": \"Description of a general order. Do that, that and some of this.\",\n            \"image_path\": null\n        }\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find any complaints\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./complaints.js",
    "groupTitle": "5_Complaint"
  },
  {
    "type": "get",
    "url": "/complaints/:id",
    "title": "2.Get all complaints by ID",
    "version": "0.1.0",
    "name": "getAllComplaintsById",
    "group": "5_Complaint",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/complaints/:id",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Complaint's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"service_id\": 8,\n    \"order_id\": 6,\n    \"description\": \"Description of a general complaint. Something was done wrong.\",\n    \"image_path\": null,\n    \"service\": {\n        \"id\": 8,\n        \"client_id\": 5,\n        \"order_type\": \"complaint\",\n        \"company_name\": null,\n        \"con_pers\": \"Sven\",\n        \"con_tel\": \"0737223452\",\n        \"datetime\": \"2018-05-24T10:00:00.000Z\",\n        \"status\": \"new\",\n        \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n        \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n    },\n    \"order\": {\n        \"service_id\": 6,\n        \"address\": \"Drottninggatan 14\",\n        \"lat\": 59.3298085,\n        \"lon\": 18.0633878,\n        \"description\": \"Description of a general order. Do that, that and some of this.\",\n        \"image_path\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find complaint\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./complaints.js",
    "groupTitle": "5_Complaint"
  },
  {
    "type": "put",
    "url": "/complaints/:id/update",
    "title": "4.Update complaint",
    "version": "0.1.0",
    "name": "putComplaint",
    "group": "5_Complaint",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/complaints/:id/update",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Complaint's unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  order_type: \"complaint\",\n  con_pers: \"update Sven\",\n  con_tel: \"update 070XXXXXXX\",\n  datetime: \"2018-05-25T14:00:00.000Z\",\n     complaint: {\n         description: \"update complaint description text here\",\n         image_path: \"update path/to/image/here\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Complaint updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find complaint\",\n  error: \"Can't update complaint\",\n  error: \"Can't find service\",\n  error: \"Can't update service\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./complaints.js",
    "groupTitle": "5_Complaint"
  },
  {
    "type": "post",
    "url": "/int_orders/create",
    "title": "3.Create internal order",
    "version": "0.1.0",
    "name": "createInternalOrders",
    "group": "6_Internal_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/int_orders/create",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  order_type: \"int_order\",\n  con_pers: \"Erica\",\n  con_tel: \"070XXXXXXX\",\n  status: \"assigned\",\n  datetime: \"2018-05-25T14:00:00.000Z\",\n     internal_order: {\n         address: \"Elektravägen XX\",\n         lat: 59.3627103,\n         lon: 17.8738748,\n         description: \"Internal order description text here\",\n         image_path: \"path/to/image/here\"\n     \n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Internal order Created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n     error: \"Can't create internal order\",\n     error: \"Can't assign employee\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./int_orders.js",
    "groupTitle": "6_Internal_Order"
  },
  {
    "type": "delete",
    "url": "/int_orders/:id/delete",
    "title": "5.Delete internal order",
    "version": "0.1.0",
    "name": "deletetInternalOrder",
    "group": "6_Internal_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/int_orders/:id/delete",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Internal order's unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  id: 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Order deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Cant delete order\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./int_orders.js",
    "groupTitle": "6_Internal_Order"
  },
  {
    "type": "get",
    "url": "/int_orders",
    "title": "1.Get all internal orders",
    "version": "0.1.0",
    "name": "getAllInternalOrders",
    "group": "6_Internal_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/int_orders",
        "type": "js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n [\n    {\n        \"service_id\": 6,\n        \"address\": \"Drottninggatan 14\",\n        \"lat\": 59.3298085,\n        \"lon\": 18.0633878,\n        \"description\": \"Description of a general order. Do that, that and some of this.\",\n        \"image_path\": null,\n        \"service\": {\n            \"id\": 6,\n            \"client_id\": 5,\n            \"order_type\": \"order\",\n            \"company_name\": null,\n            \"con_pers\": \"Sven\",\n            \"con_tel\": \"0737223452\",\n            \"datetime\": \"2018-05-25T08:00:00.000Z\",\n            \"status\": \"done\",\n            \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n            \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n        },\n        \"complaints\": [\n            {\n                \"service_id\": 8,\n                \"order_id\": 6,\n                \"description\": \"Description of a general complaint. Something was done wrong.\",\n                \"image_path\": null\n            }\n        ]\n    },\n    {\n        \"service_id\": 7,\n        \"address\": \"Solursgränd 2\",\n        \"lat\": 59.3627103,\n        \"lon\": 17.8738748,\n        \"description\": \"Description of a general order. Do that, that and some of this.\",\n        \"image_path\": null,\n        \"service\": {\n            \"id\": 7,\n            \"client_id\": 8,\n            \"order_type\": \"order\",\n            \"company_name\": \"Hidden Company\",\n            \"con_pers\": \"Mindy\",\n            \"con_tel\": \"0721292314\",\n            \"datetime\": \"2018-05-25T08:00:00.000Z\",\n            \"status\": \"done\",\n            \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n            \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n        },\n        \"complaints\": [\n            {\n                \"service_id\": 9,\n                \"order_id\": 7,\n                \"description\": \"Description of a general complaint. Something was done wrong.\",\n                \"image_path\": null\n            }\n        ]\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find any internal orders\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./int_orders.js",
    "groupTitle": "6_Internal_Order"
  },
  {
    "type": "get",
    "url": "/int_orders/:id",
    "title": "2.Get internal orders by ID",
    "version": "0.1.0",
    "name": "getAllInternalOrdersById",
    "group": "6_Internal_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/int_orders/:id",
        "type": "js"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Internal Order's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"service_id\": 2,\n    \"address\": \"Solursgränd 2\",\n    \"lat\": 59.3627103,\n    \"lon\": 17.8738748,\n    \"description\": \"Description of a general order. Do that, that and some of this.\",\n    \"image_path\": null,\n    \"service\": {\n        \"id\": 2,\n        \"client_id\": 8,\n        \"order_type\": \"order\",\n        \"company_name\": null,\n        \"con_pers\": \"Robert\",\n        \"con_tel\": \"0721255555\",\n        \"datetime\": \"2018-05-25T14:00:00.000Z\",\n        \"status\": \"new\",\n        \"createdAt\": \"2018-05-18T14:26:08.070Z\",\n        \"updatedAt\": \"2018-05-18T14:26:08.070Z\"\n    },\n    \"complaints\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find internal order\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./int_orders.js",
    "groupTitle": "6_Internal_Order"
  },
  {
    "type": "put",
    "url": "/int_orders/:id/update",
    "title": "4.Update internal order",
    "version": "0.1.0",
    "name": "putInternalOrder",
    "group": "6_Internal_Order",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/int_orders/:id/update",
        "type": "js"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n     \"Authorization\": token\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Internal order's unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  order_type: \"int_order\",\n  con_pers: \"update Erica\",\n  con_tel: \"update 070XXXXXXX\",\n  datetime: \"2018-05-25T14:00:00.000Z\",\n     intOrder: {\n         description: \"update Description text here\",\n         image_path: \"update path/to/image/here\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     message: \"Internal order updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n  error: \"Can't find internal order\",\n  error: \"Can't update internal order\",\n  error: \"Can't find service\",\n  error: \"Can't update service\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./int_orders.js",
    "groupTitle": "6_Internal_Order"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_User_desktop_chas_projects_docs_doc_main_js",
    "groupTitle": "C__Users_User_desktop_chas_projects_docs_doc_main_js",
    "name": ""
  }
] });
