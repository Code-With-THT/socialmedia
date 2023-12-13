export type Friendship = {
  id: string;
  users: string[];
  requester: string;
  status: FRIENDSHIP_STATUS;

  /**
   * Metadata
   */
  createdDate: number;
  createdDateString: string;
  acceptedDate: number;
};

export enum FRIENDSHIP_STATUS {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  DECLINED = 'declined',
}
