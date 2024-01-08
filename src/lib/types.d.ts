export type Subscriber = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  displayName: string;
  jobTitle: string;
  timeZone: string;
  country: string;
  region: string;
  pushNotificationKey: string;
  appSettings: {
    displayName: string;
    scopes: string[];
  };
};
