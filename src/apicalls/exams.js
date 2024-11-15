const { default: axiosInstance } = require(".");
const serverurl = process.env.REACT_APP_SERVER_URL;
// add exam

export const addExam = async (payload) => {
  try {
    const response = await axiosInstance.post(`${serverurl}/api/exams/add`, payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get all exams
export const getAllExams = async () => {
  try {
    const response = await axiosInstance.post(`${serverurl}/api/exams/get-all-exams`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get exam by id

export const getExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${serverurl}/api/exams/get-exam-by-id`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// edit exam by id

export const editExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${serverurl}/api/exams/edit-exam-by-id`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// delete exam by id

export const deleteExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${serverurl}/api/exams/delete-exam-question`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// add question to exam

export const addQuestionToExam = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${serverurl}/api/exams/add-question-to-exam`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const editQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${serverurl}/api/exams/edit-question-in-exam`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${serverurl}/api/exams/delete-exam-question`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
