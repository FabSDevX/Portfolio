import { toast } from "sonner";

export function promiseToast(promiseParam, loadingMsg, successFullMsg, failureMsg) {
    toast.promise(promiseParam, {
      loading: loadingMsg,
      success: () => {
        toast.success(successFullMsg);
      },
      error: () => {
        toast.warning(failureMsg);
      },
    });
  }