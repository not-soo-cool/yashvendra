import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  // loading: true,
};

const GET_USER_REQUEST = createAction('GET_USER_REQUEST');
const GET_USER_SUCCESS = createAction('GET_USER_SUCCESS');
const GET_USER_FAILURE = createAction('GET_USER_FAILURE');

const LOGIN_REQUEST = createAction('LOGIN_REQUEST');
const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS');
const LOGIN_FAILURE = createAction('LOGIN_FAILURE');

const LOAD_USER_REQUEST = createAction('LOAD_USER_REQUEST');
const LOAD_USER_SUCCESS = createAction('LOAD_USER_SUCCESS');
const LOAD_USER_FAILURE = createAction('LOAD_USER_FAILURE');

const LOGOUT_REQUEST = createAction('LOGOUT_REQUEST');
const LOGOUT_SUCCESS = createAction('LOGOUT_SUCCESS');
const LOGOUT_FAILURE = createAction('LOGOUT_FAILURE');

const CLEAR_ERRORS = createAction('CLEAR_ERRORS');
const CLEAR_MESSAGE = createAction('CLEAR_MESSAGE');

const UPDATE_USER_REQUEST = createAction('UPDATE_USER_REQUEST');
const UPDATE_USER_SUCCESS = createAction('UPDATE_USER_SUCCESS');
const UPDATE_USER_FAILURE = createAction('UPDATE_USER_FAILURE');

const ADD_TIMELINE_REQUEST = createAction('ADD_TIMELINE_REQUEST');
const ADD_TIMELINE_SUCCESS = createAction('ADD_TIMELINE_SUCCESS');
const ADD_TIMELINE_FAILURE = createAction('ADD_TIMELINE_FAILURE');

const DELETE_TIMELINE_REQUEST = createAction('DELETE_TIMELINE_REQUEST');
const DELETE_TIMELINE_SUCCESS = createAction('DELETE_TIMELINE_SUCCESS');
const DELETE_TIMELINE_FAILURE = createAction('DELETE_TIMELINE_FAILURE');

const ADD_YOUTUBE_REQUEST = createAction('ADD_YOUTUBE_REQUEST');
const ADD_YOUTUBE_SUCCESS = createAction('ADD_YOUTUBE_SUCCESS');
const ADD_YOUTUBE_FAILURE = createAction('ADD_YOUTUBE_FAILURE');

const DELETE_YOUTUBE_REQUEST = createAction('DELETE_YOUTUBE_REQUEST');
const DELETE_YOUTUBE_SUCCESS = createAction('DELETE_YOUTUBE_SUCCESS');
const DELETE_YOUTUBE_FAILURE = createAction('DELETE_YOUTUBE_FAILURE');

const ADD_PROJECT_REQUEST = createAction('ADD_PROJECT_REQUEST');
const ADD_PROJECT_SUCCESS = createAction('ADD_PROJECT_SUCCESS');
const ADD_PROJECT_FAILURE = createAction('ADD_PROJECT_FAILURE');

const DELETE_PROJECT_REQUEST = createAction('DELETE_PROJECT_REQUEST');
const DELETE_PROJECT_SUCCESS = createAction('DELETE_PROJECT_SUCCESS');
const DELETE_PROJECT_FAILURE = createAction('DELETE_PROJECT_FAILURE');

const CONTACT_US_REQUEST = createAction('CONTACT_US_REQUEST');
const CONTACT_US_SUCCESS = createAction('CONTACT_US_SUCCESS');
const CONTACT_US_FAILURE = createAction('CONTACT_US_FAILURE');


export const userReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(GET_USER_REQUEST, (state) => {
    state.loading = true;
  })
  .addCase(GET_USER_SUCCESS, (state, action) => {
    state.loading = false;
    state.user = action.payload;
  })
  .addCase(GET_USER_FAILURE, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  })
  .addCase(CLEAR_ERRORS, (state) => {
    state.error = null;
  })
});

export const loginReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(LOGIN_REQUEST, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    })
    .addCase(LOGIN_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload;
    })
    .addCase(LOGIN_FAILURE, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })

    .addCase(LOAD_USER_REQUEST, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    })
    .addCase(LOAD_USER_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(LOAD_USER_FAILURE, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(LOGOUT_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(LOGOUT_SUCCESS, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.message = action.payload;
    })
    .addCase(LOGOUT_FAILURE, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })

    .addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    })
    .addCase(CLEAR_MESSAGE, (state) => {
      state.message = null;
    })
  }
);

export const updateReducer = createReducer(initialState, (builder) =>
  {
    builder
    .addCase(UPDATE_USER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(UPDATE_USER_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(UPDATE_USER_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(ADD_TIMELINE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(ADD_TIMELINE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ADD_TIMELINE_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(DELETE_TIMELINE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(DELETE_TIMELINE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DELETE_TIMELINE_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(ADD_YOUTUBE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(ADD_YOUTUBE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ADD_YOUTUBE_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(DELETE_YOUTUBE_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(DELETE_YOUTUBE_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DELETE_YOUTUBE_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(ADD_PROJECT_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(ADD_PROJECT_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(ADD_PROJECT_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(DELETE_PROJECT_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(DELETE_PROJECT_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(DELETE_PROJECT_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(CONTACT_US_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(CONTACT_US_SUCCESS, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(CONTACT_US_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(CLEAR_ERRORS, (state) => {
      state.error = null;
    })
    .addCase(CLEAR_MESSAGE, (state) => {
      state.message = null;
    })
  }
);