// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './server.js';
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// ANY NETWORK REQUEST THAT COMES THROUGH ROUTE THEM TO MOCK SERVER WORKER

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.

afterEach(() => server.resetHandlers());
//HERE WE RESET THE HANDLERS

// Clean up after the tests are finished.
afterAll(() => server.close());
