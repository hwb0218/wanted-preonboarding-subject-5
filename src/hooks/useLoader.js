import React, { useState, useCallback } from "react";
import LoadingSpinner from "../Utils/LoadingSpinner";

const useLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <LoadingSpinner /> : null,
    useCallback(() => {
      setLoading(true);
    }, []),
    useCallback(() => {
      setLoading(false);
    }, []),
  ];
};

export default useLoader;
