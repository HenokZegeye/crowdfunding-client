export interface Campaign {
  id: number;
  campaign_title: string;
  campaign_tagline: string;
  campaign_type: string;
  campaign_category: string;
  region: string;
  city: string;
  campaign_fundGoal: number;
  campaign_endingDate: string;
  campaign_story: string;
  campaign_coverPicture: string;
}

export const EMPTY_CAMPAIGN = {
  id: null,
  campaign_title: '',
  campaign_tagline: '',
  campaign_type: '',
  campaign_category: '',
  region: '',
  city: '',
  campaign_fundGoal: null,
  campaign_endingDate: '',
  campaign_story: '',
  campaign_coverPicture: ''
};
