
import { useState, useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { short, user } from '../../services'

export const useShortUrl = (formState, reset) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    short.url,
    {
      onSuccess: (response) => {
        console.info('>mutation response:', response);
        if (response.data && response.data.shortUrl) {
          setShortUrls((prevShortUrls) => [
            ...prevShortUrls,
            {
              shortUrl: response.data ?.shortUrl,
              uses: response.data ?.urls.uses,
              usesByCreator: response.data ?.urls.uses_by_creator,
            },
          ]);
        }
      },
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('shortUrls');
      },
    }
  );

  const [shortUrls, setShortUrls] = useState([]);

  const handleForm = (data) => {
    console.info(data);
    mutate(data);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const { data: userData, isLoading: userLoading } = useQuery({
    queryKey: ['user'],
    queryFn: user.info,
  });

  return { shortUrls, handleForm, userData, userLoading };
};

export default useShortUrl;