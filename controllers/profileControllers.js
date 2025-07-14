import * as dbProfileService from "../services/profileServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorator/ctrlWrapper.js";

const getProfileById = async (req, res) => {
  // const { _id: owner } = req.user;
  // if (req.query.date) {
  //   const { date } = req.query;
  //   const result = await dbTaskService.getAllTasks({ owner, date });
  //   return res.json(result);
  // }
  // const result = await dbTaskService.getAllTasks({ owner });
  // res.json(result);
};

const addBabyWeight = async (req, res) => {
  const { _id: owner } = req.user;

  const findDate = await dbProfileService.getOneProfile({ owner });
  console.log(findDate);

  if (!findDate) {
    const createPortfolio = await dbProfileService.createProfile({
      babyWeightService: req.body,
      owner,
    });

    return res.status(201).json(createPortfolio);
  }
  const { _id } = findDate;
  findDate.babyWeightService.push(req.body);
  const result = await dbProfileService.updateProfile({ _id }, findDate);

  res.status(201).json(result);
};

const addBabyLength = async (req, res) => {
  const { _id: owner } = req.user;

  const findDate = await dbProfileService.getOneProfile({ owner });
  console.log(findDate);

  if (!findDate) {
    const createPortfolio = await dbProfileService.createProfile({
      babyLengthService: req.body,
      owner,
    });

    return res.status(201).json(createPortfolio);
  }
  const { _id } = findDate;
  findDate.babyLengthService.push(req.body);
  const result = await dbProfileService.updateProfile({ _id }, findDate);

  res.status(201).json(result);
};

export default {
  getProfileById: ctrlWrapper(getProfileById),
  addBabyWeight: ctrlWrapper(addBabyWeight),
  addBabyLength: ctrlWrapper(addBabyLength),
};
