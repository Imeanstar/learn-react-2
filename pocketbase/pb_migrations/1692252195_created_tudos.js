/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b92dalekfh7pdji",
    "created": "2023-08-17 06:03:15.604Z",
    "updated": "2023-08-17 06:03:15.604Z",
    "name": "tudos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ia2u7doe",
        "name": "doit",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2yufyhba",
        "name": "done",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b92dalekfh7pdji");

  return dao.deleteCollection(collection);
})
