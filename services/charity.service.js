const { CHARITY_MODEL } = require("../models");

const create = async ({ body }) => {
  try {
    const reqData = body;
    const data = await CHARITY_MODEL.create(reqData);
    return {
      type: "success",
      message: `charity created successfully`,
      data,
    };
  } catch (error) {
    throw error;
  }
};

const findAll = async (req) => {
  try {
    const options = req.query;
    let data;
    data = await CHARITY_MODEL.find({ categoryName: options.name });
    return { type: "success", message: `charity found`, data };
  } catch (error) {
    throw error;
  }
};

const organizationCharity = async (req) => {
  try {
    const { orgId } = req.params;
    let data = await CHARITY_MODEL.find({ donation_receiver: orgId })
    .populate('donation_sender', '-password');
    return { type: "success", message: `charity found`, data };
  } catch (error) {
    throw error;
  }
};

const userDonation = async (req) => {
  try {
    const { userId } = req.params;
    let data = await CHARITY_MODEL.find({ donation_sender: userId })
    .populate('donation_receiver');
    return { type: "success", message: `charity found`, data };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  findAll,
  organizationCharity,
  userDonation
};
