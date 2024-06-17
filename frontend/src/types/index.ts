export type TMessage = {
  id?: string;
  senderUsername: string;
  sentAt?: Date;
  textBody: string;
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
