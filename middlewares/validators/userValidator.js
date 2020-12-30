const _ = require('lodash');
const Joi = require('joi');
const errors = require("../../errors");
const responseHandler = require("../../ResponseHandler");
const { name } = require('ejs');

class UserValidator {

    async createAPIValidation(req, res, next) {

        const schema = Joi.object().keys({
            "name": Joi.string().min(3).max(30).required(),
            "email": Joi.string().email().required(), // { minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            "role": Joi.string().valid('admin', 'user').required(),
            "password": Joi.string().alphanum().min(6).max(30),
            "mobile": Joi.number(),
            "gender": Joi.string().valid('male', 'female').required(),
            "age": Joi.number().min(18).max(120)
            
        });
        try {
            await schema.validateAsync(req.body);
            return next();
        } catch (err) {
            console.log("########Error Log ####### %s",err.details);
            return responseHandler(req, res, Promise.reject(new errors.ValidationFailed(err.details[0].message)));
        }
    }

    async updateAPIValidation(req, res, next) {
        const schema = Joi.object().keys({
            "name": Joi.string().min(3).max(30).required(),
            "role": Joi.string().valid('admin', 'user').required(),
            "mobile": Joi.number(),
            "gender": Joi.string().valid('male', 'female').required(),
            "age": Joi.number().min(18).max(120)
        });
        try {
            await schema.validateAsync(req.body);
            return next();
        } catch (err) {
            console.log("########Error Log ####### %s",err.details);
            return responseHandler(req, res, Promise.reject(new errors.ValidationFailed(err.details[0].message)));
        }
    }
}

module.exports = new UserValidator();

