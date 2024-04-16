type PlanFeature = {
  include: string[];
  notInclude: string[];
};

export type PlanType = {
  id: string;
  name: string;
  desc: string;
  price: number;
  currency: string;
  isMostPop: boolean;
  slug: string;
  features: PlanFeature;
};
