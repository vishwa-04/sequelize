import { Request, Response } from 'express';

interface CustomRequest extends Request {
  transaction?: {
    commit: () => Promise<void>;
    rollback: () => Promise<void>;
  };
}

export const generalResponse = async (
  request: CustomRequest,
  response: Response,
  data: any = null,
  toast = false,
  responseType = 'success',
  statusCode = 200,
) => {
  if (request.transaction) {
    if (responseType === 'success') await request.transaction.commit();
    else await request.transaction.rollback();
  }

  response.status(statusCode).send({
    data,
    toast,
    responseType,
  });
};
