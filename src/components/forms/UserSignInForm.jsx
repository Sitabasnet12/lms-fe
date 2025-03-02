import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/CustomInput";
import { userSingInInputs } from "../../assets/form-data/userAuthInpute";
import useForm from "../../hooks/useForm";
import { apiProcessor } from "../../helpers/axiosHelper";
import { useNavigate } from "react-router-dom";

export const UserSignInForm = () => {
  const navigate = useNavigate();
  const { form, setForm, handleOnChange } = useForm({});

  const handleOnSubmit = async (e) => {
    // prevent default
    e.preventDefault();

    // call the login api
    const data = await apiProcessor({
      method: "post",
      url: "http://localhost:9001/api/v1/auth/login",
      data: { email: form.email, password: form.password },
      isPrivate: false,
      isRefreshToken: false,
    });

    console.log(10000, data);

    if (data.status == "success") {
      // update session storage for access
      sessionStorage.setItem("accessJWT", data.accessToken);
      // update the local storage for refresh
      localStorage.setItem("refreshJWT", data.refreshToken);

      navigate("/dashboard");
    }
  };

  return (
    <div>
      <h3>Login !</h3>
      <hr />

      <Form onSubmit={handleOnSubmit}>
        {userSingInInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <Form.Group className="mb-3 d-grid" controlId="formBasicEmail">
          <Button type="submit">Sign In</Button>
        </Form.Group>
      </Form>
    </div>
  );
};
