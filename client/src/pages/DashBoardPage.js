import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      {user && <p>Email: {user.email}</p>}
    </div>
  );
}

export default DashboardPage;
