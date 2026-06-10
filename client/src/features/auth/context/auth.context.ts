import { createContext } from "react";
import type { AuthContextType } from "../types/AuthContext.t";

export const AuthContext = createContext<AuthContextType | null>(null);
