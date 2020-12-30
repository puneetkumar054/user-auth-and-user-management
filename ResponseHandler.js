const errors = require("./errors");
class ResponseHandler {
    successHandler(data) {
        let response = {
            "status": "success",
            "message": "Successfully done"
        };
        if (data) {
            response.data = data;
        }
        return Promise.resolve(response);
    }

    errorHandler(data) {
        return Promise.reject(data);
    }
}

function handler(req, res, promise) {
    let _inst = new ResponseHandler();
    promise.then(_inst.successHandler).catch(_inst.errorHandler)
        .then((data) => {            
            res.send(data);
        })
        .catch((data) => {
            console.log("-------getting error ------", data);
            if (data.httpCode) {
                return res.status(data.httpCode).send(data);
            } else {
                let error = new errors.Internal();
                return res.status(error.httpCode).send(error);
            }
        });
}

module.exports = handler;
