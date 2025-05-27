import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenericErrorResponse } from './error.interface';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1] || 'unknown',
      message: issue.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: errorSources.map((error) => error.message).join(', '),
    errorSources,
  };
};

export default handleZodError;
