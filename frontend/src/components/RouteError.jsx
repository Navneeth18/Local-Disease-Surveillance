import React from "react";
import { useRouteError } from "react-router-dom";

function RouteError() {
  const routeErr = useRouteError();

  return (
    <div className="bg-gray-900 text-yellow-400 flex flex-col justify-center items-center min-h-screen">
      <p className="text-4xl font-bold">{routeErr.data}</p>
      <p className="text-2xl text-red-500">
        {routeErr.status} - {routeErr.statusText}
      </p>
    </div>
  );
}

export default RouteError;
