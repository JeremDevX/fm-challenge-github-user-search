import styles from "./page.module.scss";
import SearchBar from "@/components/searchBar/searchBar";
import UserCard from "@/components/userCard/userCard";

export default function Page() {
  return (
    <main className={styles.githubSearch}>
      <SearchBar />
      <UserCard />
    </main>
  );
}
