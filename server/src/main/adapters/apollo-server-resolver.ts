import { Controller } from '@/presentation/contracts';

export const adaptResolver = async (
	controller: Controller,
	args?: any,
): Promise<any> => {
	const request = {
		...(args || {}),
	};
	const httpResponse = await controller.handle(request);
	return httpResponse.data;
};
