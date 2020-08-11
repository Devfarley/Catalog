const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {ObjectId} = require('mongodb');
const { resolve } = require('path');

const url = process.env.DB_URL
const db_name = process.env.DB_NAME
const col_name = process.env.COL_NAME
const options = {
    useUnifiedTopology: true
}

const readTerms = () => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url,options, (err,client) => {
            assert.equal(err, null);

            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.find({}).toArray((err,docs) => {
                assert.equal(err, null);
                resolve(docs);
                client.close();
            });
        });
    });
    return iou
}

const createTerms = (termObj) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url,options, (err,client) => {
            assert.equal(err,null)

            const db = client.db(db_name);
            const collection = db.collection(col_name);
            collection.insertOne(termObj, (err, doc) => {
                assert.equal(err, null)
                resolve(doc.ops[0]);
                client.close();
            })
        })
    })
    return iou
}


module.exports = {
    readTerms,
    createTerms,
}