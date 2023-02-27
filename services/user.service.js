const { USER_MODEL } = require('../models');

const create = async ({ body }) => {
    try {
        const reqData = body;
        const user = await USER_MODEL.findOne({ email: reqData.email });
        if (!user) {
            const data = await USER_MODEL.create(reqData);
            return { type: 'success', message: `user created successfully`, data }
        }
        return { type: 'bad', message: `user email already registered!` }

    } catch (error) {
        throw error;
    }
};
const login = async ({ body }) => {
    try {
        const { email, password } = body;
        const user = await USER_MODEL.findOne({ email });
        if (!user) return { type: 'bad', message: `User not exist!` }

        if (password === user.password) {
            user.password = undefined
            return { type: 'success', message: `login successfully`, data: user }
        } else {
            return { type: 'bad', message: `${reqData.name} User exist!` }
        }


    } catch (error) {
        throw error;
    }
};

const findOne = async ({ params }) => {
    try {
        const data = await USER_MODEL.findOne({ _id: params.userId })
        if (data) return { type: 'success', message: `user found`, data }
        else return { type: 'bad', message: `user not exist!` }
    } catch (error) {
        throw error;
    }
};

const findAll = async (req) => {
    try {
        const options = req.query;
        let data;
        if (options.name) {
            data = await USER_MODEL.find({ name: options.name });
        } else data = await USER_MODEL.find(options);
        if (data.length) return { type: 'success', message: `User found`, data }
        else return { type: 'bad', message: `User not found` }
    } catch (error) {
        throw error;
    }
};

const update = async ({ params, body }) => {
    try {
        const _id = params.userId;
        const data = await USER_MODEL.findByIdAndUpdate(_id, body, { new: true });
        if (data) return { type: 'success', message: `user updated`, data }
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
    purge,
    login
}
