import { useState, useEffect } from 'react';

type Props = {
    value: string
    delay?: number
}

const useSearchDebounce = ({value, delay = 500}: Props) => {

    const [debounceSearchValue, setDebounceSearchValue] = useState(value);

    useEffect(() => {
        const debounceTimeHandler = setTimeout(() => {
            setDebounceSearchValue(value)
        }, delay);

        return () => {
            clearTimeout(debounceTimeHandler);
        }
    }, [value, delay]);

  return debounceSearchValue
}

export default useSearchDebounce