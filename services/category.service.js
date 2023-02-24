const { CATEGORY_MODEL } = require('../models');

const create = async ({ body }) => {
    try {
        const reqData = body;
        const category = await CATEGORY_MODEL.findOne({ categoryName: reqData.name });
        if (!category) {
            const data = await CATEGORY_MODEL.create(reqData);
            return { type: 'success', message: `${data.categoryName.toUpperCase()} is created successfully`, data }
        }
        return { type: 'bad', message: `${reqData.categoryName} CATEGORY_MODEL exist!` }

    } catch (error) {
        throw error;
    }
};

const findOne = async ({ params }) => {
    try {
        const data = await CATEGORY_MODEL.findOne({ _id: params.catgoryId })
        if (data) return { type: 'success', message: `${data.categoryName.toUpperCase()} found`, data }
        else return { type: 'bad', message: `${data.categoryName.toUpperCase()} CATEGORY_MODEL not exist!` }
    } catch (error) {
        throw error;
    }
};

const findAll = async (req) => {
    try {
        const options = req.query;
        let data;
        if (options.categoryName) {
            // const $regex = escapeStringRegexp(options.categoryName);
            data = await CATEGORY_MODEL.find({ categoryName: options.categoryName });
        } else data = await CATEGORY_MODEL.find(options);
        if (data.length) return { type: 'success', message: `Categories found`, data }
        else return { type: 'bad', message: `Categories not found` }
    } catch (error) {
        throw error;
    }
};

const update = async ({ params, body }) => {
    try {
        const _id = params.catgoryId;
        const data = await CATEGORY_MODEL.findByIdAndUpdate(_id, body, { new: true });
        if (data) return { type: 'success', message: `${data.categoryName.toUpperCase()} shop Updated`, data }
        else return { type: 'bad', message: `Shops not found` }

    } catch (error) {
        throw error;
    }
};

const purge = async (req) => {
    try {

    } catch (error) {
        throw error;
    }
};

module.exports = {
    create,
    findOne,
    findAll,
    update,
    purge
}