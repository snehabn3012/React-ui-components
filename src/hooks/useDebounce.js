import { useEffect, useRef } from "react";

function useDebounce(func, delay) {
    let timer = useRef();

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        }
    }, [])

    return function (args) {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            func(args);
        }, delay)
    }
}

export default useDebounce;