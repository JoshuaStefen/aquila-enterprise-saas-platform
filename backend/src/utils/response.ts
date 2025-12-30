export function success(data: any, message = "Success") {
  return {
    success: true,
    message,
    data,
  };
}

export function failure(message = "Error") {
  return {
    success: false,
    message,
  };
}
