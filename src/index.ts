export interface Env { }

export default {
	async fetch(
		request: Request,
		environment: Env,
		context: ExecutionContext
	): Promise<Response> {
		const url: URL = new URL(request.url); // Convert to URL object
		const user: string = url.searchParams.get("user") || "8bit";
		const colour: string = url.searchParams.get("colour") || url.searchParams.get("colour") || "F783AC";
		const style: string = url.searchParams.get("style") || "flat";
		return new Response(null, {
			headers: {
				"location": `https://shields.io/badge/omg.lol-${user}-${colour}?style=${style}&link=https%3A%2F%2Fhome.omg.lol%2Freferred-by%2F8bit&link=https%3A%2F%2F${user}.omg.lol&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsBAMAAACLU5NGAAAAD1BMVEUAAAANQRfSTpbtc6v///8Hl2ruAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAEYSURBVHja7dxBCoMwEEDRQE8g3qAnSOv97+aq3QRkYo0d8f2tZHzLESSlSJIkSZIk/bklUm3PPUIHsbCwsLCwsLCwsC7Lig09MCwsLCwsLCwsLKyLsE7XhD4LsLCwsLCwsLCwbsVaUoaFhYWFhYWFhYWVmvV+brT3PZ0zd7OmT3M74dU+w8LCwsLCwsLCwhrISro0Y2FhYWFhYWFhYSVkfRf3aWu9x8LCwsLCwsLCwgqw/GqNhYWFhYWFhYWFFWW5PQMLCwsLCwsLCwur/2bkXBosLCwsLCwsLCyshKwR630tx4WFhYWFhYWFhXVL1u97dBkbFhYWFhYWFhYWVh5Wn6+Ws8PCwsLCwsLCwsLKw5IkSZIkSepoBXqlnU9WJ5gOAAAAAElFTkSuQmCC`,
				"content-type": "text/html;charset=UTF-8",
				"referrer-policy": "no-referrer"
			},
			status: 303
		});
	},
};
