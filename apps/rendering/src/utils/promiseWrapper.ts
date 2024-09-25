const promiseWrapper = (promise: Promise<any>): any => {
    let status = 'pending';
    let result: any;

    const pending = promise.then(
        (value) => {
            status = 'success';
            result = value;
        },
        (error) => {
            status = 'error';
            result = error;
        }
    );

    return () => {
        switch (status) {
            case 'pending':
                throw pending;
            case 'success':
                return result;
            case 'error':
                throw result;
            default:
                throw new Error('Unknown status');
        }
    };
};

export { promiseWrapper };