import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../Providers/Auth/auth";
// import { toast } from "react-toastify";
import api from "../../services/api";
import { Form, Input } from "./styles";

export const FormLogin = () => {
  //   const { setAuth } = useAuth();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Email obrigatório!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      //   .min(6, "Mínimo de 6 caracteres!")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>?]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Sua senha está incorreta. Confira-a."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history2 = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/login", data)
      .then((response) => {
        const { accessToken } = response.data;

        localStorage.setItem("@KenzieDoc:token", JSON.stringify(accessToken));

        // setAuth(true);

        // toast.success("Login feito com sucesso!");

        history2("/dashboard");
      })
      .catch(
        (_) => console.log("asd")
        // toast.error(
        //   "Erro ao logar. Senha e/ou email incorretos ou erro de conexão."
        // )
      );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email")}
        errors={errors.email?.message}
        placeholder={errors.email ? errors.email?.message : "Seu email"}
      />
      <Input
        type="password"
        {...register("password")}
        errors={errors.password?.message}
        placeholder={errors.password ? errors.password?.message : "Sua senha"}
      />
      <button type="submit">Entrar</button>
    </Form>
  );
};
