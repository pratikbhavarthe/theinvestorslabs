export interface CustomJwtSessionClaims {
  metadata: {
    role?: "admin" | "agent" | "user";
  };
}

declare global {
  interface UserPublicMetadata {
    role?: "admin" | "agent" | "user";
  }
}
