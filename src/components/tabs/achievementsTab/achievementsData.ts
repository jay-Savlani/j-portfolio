import AWS_DEVELOPER_LOGO from "../../../assets/aws_certified.png";
import UPGRAD_LOGO from "../../../assets/upgrad_logo.svg";

export type T_AchievementsData = {
  achievement: string;
  imgSrc: string;
  certificateLink: string;
};

export const achievementsData: T_AchievementsData[] = [
  {
    achievement: "AWS Developer Associate",
    imgSrc: AWS_DEVELOPER_LOGO,
    certificateLink:
      "https://www.credly.com/badges/d0b077a7-ebfa-4148-8047-4cd0d3392e2c/public_url",
  },
  {
    achievement:
      "Post Graduate Certification in Software Engineering (MERN Stack Technologies)",
    imgSrc: UPGRAD_LOGO,
    certificateLink:
      "https://www.credential.net/0cdad21b-c05e-4e42-aa8c-87ecee3fb8b8#gs.8v2nkl",
  },
];
