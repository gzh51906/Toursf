/* 引入mongodb数据库模块 */
const mongodb = require("mongodb");

/* 引入配置文件：数据库地址、数据库名 */
const {
    DBurl,
    DBname
} = require("../config.json");

/* 获取客户端 */
const {
    MongoClient,
    ObjectId
} = mongodb;

/* 连接mongodb数据库 */
const connect = () => {
    return new Promise((reslove, reject) => {
        MongoClient.connect(DBurl, async (err, client) => {
            if (err) throw err;
            let db = client.db(DBname);
            reslove({
                client,
                db
            })
        })
    })
}

// 查
exports.find = async (colName, query = {}, {
    sort,
    limit,
    skip,
    asc
} = {}) => {
    let {
        client,
        db
    } = await connect();

    // console.log(client)

    let collection = db.collection(colName);

    if (query._id) {
        query._id = ObjectId(query._id);
    }

    let result = collection.find(query);

    if (sort) {
        let opt = {};
        opt[sort] = asc ? 1 : -1;
        result = result.sort(opt);
    }

    if (limit) {
        result = result.limit(limit);
    }

    if (skip) {
        result = result.skip(skip);
    }

    let data = await result.toArray();
    client.close();

    return data;
}

// 增
exports.insert = async (colName, data) => {
    /* 连接数据库 */
    let {
        client,
        db
    } = await connect();
    /* 使用一个集合 */
    let collection = db.collection(colName);
    let result = await collection.insertOne(data);
    // 查询结束后关闭客户端连接，释放资源
    client.close();
    return result;
}

// 删
exports.remove = async (colName, query = {}) => {
    let {
        db,
        client
    } = await connect();
    // console.log(query._id)
    if (query._id) {
        query._id = ObjectId(query._id);
    }
    //  获取集合
    let collection = db.collection(colName);

    collection.deleteMany(query)

    client.close();
}

// 改
exports.update = async (colName, query = {
    id
}, {
    name,
    image,
    departure_desc,
    order_count,
    default_price,
    origin_price
} = {}) => {
    let {
        db,
        client
    } = await connect();

    // if (query._id) {
    //     query._id = ObjectId(query._id);
    // }
    //  获取集合
    let collection = db.collection(colName);

    let data = {}
    if (name) {
        data.name = name
    }
    if (image) {
        data.image = image
    }
    if (departure_desc) {
        data.departure_desc = departure_desc
    }
    if (order_count) {
        data.order_count = order_count
    }
    if (default_price) {
        data.default_price = default_price
    }
    if (origin_price) {
        data.origin_price = origin_price
    }
    collection.update(query, {
        $set: data
    })

    client.close();
}