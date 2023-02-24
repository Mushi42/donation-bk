const { setResponse } = require("../helpers");
const { charityService } = require("../services");

const create = async (req, res) => {
    try {
        console.log(req.bddy)
        // return
        const data = await charityService.create(req);
        setResponse(res, data);
    } catch (error) {
        console.log(error);
        setResponse(res, { type: "serverError" });
    }
};

const findAll = async (req, res) => {
    try {
        const data = await charityService.findAll(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};

const organizationCharity = async (req, res) => {
    try {
        const data = await charityService.organizationCharity(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};

const userDonation = async (req, res) => {
    try {
        const data = await charityService.userDonation(req);
        setResponse(res, data);
    } catch (error) {
        setResponse(res, { type: "serverError" });
    }
};

module.exports = {
    create,
    findAll,
    organizationCharity,
    userDonation,
};
