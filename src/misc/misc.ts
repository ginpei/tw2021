export function rootPath(): string {
  return "/";
}

export function assureError(error: unknown): Error {
  if (error instanceof Error) {
    return error;
  }

  return new Error(String(error));
}
