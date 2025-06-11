import { useCallback } from "react";

/*
***************************
  HOOK TO HANDLE DIALOG STUFF (OPENING, CLOSING)
***************************
*/

export default function useToggleDialogState(initialState = false) {
    const [isDialogOpen, setIsDialogOpen] = useState(initialState);

    const toggleDialogState = useCallback(() => {
        setIsDialogOpen((prev) => !prev);
    }, []);

    return { isDialogOpen, toggleDialogState };
}
