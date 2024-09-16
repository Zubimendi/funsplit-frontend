"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"; // Assuming shadcn Button
import { Input } from "@/components/ui/input"; // Assuming shadcn Input
import styles from "./AuthForm.module.css"; // CSS Module for custom styling
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

// Validation schemas using Zod
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signUpSchema = signInSchema
  .extend({
    name: z.string().min(2, "Name must be at least 2 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type AuthFormProps = {
  type: "sign-in" | "sign-up";
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = type === "sign-in" ? signInSchema : signUpSchema;

  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      {type === "sign-up" && (
        <div className={styles.inputContainer}>
          <label className={styles.form_label}>Name</label>
          <Input
            {...register("name")}
            placeholder="Your name"
            className={styles.inputField}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>
      )}

      <div className={styles.inputContainer}>
        <label className={styles.form_label}>Email</label>
        <Input
          {...register("email")}
          placeholder="you@example.com"
          type="email"
          className={styles.inputField}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.form_label}>Password</label>
        <div className={styles.passwordInputWrapper}>
          <Input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={`${styles.inputField} ${styles.passwordInput}`}
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </span>
        </div>
        {errors.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
      </div>

      {type === "sign-up" && (
        <div className={styles.inputContainer}>
          <label className={styles.form_label}>Confirm Password</label>
          <Input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm password"
            className={styles.inputField}
          />
          {errors.confirmPassword && (
            <span className={styles.error}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      )}

      <Button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div>Loading...</div>
        ) : type === "sign-in" ? (
          "Sign In"
        ) : (
          "Sign Up"
        )}
      </Button>
    </form>
  );
};

export default AuthForm;
