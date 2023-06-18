import { Redirect, Route as WouterRoute } from "wouter";
import { useUser } from "../../hooks";

const Route = ({ guarded = false, component: Component, ...rest }) => {
  const { data, isLoading } = useUser();

  if (isLoading) return <h3>Loading...</h3>;

  if (!guarded) return <Component />;

  return guarded && data?.success ? (
    <WouterRoute {...{ component: Component, ...rest }} />
  ) : (
    <Redirect to="/login" />
  );
};

export default Route;
