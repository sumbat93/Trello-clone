import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";
import { signInThunk } from "../store/thunk/authThunk";

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (data.email === "admin@gmail.com" && data.password === "Admin123!") {
      data.role = "ADMIN";
    } else {
      data.role = "USER";
    }
    dispatch(signInThunk({ userData: data, navigate }));
    reset();
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "500px",
        padding: "20px",
        textAlign: "center",
        margin: "0 auto",
        marginTop: "150px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: "20px",
        }}
      >
        Sign In
      </Typography>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <TextField
            label="Email"
            fullWidth
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Required field",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <TextField
            label="Password"
            fullWidth
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "Required field",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
                message:
                  "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
              },
            })}
          />
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        </InputWrapper>
        <Button type="submit" variant="contained">
          Login
        </Button>
        <StyledBox>
          <p>У вас нет аккаунта?</p>
          <StyledLink to="/sign-up">Sign Up</StyledLink>
        </StyledBox>
      </StyledForm>
    </Paper>
  );
};

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;
const StyledBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;
