const settings = {
  "name": "newtheme",
  "state": {
    "frontity": {
      "url": "https://graphicux.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Fonts",
              "/category/fonts/"
            ],
            [
              "Add-Ons",
              "/category/add-ons/"
            ],
            [
              "Templates",
              "/category/templates/"
            ],
            [
              "Graphics",
              "/category/graphics/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://graphicux.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
