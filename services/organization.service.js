const { ORGANIZATION_MODEL } = require("../models");
const userService = require("./user.service");

const create = async ({ body }) => {
  try {
    const reqData = body;
    const isUserCreated = await userService.create({ body });
    if (isUserCreated.type === "bad") {
      return isUserCreated;
    }
    reqData.user = isUserCreated.data.id;
    const data = await ORGANIZATION_MODEL.create(reqData);

    return {
      type: "success",
      message: `organization created successfully`,
      data,
    };
  } catch (error) {
    throw error;
  }
};

const findOne = async ({ params }) => {
  try {
    const data = await ORGANIZATION_MODEL.findOne({
      _id: params.orgId,
    }).populate("user", "-password");
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
    const { searchBy, address, sector, size } = req.query;
    let filtersArray = [];
    if (searchBy) filtersArray.push({ name: { $regex: searchBy, $options: 'i' } })
    if (address) filtersArray.push({ address: { $regex: address, $options: 'i' } })
    if (sector) filtersArray.push({ sector: { $regex: sector, $options: 'i' } })
    if (size) filtersArray.push({ size: { $regex: size, $options: 'i' } })
    let filter = {}
    if (filtersArray.length) filter['$or'] = filtersArray
    let data = await ORGANIZATION_MODEL.find(filter).populate("user", "-password");
    return { type: "success", message: `organization found`, data }

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
