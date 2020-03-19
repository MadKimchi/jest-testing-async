// this can be used instead of jest.mock('./http');
const get = (url) => {
    return Promise.resolve({data: {title: 'delectus aut autem'}});
};

exports.get = get;