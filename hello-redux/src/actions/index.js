import { COUNTER_INCREMENT } from "../constants";

export const counterIncrement = (val = 1) => ({
  type: COUNTER_INCREMENT,
  val,
});