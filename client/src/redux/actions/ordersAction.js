import axios from "axios";
import * as actionTypes from "../constants/ordersConstants";

const URL = "http://localhost:8000";

export const getOrderDetails = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/orders/getorders`, {
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    });
    dispatch({ type: actionTypes.GET_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_ORDERS_FAIL, payload: error.message });
  }
};

export const removeFromOrders = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_ORDERS, payload: id });
};
