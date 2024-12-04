# Unhandled error in Node.js HTTP server

This repository demonstrates a common error in Node.js HTTP servers: not handling errors properly.  The server crashes silently upon encountering an error (like port already in use) without providing any helpful debugging information.

## Bug

The `bug.js` file contains a basic HTTP server that lacks error handling.  Running this code and attempting to start the server on a port that's already in use will result in a crash with minimal output.

## Solution

The `bugSolution.js` file provides a corrected version that includes an error handler. This handler catches the error, logs it to the console, and allows the application to continue running (or take appropriate action) instead of crashing.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js` (this might crash if port 8080 is in use).
3. Run `node bugSolution.js` (this will gracefully handle port conflicts).

This example highlights the importance of robust error handling in Node.js applications for improved stability and easier debugging.