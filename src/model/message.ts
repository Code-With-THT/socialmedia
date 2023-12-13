export type Message = {
  id: string;
  thread: string;
  sender: string;
  text: string;

  /**
   * Metadata
   */
  sentDate: number;
  sentDateString: string;
  hasBeenRead: boolean;
};
