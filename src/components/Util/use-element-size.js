import { RefObject, useCallback, useEffect, useLayoutEffect, useState } from 'react'





function useElementSize(node) {


    const [dimeonsion, setDimension] = useState({detail:{}});


    useLayoutEffect(() => {
        if (node) {
            const measuer = () => {
                
                setDimension({ 
                    detail: node.current.getBoundingClientRect(),
               
                 });
            }

            window.addEventListener("resize", measuer);

            return () => {
                window.removeEventListener("resize", measuer);
            };
        }
    }, [node])

    return dimeonsion
}

export default useElementSize