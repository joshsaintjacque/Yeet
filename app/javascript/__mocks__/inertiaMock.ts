module.exports = {
  Inertia: {
    delete: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
  },
  hrefToUrl: jest.fn(),
  mergeDataIntoQueryString: jest.fn(() => [{ href: "http://example.com" }]),
  shouldIntercept: jest.fn(),
};
