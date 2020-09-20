export function getSessionId() {
  if (typeof window === 'undefined') {
    throw new Error('Session ID cannot be generated server-side!');
  }

  const sessionId = window.localStorage.getItem('sessionId');

  if (sessionId) {
    return sessionId;
  }

  const newSessionId =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  window.localStorage.setItem('sessionId', newSessionId);

  return newSessionId;
}
