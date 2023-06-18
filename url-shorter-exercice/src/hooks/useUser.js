const useUser = () => {
    const { data, isLoading } = useQuery({
      queryKey: 'user',
      queryFn: user.info
    });
  
    return { data, isLoading };
};