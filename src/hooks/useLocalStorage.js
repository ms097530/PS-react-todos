import { useState, useEffect } from 'react';

function getSavedValue(key, initialValue)
{
    console.log('in getSavedValue')
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();

    console.log('returning initialValue - non function')
    return initialValue;
}

export default function useLocalStorage(key, initialValue)
{
    // use function in useState to make sure it only runs on initial render
    const [value, setValue] = useState(() => getSavedValue(key, initialValue));

    useEffect(() =>
    {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return [value, setValue];
}
