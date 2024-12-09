export interface Detail {
  title: string;
  description: string;
  complexity: {
    time: {
      average: string;
      worst: string;
      best: string;
      description: string;
    };
    space: {
      average: string;
      worst: string;
      best: string;
      description: string;
    };
  };
  pros: string[];
  cons: string[];
  code?: string;
}
