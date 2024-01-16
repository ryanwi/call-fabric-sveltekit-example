export const validateEmail = (email: string) => {
  const domain = email.split('@')[1];
  if (domain !== 'signalwire.com') {
    return false;
  }
  
  return true;
};
