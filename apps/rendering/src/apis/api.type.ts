export const ResponseMessageType = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
} as const;

export type AxiosCustomError = {
  message: typeof ResponseMessageType.ERROR;
  code: null;
  data: null;
  errors: {
    code: number;
    message: string;
  };
};
