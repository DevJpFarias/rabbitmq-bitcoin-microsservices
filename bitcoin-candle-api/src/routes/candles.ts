import { Router } from "express"
import CandleController from "../controllers/CandleController"

export const candleRouter = Router()
const candleCtrl = new CandleController()

candleRouter.get('/:quantity', async (request, response) => {
  const quantity = parseInt(request.params.quantity)
  const lastCandles = await candleCtrl.findLastCandles(quantity)

  return response.json(lastCandles)
})