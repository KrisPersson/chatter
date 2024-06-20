export type TMessage = {
  id?: string;
  senderUsername: string;
  sentAt?: Date;
  textBody: string;
  channel?: string;
};

export type TChannel = {
  founder: string;
  name: string;
  numMembers: number;
};

export type TBasicRelationship = {
  id: string;
  usernames: string[];
};

export type TChannelMember = {
  username: string;
  isModerator?: boolean;
  isOwner?: boolean;
};
