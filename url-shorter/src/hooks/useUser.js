import { useQuery } from '@tanstack/react-query';
import { user } from '../services';

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: user.info
  });

  return { data, isLoading };
};
