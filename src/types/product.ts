type contentType = {
  title: string;
  description: string;
  image: string;
};

export type productType = {
  id: number;
  title: string;
  slug: string;
  quote: string;
  type: string;
  imageBanner: string;
  content: contentType[];
};
