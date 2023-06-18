import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocation } from "wouter";

export const useLogged = () => {
  const [, setLocation] = useLocation();
  const { data, isLoading } = useUser();

  useEffect(() => {
    if (data?.success) setLocation("/");
  }, [data]);

  return isLoading;
};
