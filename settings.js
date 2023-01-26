import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f7b03d2790e4450998e7d665131df58b";
const token =
  "007eJxTYKiL3LF9zwfJeS6MF5VKvknPP1omXNRxul6hbM0khrw982cpMKSZJxkYpxiZWxqkmpiYGlhaWqSap5iZmRoaG6akmVokVahcSm4IZGS4dEqchZEBAkF8FobcxMw8BgYASKIfKw==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
