export class TechnologyCategory {

    #validator = {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: ["code", "name", "active"],
                properties: {
                    _id: {
                        bsonType: "objectId"
                    },
                    code: {
                        bsonType: "string"
                    },
                    name: {
                        bsonType: "string"
                    },
                    active: {
                        bsonType: "bool"
                    }
                },
                additionalProperties: false
            }
        }
    }

    #db;

    constructor(db) {
        this.#db = db;
    }

    async #createCollection() {
        await this.#db.createCollection('TechnologyCategory', this.#validator);
    }

    async #createIndexes() {

    }

    async create() {
        await this.#createCollection();
        await this.#createIndexes();
    }

}