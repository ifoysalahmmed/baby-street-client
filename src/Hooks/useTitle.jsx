import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Baby Street | ${title}`;
  }, [title]);
};

export default useTitle;
