const UserModel = require("../models/UserModel")
const BaseUtility = require('./BaseUtility');

/**
 *
 *
 * @class UserUtility
 * @extends {BaseUtility}
 */
class UserUtility extends BaseUtility {
    
    /**
     * Creates an instance of UserUtility.
     * @memberof UserUtility
     */
    constructor() {
        super();
        this.model = UserModel
    }

}

module.exports = UserUtility;