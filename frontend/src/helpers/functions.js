import toast from "react-hot-toast";
export const notifySuccess = (msg) => toast.success(msg);
export const notifyError = (msg) => toast.error(msg);
export const notifyLoading = (msg) => toast.loading(msg);
