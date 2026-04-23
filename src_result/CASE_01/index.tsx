/*
CASE_01 登录注册页面 UI 布局与响应式
任务： 编写一个包含邮箱、密码、确认密码的响应式登录/注册切换表单。

公瑾审视： 检查是否使用了现代 CSS（Flexbox/Grid），在移动端是否会自动堆叠，表单是否有原生的 HTML5 校验（如 required, type="email"）。
*/
import React, { FormEvent } from 'react';
import './styles.css';

export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthPageProps {
  onSubmit?: (data: FormData, mode: 'login' | 'register') => void;
  onModeChange?: (mode: 'login' | 'register') => void;
}

export interface FormValidationResult {
  valid: boolean;
  errors: Partial<FormData>;
}

export const AuthPage: React.FC<AuthPageProps>;

export const App: React.FC;

export function validateForm(formData: FormData, isRegisterMode: boolean): FormValidationResult;

export function validateEmail(email: string): boolean;

export function validatePassword(password: string): boolean;