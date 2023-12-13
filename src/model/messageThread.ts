export type MessageThread = {
  id: string;
  users: string[];

  /**
   * Metadata
   */
  createdDate: number;
  createdDateString: string;
};
