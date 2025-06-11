import { useCallback, useState } from "react";

/*
***************************
  HOOK TO THE HANDLE LOADING
***************************
*/

export default function useToggleLoadingState(initialState = false) {
    const [isLoading, setIsLoading] = useState(initialState);

    const toggleLoadigState = useCallback(() => {
        setIsLoading((prev) => !prev);
    }, [])

    return { isLoading, toggleLoadigState }
}
