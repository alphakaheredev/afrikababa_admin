// config pusher
import Pusher from "pusher-js";

export const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
	cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
});

export const channel = pusher.subscribe("chat");
export const event = channel.bind("message", (data: any) => {
	console.log(data);
});
