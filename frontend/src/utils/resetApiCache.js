import { DashboardApi } from "@/redux/api/DashboardApi";
import { OrderApi } from "@/redux/api/OrderApi";
import { ProductApi } from "@/redux/api/ProductApi";



export const resetAllApiCaches = () => (dispatch) => {
  dispatch(DashboardApi.util.resetApiState());
  dispatch(ProductApi.util.resetApiState());
  dispatch(OrderApi.util.resetApiState())
};