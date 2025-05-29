'use server'
import { METHOD_TYPES } from "@/utils/data/platformData";
import { PAGE_DATA } from "@/utils/store/common/apis";
import { serverApiCall } from "@/utils/store/helper";

interface PageState {
  [key: string]: unknown;
}

export async function updatePageStateServer(data: PageState): Promise<PageState> {
  const result = await serverApiCall<PageState>({
    url: PAGE_DATA,
    method: METHOD_TYPES.GET,
    data
  });

  if (!result.success) {
    throw new Error(result.error?.data as string || 'API call failed');
  }

  return result.data as PageState;
}