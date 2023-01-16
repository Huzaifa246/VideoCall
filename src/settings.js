import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f7b03d2790e4450998e7d665131df58b";
const token =
  "007eJxTYHivEPlFacF/lY5DQkdWOXPu+ran7WJivjbDa9eY9K/ienkKDGnmSQbGKUbmlgapJiamBpaWFqnmKWZmpobGhilpphZJHguOJjcEMjJsk17ExMgAgSA+C0NuYmYeAwMAS9YfCg==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
