import { useQuery } from "react-query";
import { queryKeys } from "~/constants/queryKeys";
import { getOreders } from "~/api/orders/orders";

export const useOrders = () => {
	const { data, isLoading } = useQuery([queryKeys.orders], getOreders);

	return { data, isLoading };
};
