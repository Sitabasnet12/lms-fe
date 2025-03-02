import React, { useEffect, useState } from "react";
import { apiProcessor } from "../../helpers/axiosHelper";

const Dashboard = () => {
  const [user, setUser] = useState({});
  const fetchUserData = async () => {
    const data = await apiProcessor({
      method: "get",
      url: "http://localhost:9001/api/v1/auth",
      isPrivate: true,
      isRefreshToken: false,
    });

    if (data && data.status == "success") {
      setUser(data.user);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      Dashboard
      <div>
        {user?.fName}
        {user?.lName}
      </div>
    </div>
  );
};

export default Dashboard;
