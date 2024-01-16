interface Channel {
  audio: string;
  video: string;
}

export interface FabricAddress {
  name: string;
  display_name: string;
  resource_id: string;
  type: string;
  cover_url: null | string;
  preview_url: null | string;
  channels: Channel;
}
