import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการเปลี่ยนหน้า

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Logging in with", email); // ดูค่า email ที่ป้อนเข้าไป
    try {
      await signInWithEmailAndPassword(auth, email, password); // ล็อกอินด้วย Firebase
      console.log("Login successful, navigating to dashboard");
      navigate("/dashboard"); // ถ้าล็อกอินสำเร็จ ให้ไปที่ dashboard
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;