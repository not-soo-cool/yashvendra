import axios from "axios";

const serverUrl = "http://localhost:5001/api/v1"
// const serverUrl = "https://port-backend-ha0p.onrender.com/api/v1"

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });

    const { data } = await axios.get(`${serverUrl}/user`, {
      withCredentials: true,
    });

    dispatch({
      type: "GET_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const { data } = await axios.post(
    `${serverUrl}/login`,{email, password}, {
      withCredentials: true,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.message,
    });

  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });

    const { data } = await axios.get(`${serverUrl}/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_USER_REQUEST",
    });

    const { data } = await axios.get(`${serverUrl}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "LOAD_USER_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_USER_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const updateUser = (name, email, password, skills, about) => async (dispatch) => {
    try {
      dispatch({
        type: "UPDATE_USER_REQUEST",
      });

      const { data } = await axios.put(
      `${serverUrl}/admin/update`,
      {name, email, password, skills, about}, {
        withCredentials: true,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_FAILURE",
        payload: error.response.data.message,
      });
    }
  };

export const addTimeline = (title, description, date) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TIMELINE_REQUEST",
    });

    const { data } = await axios.post(
    `${serverUrl}/admin/timeline/add`,
    {title, description, date}, {
      withCredentials: true,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: "ADD_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TIMELINE_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/timeline/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "DELETE_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addYoutube = (title, url, image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_YOUTUBE_REQUEST",
    });

    const { data } = await axios.post(
    `${serverUrl}/admin/youtube/add`,
    { title, url, image }, {
      withCredentials: true,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: "ADD_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const deleteYoutube = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_YOUTUBE_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/youtube/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "DELETE_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const addProject = (title, url, image, description, techStack) => async (dispatch) => {
    try {
      dispatch({
        type: "ADD_PROJECT_REQUEST",
      });

      const { data } = await axios.post(
      `${serverUrl}/admin/project/add`,
      { title, url, image, description, techStack }, {
        withCredentials: true,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: "ADD_PROJECT_SUCCESS",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "ADD_PROJECT_FAILURE",
        payload: error.response.data.message,
      });
    }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROJECT_REQUEST",
    });

    const { data } = await axios.delete(`/api/v1/admin/project/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "DELETE_PROJECT_SUCCESS",
      payload: data.message,
    });

  } catch (error) {
    dispatch({
      type: "DELETE_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_US_REQUEST",
    });

    const { data } = await axios.post(
    `${serverUrl}/contact`, {name, email, message }, {
    withCredentials: true,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: "CONTACT_US_SUCCESS",
      payload: data.message,
    });

  } catch (error) {
    dispatch({
      type: "CONTACT_US_FAILURE",
      payload: error.response.data.message,
    });
  }
};