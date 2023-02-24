const { ORGANIZATION_MODEL } = require("../models");
const userService = require("./user.service");

const create = async ({ body }) => {
  try {
    const reqData = body;
    const isUserCreated = await userService.create({ body });
    if (isUserCreated.type === "bad") {
      return isUserCreated;
    }

    const data = await ORGANIZATION_MODEL.create(reqData);

    return {
      type: "success",
      message: `organization created successfully`,
      data,
    };
  } catch (error) {
    console.log("=userService", error)
    throw error;
  }
};

const findOne = async ({ params }) => {
  try {
    const data = await ORGANIZATION_MODEL.findOne({ _id: params.orgId });
    if (data) return { type: "success", message: `organization found`, data };
    else
      return {
        type: "bad",
        message: `${data.categoryName.toUpperCase()} ORGANIZATION_MODEL not exist!`,
      };
  } catch (error) {
    throw error;
  }
};

const findAll = async (req) => {
  try {
    const options = req.query;
    let data;
    if (options.name) {
      // const $regex = escapeStringRegexp(options.categoryName);
      data = await ORGANIZATION_MODEL.find({ categoryName: options.name });
    } else data = await ORGANIZATION_MODEL.find(options);
    if (data.length)
      return { type: "success", message: `Categories found`, data };
    else return { type: "bad", message: `Categories not found` };
  } catch (error) {
    throw error;
  }
};

const update = async ({ params, body }) => {
  try {
    const _id = params.orgId;
    const data = await ORGANIZATION_MODEL.findByIdAndUpdate(_id, body, {
      new: true,
    });
    if (data) return { type: "success", message: `organization updated`, data };
    else return { type: "bad", message: `Shops not found` };
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
};
