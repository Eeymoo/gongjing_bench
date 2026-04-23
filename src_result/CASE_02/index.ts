/*
CASE_02 登录注册后端安全接口 (JWT/Hash)
任务： 使用 Node.js/Bun 编写 /register 和 /login 接口。

公瑾审视： 严禁明文存储密码，必须使用 bcrypt 或 argon2；登录成功必须返回合规的 JWT。
*/
import type { Server } from 'bun';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface User {
  id: number;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: {
      id: number;
      email: string;
      createdAt: Date;
    };
    token?: string;
  };
}

export interface JWTPayload {
  userId: number;
  email: string;
  iat: number;
  exp: number;
}

export function isValidEmail(email: string): boolean;

export function isValidPassword(password: string): boolean;

export function findUserByEmail(email: string): User | undefined;

export function generateToken(userId: number, email: string): string;

export function registerHandler(req: Request): Promise<Response>;

export function loginHandler(req: Request): Promise<Response>;

export function verifyToken(token: string): any;

export function profileHandler(req: Request): Promise<Response>;

export function createServer(port?: number): Server;