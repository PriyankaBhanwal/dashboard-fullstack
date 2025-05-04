import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Decode token to get user info
        const decoded = jwtDecode(token);
        setUserId(decoded.userId); // from payload in backend
        setUsername(decoded.username); // from payload in backend
      } catch (error) {
        console.error("Invalid token");
        setMessage("Invalid or expired session.");
        return;
      }

      // Fetch protected data
      const fetchDashboard = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/dashboard", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setMessage(res.data.msg);
        } catch (err) {
          setMessage("Unauthorized access");
        }
      };

      fetchDashboard();
    } else {
      setMessage("No token found. Please log in.");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{message}</h2>
      {userId && (
        <p>
          <strong>User ID:</strong> {userId}
        </p>
      )}
      {username && (
        <p>
          <strong>Username:</strong> {username}
        </p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
