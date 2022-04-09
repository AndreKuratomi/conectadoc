import { Link, Navigate, useNavigate } from "react-router-dom";

export const UserLogged = () => {
  const navigate = useNavigate();
  const user = "";
  const handleLogout = () => {
    localStorage.clear();
    navigate.push("/");
  };

  return (
    <>
      {user.sex === "female" ? <p>Bem-vinda, {}!</p> : <p>Bem-vindo, {}!</p>}
      <button onClick={() => navigate.push("/schedules")}>Agendamentos</button>
      <button onClick={() => navigate.push("/medicalrecord")}>
        Prontuários
      </button>
      <button onClick={handleLogout}>Login</button>
    </>
  );
};
