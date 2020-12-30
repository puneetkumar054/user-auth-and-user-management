/**
 *
 *
 * @class BaseUtility
 */
class BaseUtility {

    /**
     * Creates an instance of BaseUtility.
     * @memberof BaseUtility
     */
    constructor() {
    }
    
    /**
     *
     *
     * @param {*} requestData
     * @return {*} 
     * @memberof BaseUtility
     */
    async create(requestData) {
        let request = await this.model.create(
            requestData
        );
        return request;
    }

    /**
     *
     *
     * @param {*} id
     * @param {*} updateData
     * @return {*} 
     * @memberof BaseUtility
     */
    async update(id, updateData) {
        let request = await this.model.findOneAndUpdate({ _id: id },
            updateData, { new: true }
        );
        return request;
    }

    /**
     *
     *
     * @return {*} 
     * @memberof BaseUtility
     */
    async list() {
        let request = await this.model.find();
        return request;
    }

    /**
     *
     *
     * @param {*} id
     * @return {*} 
     * @memberof BaseUtility
     */
    async getById(id) {
        let request = await this.model.findOne({ _id: id });
        return request;
    }

    /**
     *
     *
     * @param {*} email
     * @return {*} 
     * @memberof BaseUtility
     */
    async getByEmail(email) {
        let request = await this.model.findOne({ email });
        return request;
    }

    /**
     *
     *
     * @param {*} id
     * @return {*} 
     * @memberof BaseUtility
     */
    async delete(id) {
        let request = await this.model.deleteOne({ _id: id });
        return request;
    }

}

module.exports = BaseUtility;