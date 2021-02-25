export const getSessionId = () => {
  if (typeof window === 'undefined') {
    throw new Error('Session ID cannot be generated server-side!');
  }

  //TODO: remove sessionId legacy name
  const legacySessionId = window.localStorage.getItem('sessionId');

  if (legacySessionId) {
    window.localStorage.setItem('lyket-session-id', legacySessionId);
    window.localStorage.removeItem('sessionId');
  }

  const sessionId = window.localStorage.getItem('lyket-session-id');

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

  window.localStorage.setItem('lyket-session-id', newSessionId);

  return newSessionId;
};
