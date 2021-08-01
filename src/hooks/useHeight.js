

export function useHeight({ on = true }) {
const ref = useRef();
const [height, setHeight] = useState(0)
const heightRef = useRef(height)
const [ro] = useState(
    () =>
      new ResizeObserver(packet => {
        if (ref.current && heightRef.current !== ref.current.offsetHeight) {
          heightRef.current = ref.current.offsetHeight;
          setHeight(ref.current.offsetHeight);
        }
      })
  );
  useLayoutEffect(() => {
    if (on && ref.current) {
      setHeight(ref.current.offsetHeight);
      ro.observe(ref.current, {});
    }
    return () => ro.disconnect();
  }, [on, ref.current]);
  return [ref, height];
}

