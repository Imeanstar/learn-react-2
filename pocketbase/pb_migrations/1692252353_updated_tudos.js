/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b92dalekfh7pdji")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ia2u7doe",
    "name": "doit",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 2,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b92dalekfh7pdji")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
