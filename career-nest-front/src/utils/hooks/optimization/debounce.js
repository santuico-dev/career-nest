import { useEffect } from "react";

export default function useDebounce(value, delay = 250) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
    }, [value]);

    return debouncedValue;
}
