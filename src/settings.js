import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f7b03d2790e4450998e7d665131df58b";
const token =
  "007eJxTYGBauzZE3ejyKu938/d8frGs23uyfrX2xOOMWz4XLJEIDv+iwJBmnmRgnGJkbmmQamJiamBpaZFqnmJmZmpobJiSZmqRFB3+LLkhkJGBwXMiMyMDBIL4LAy5iZl5DAwAd4IfUA==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
// const createLink = () => {
//   const ts = new Date().getTime()
//   let link = window.location.origin + `/?channel=${config}` + ts
//   return link
// }
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
