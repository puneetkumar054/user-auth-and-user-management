const BaseService = require('./BaseService');
const UserUtility = require('../db/utilities/UserUtility');
const bcrypt = require('bcrypt');
const Promise = require('bluebird');
const _ = require('lodash');
const errors = require("../errors");

/**
 *
 *
 * @class UserService
 * @extends {BaseService}
 */
class UserService extends BaseService {
    /**
     * Creates an instance of UserService.
     * @memberof UserService
     */
    constructor() {
        super();
        this.userUtility = new UserUtility();
    }

    /**
     *
     *
     * @param {*} userData
     * @return {*} 
     * @memberof UserService
     */
    async create(userData) {
        try {

            let alreadyExist = await this.userUtility.getByEmail(userData.email);

            if (!_.isEmpty(alreadyExist)) {
                return Promise.reject(new errors.Conflict("User already exist."));
            }
            userData.isActive = true;
            userData.password = bcrypt.hashSync(userData.password, 10);
            let user = await this.userUtility.create(userData);
            return Promise.resolve(user)
        } catch (error) {
            return Promise.reject(error)
        }
    };

    /**
     *
     *
     * @return {*} 
     * @memberof UserService
     */
    async list() {
        try {
            let user = await this.userUtility.list();
            return Promise.resolve(user)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    
    /**
     *
     *
     * @param {*} id
     * @return {*} 
     * @memberof UserService
     */
    async get(id) {
        try {
            let user = await this.userUtility.getById(id);
            return Promise.resolve(user)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    /**
     *
     *
     * @param {*} id
     * @return {*} 
     * @memberof UserService
     */
    async delete(id) {
        try {
            let user = await this.userUtility.delete(id);
            return Promise.resolve(user)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    /**
     *
     *
     * @param {*} id
     * @param {*} updateData
     * @return {*} 
     * @memberof UserService
     */
    async update(id, updateData) {
        try {
            let user = await this.userUtility.update(id, updateData);
            return Promise.resolve(user)
        } catch (error) {
            return Promise.reject(error)
        }
    }

}
module.exports = UserService;