import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f7b03d2790e4450998e7d665131df58b";
const token =
  "007eJxTYNBaPam1Man775qsexKNlYs3HHG+LPLwEdNE5Zo7Jjcv7dFUYEgzTzIwTjEytzRINTExNbC0tEg1TzEzMzU0NkxJM7VIqmU4ktwQyMiwLnszMyMDBIL4LAy5iZl5DAwAstggew==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
