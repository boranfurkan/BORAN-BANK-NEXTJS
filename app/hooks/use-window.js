import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

function useWindow() {
    const [windowWidth, setWindowWidth] = useState(0)
    const [scrollHeight, setScrollHeight] = useState(0)
    const [maxHeight, setMaxHeight] = useState(0)
    const currentPage = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('resize', function (event) {
                setWindowWidth(event.target.innerWidth)
            });

            document.addEventListener("scroll", function (event) {
                setScrollHeight(window.scrollY)
            });

            setMaxHeight(document.documentElement.scrollHeight - document.documentElement.clientHeight)
        }
    }, [currentPage]);

    return {
        windowWidth,
        maxHeight,
        scrollHeight,
    };
}

export default useWindow;