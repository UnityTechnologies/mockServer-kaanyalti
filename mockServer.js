const express = require('express');

const app = express();

const router = express.Router();

const mockResponse = {
    offset: 10,
    limit: 5,
    total: 20,
    results: [
    {
        "id": "5cda6c8d-a45d-4cfb-8d30-d671fcd1d4a1",
        "name": "testBucktWithName",
        "projectguid": "cf15bc51-eb49-40c4-be2c-14b766982f2d",
        "description": "testDescription",
        "created": "2021-03-30T18:13:00.733Z",
        "changes": {
            "unchanged": 0,
            "add": 0,
            "update": 0,
            "delete": 0,
            "loading": false
        }
    },
    {
        "id": "89aa9336-64f2-41fd-b557-6fdb4877331e",
        "name": "",
        "projectguid": "cf15bc51-eb49-40c4-be2c-14b766982f2d",
        "description": "testDescription",
        "created": "2021-03-30T18:12:30.879Z",
        "changes": {
            "unchanged": 0,
            "add": 0,
            "update": 0,
            "delete": 0,
            "loading": false
        }
    },
    {
        "id": "a886dce6-3948-4823-a9b0-faf92ea39f44",
        "name": "my new name",
        "projectguid": "cf15bc51-eb49-40c4-be2c-14b766982f2d",
        "description": "test description",
        "created": "2021-03-15T21:05:14.064Z",
        "changes": {
            "unchanged": 0,
            "add": 11,
            "update": 0,
            "delete": 0,
            "last_modified": "2021-03-29T19:30:10.012Z",
            "last_modified_by": "3573572419045",
            "last_modified_by_name": "Kaan Yalti",
            "loading": false
        }
    }
]
}

app.use(express.json());

router.get("/api/v1/projects/:projectId/buckets", (req,res) => {
    console.log(req.params.projectId);
    console.log(req.headers)
    res.header("Content-Range", "items 1-3/3")
    res.json(mockResponse);
})

router.get("/test", (req,res) => {
    console.log("HELLO WORLD")
    res.json(mockResponse);
})

app.use(router);

app.listen(22080, () => {
    console.log("App is listening on 22080");
})