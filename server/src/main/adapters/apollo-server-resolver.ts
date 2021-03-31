import { Controller } from '@/presentation/contracts'

export const adaptResolver = async (controller: Controller, args: any): Promise<any> => {
  const httpResponse = await controller.handle(args)
  return httpResponse.data
}
