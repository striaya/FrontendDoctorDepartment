import { useState } from "react";
import { loginUser } from "../services/authService";

export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    try {
      setLoading(true);

      const res = await loginUser({
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);

      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Login gagal");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
}
