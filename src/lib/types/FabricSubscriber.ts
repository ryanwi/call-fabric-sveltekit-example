export interface FabricSubscriber {
  id?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  job_title?: string;
  time_zone?: string;
  country?: string;
  region?: string;
  companyName?: string;
}

export interface CreateFabricSubscriberRequest
  extends Omit<FabricSubscriber, 'password'> {
  password: string;
}
