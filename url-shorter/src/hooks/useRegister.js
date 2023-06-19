import { useMutation, useQueryClient } from '@tanstack/react-query';
import { auth } from '../services';

export const useRegister = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: auth.registro,
    onSuccess: (response) => {
      console.info('> Mutation response:', response);
      if (response.success) queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  });
  return mutate;
};
