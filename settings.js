import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f7b03d2790e4450998e7d665131df58b";
const token =
  "007eJxTYOBvMjZdd7T0r5fzx5KjRQl1C6qD+So3/suZoVTL15va9k6BIc08ycA4xcjc0iDVxMTUwNLSItU8xczM1NDYMCXN1CIpaM7R5IZARobmd0eZGBkgEMRnYchNzMxjYAAAQwYfww==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
