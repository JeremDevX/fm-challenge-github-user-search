"use client";

import styles from "./page.module.scss";
import SearchBar from "@/components/searchBar/searchBar";
import UserCard, { UserCardProps } from "@/components/userCard/userCard";
import { useState } from "react";

export default function Page() {
  const [userData, setUserData] = useState<UserCardProps["user"]>({
    avatar_url: "",
    name: "",
    login: "",
    bio: "",
    created_at: new Date(),
    public_repos: 0,
    followers: 0,
    following: 0,
    location: "",
    blog: "",
    twitter_username: "",
    company: "",
  });

  return (
    <main className={styles.githubSearch}>
      <SearchBar onSearchResults={setUserData} />
      <UserCard user={userData} />
    </main>
  );
}
