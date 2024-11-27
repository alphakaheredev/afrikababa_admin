// config pusher
import Pusher from "pusher-js";
import { PUSHER_APP_KEY, PUSHER_APP_CLUSTER } from "@/lib/constants";

export const pusher = new Pusher(PUSHER_APP_KEY, {
	cluster: PUSHER_APP_CLUSTER,
	forceTLS: true,
});

export const channel = pusher.subscribe("chat");	