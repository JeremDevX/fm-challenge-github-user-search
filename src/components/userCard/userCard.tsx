import styles from "./userCard.module.scss";
import { icons } from "@/utils/icons";
import SVGIcon from "../svgIcon/svgIcon";
import Image from "next/image";
import Link from "next/link";

export interface UserCardProps {
  user: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    created_at: Date;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    blog: string;
    twitter_username: string;
    company: string;
  };
}

export default function UserCard({ user }: UserCardProps) {
  const createdAt = new Date(user.created_at);
  const formattedDate = `${createdAt.getDate()} ${createdAt.toLocaleString(
    "en-EN",
    {
      month: "short",
    }
  )} ${createdAt.getFullYear()}`;

  const formattedBlog = user.blog?.match(
    /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/
  )?.[1];

  const footerItems = [
    {
      icon: icons.location,
      value: user.location || "Not available",
    },
    {
      icon: icons.website,
      value: user.blog ? (
        <Link href={user.blog} target="_blank" rel="noopener noreferrer">
          {formattedBlog}
        </Link>
      ) : (
        "Not available"
      ),
    },
    {
      icon: icons.twitter,
      value: user.twitter_username
        ? `@${user.twitter_username}`
        : "Not available",
    },
    {
      icon: icons.company,
      value: user.company || "Not available",
    },
  ];

  return (
    <section className={styles.userCard}>
      <div className={styles.userCard__header}>
        {user.avatar_url ? (
          <Image
            src={user.avatar_url}
            alt={user.name || user.login}
            width={100}
            height={100}
            className={styles.userCard__header_avatar}
            priority
          />
        ) : (
          <div
            className={styles.userCard__header_avatar}
            style={{ backgroundClip: "green" }}
          ></div>
        )}
        <div className={styles.userCard__header_info}>
          <h2 className={styles.userCard__header_devName}>
            {user.name || user.login}
          </h2>
          <h3 className={styles.userCard__header_devAt}>@{user.login}</h3>
          <p className={styles.userCard__header_joined}>
            Joined {formattedDate}
          </p>
        </div>
      </div>
      <div className={styles.userCard__body}>
        <p className={styles.userCard__body_bio}>
          {user.bio || "This profile has no bio"}
        </p>
        <div className={styles.userCard__body_stats}>
          <div className={styles.userCard__statsWrapper}>
            <h4 className={styles.userCard__statsWrapper_heading}>Repos</h4>
            <p className={styles.userCard__statsWrapper_number}>
              {user.public_repos}
            </p>
          </div>
          <div className={styles.userCard__statsWrapper}>
            <h4 className={styles.userCard__statsWrapper_heading}>Followers</h4>
            <p className={styles.userCard__statsWrapper_number}>
              {user.followers}
            </p>
          </div>
          <div className={styles.userCard__statsWrapper}>
            <h4 className={styles.userCard__statsWrapper_heading}>Following</h4>
            <p className={styles.userCard__statsWrapper_number}>
              {user.following}
            </p>
          </div>
        </div>
      </div>
      <ul className={styles.userCard__footer}>
        {footerItems.map((item, index) => (
          <li
            key={index}
            className={styles.userCard__footer_item}
            style={item.value === "Not available" ? { opacity: "0.5" } : {}}
          >
            <SVGIcon
              paths={item.icon.paths}
              fill={item.icon.fill}
              width={item.icon.width}
              height={item.icon.height}
            />
            {item.value}
          </li>
        ))}
      </ul>
    </section>
  );
}
