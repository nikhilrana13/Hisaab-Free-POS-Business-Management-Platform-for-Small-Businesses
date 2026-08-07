import { DashboardApi } from "@/redux/api/DashboardApi";
import { ProductApi } from "@/redux/api/ProductApi";



export const resetAllApiCaches = () => (dispatch) => {
  dispatch(DashboardApi.util.resetApiState());
  dispatch(ProductApi.util.resetApiState());
};