

export function useHeight({ on = true }) {
    const ref = useRef();
    const [width, setWidth ]= useState(0)
    const widthRef = useRef(width)
    const [ro] = useState(
        () =>
          new ResizeObserver(packet => {
            if (ref.current && widthRef.current !== ref.current.offsetWidth) {
              widthRef.current = ref.current.offsetWidth;
              setWidth(ref.current.offsetWidth,);
            }
          })
      );
      useLayoutEffect(() => {
        if (on && ref.current) {
          setWidth(ref.current.offsetWidth);
          ro.observe(ref.current, {});
        }
        return () => ro.disconnect();
      }, [on, ref.current]);
      return [ref, width];
    }
    
    