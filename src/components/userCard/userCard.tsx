import styles from "./userCard.module.scss";
import { icons } from "@/utils/icons";
import SVGIcon from "../svgIcon/svgIcon";

export default function UserCard() {
  return (
    <section className={styles.userCard}>
      <div className={styles.userCard__header}>
        <div className={styles.userCard__header_avatar}></div>
        <div className={styles.userCard__header_info}>
          <h2 className={styles.userCard__header_devName}>DevName</h2>
          <h3 className={styles.userCard__header_devAt}>@devAt</h3>
          <p className={styles.userCard__header_joined}>Joined 25 Jan 2011</p>
        </div>
      </div>
      <div className={styles.userCard__body}>
        <p className={styles.userCard__body_bio}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div className={styles.userCard__body_stats}>
          <div className={styles.userCard__statsWrapper}>
            <h4 className={styles.userCard__statsWrapper_heading}>Repos</h4>
            <p className={styles.userCard__statsWrapper_number}>8</p>
          </div>
          <div className={styles.userCard__statsWrapper}>
            <h4 className={styles.userCard__statsWrapper_heading}>Followers</h4>
            <p className={styles.userCard__statsWrapper_number}>8888</p>
          </div>
          <div className={styles.userCard__statsWrapper}>
            <h4 className={styles.userCard__statsWrapper_heading}>Following</h4>
            <p className={styles.userCard__statsWrapper_number}>9</p>
          </div>
        </div>
      </div>
      <ul className={styles.userCard__footer}>
        <li className={styles.userCard__footer_item}>
          <SVGIcon
            paths={icons.location.paths}
            fill={icons.location.fill}
            width={icons.location.width}
            height={icons.location.height}
          />
          Location
        </li>
        <li className={styles.userCard__footer_item}>
          <SVGIcon
            paths={icons.website.paths}
            fill={icons.website.fill}
            width={icons.website.width}
            height={icons.website.height}
          />
          Website
        </li>
        <li className={styles.userCard__footer_item}>
          <SVGIcon
            paths={icons.twitter.paths}
            fill={icons.twitter.fill}
            width={icons.twitter.width}
            height={icons.twitter.height}
          />
          Twitter
        </li>
        <li className={styles.userCard__footer_item}>
          <SVGIcon
            paths={icons.company.paths}
            fill={icons.company.fill}
            width={icons.company.width}
            height={icons.company.height}
          />
          Company
        </li>
      </ul>
    </section>
  );
}
