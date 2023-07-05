import {
	TypedUseSelectorHook,
  	useDispatch,
  	useSelector
} from "react-redux";
import { RootState, AppDispatch } from "@/store";

// useSelector 함수를 타입과 함께 alias 한 것
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
