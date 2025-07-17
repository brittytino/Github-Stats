import { useMemo } from "react";

export type Stats = {
  theme?: string;
  username?: string;
  countPrivate?: string;
  hideBorder?: string;
};

export const useGithubStats = (data: Stats) => {
  const { theme, username, countPrivate, hideBorder } = data;

  return useMemo(() => {
    const stats = `https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true&hide_border=${hideBorder}&count_private=${countPrivate}`;
    const topLanguages = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&show_icons=true&hide_border=${hideBorder}&layout=compact`;
    const streak = `https://streak-stats.demolab.com?user=${username}&theme=${theme}&hide_border=${hideBorder}`;

    return { stats, topLanguages, streak };
  }, [username, theme, hideBorder, countPrivate]);
};
