import TikAPI from "tikapi";

export default async function handler(req, res) {
	const api = TikAPI("DemoAPIKeyTokenSeHYGXDfd4SFD320Sc39Asd0Sc39Asd4s");
	api.set({
		$sandbox: true,
	});

	const response = await api.public.posts({
		secUid: "MS4wLjABAAAAsHntXC3s0AvxcecggxsoVa4eAiT8OVafVZ4OQXxy-9htpnUi0sOYSr0kGGD1Loud"
	});

	res.json(response);
}
