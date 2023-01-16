import TikAPI from "tikapi";

export default async function handler(req, res) {
	const api = TikAPI("DemoAPIKeyTokenSeHYGXDfd4SFD320Sc39Asd0Sc39Asd4s");
	api.set({
		$sandbox: true,
	});

	const response = await api.user.info({
		username: req.query.username
	});

	res.json(response);
}
