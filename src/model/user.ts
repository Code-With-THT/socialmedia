export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  bio: string;

  /**
   * Metadata
   */
  createdDate: number;
  createdDateString: string;
};
