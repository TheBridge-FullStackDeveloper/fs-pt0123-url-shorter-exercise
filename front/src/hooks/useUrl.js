import { useMutation, useQueryClient } from "react-query";
import { url } from "../services";
import { useState } from "react";

export const useUrl = () => {
  const [shortURL, setShortURL] = useState('')
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: url.generate,
    onSuccess: (result) => {
      if (result.success) {
        setShortURL(result.data.url)
        queryClient.invalidateQueries({ queryKey: ["shorts"] });
      }
    },
  });

  return [shortURL, mutate];
};
