import React from 'react';

export const useScroll = () => {

    const ref = React.useRef<HTMLHeadElement>(null);

    const scroll = React.useCallback(() => {
        const header = ref.current!;
        if (window.scrollY > header.scrollHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }, [ref]);

    React.useEffect(() => {
        if (ref) {
            window.addEventListener('scroll', scroll);
        }
        return () => window.removeEventListener('scroll', scroll);
    }, [ref,scroll]);

    return React.useMemo(() => {
        return ref;
    }, [ref]);

};