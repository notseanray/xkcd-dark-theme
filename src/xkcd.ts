interface Comic {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

const LATEST = "https://xkcd.vercel.app/?comic=latest";
const SPECIFIC = "https://xkcd.vercel.app/?comic=NUMBER";

export const latest_xkcd = async () => {
  const data = await fetch(LATEST).then((res) => res.json());
  return data as Comic;
};

export const specific_xkcd = async (value: number) => {
  const data = await fetch(SPECIFIC.replace("NUMBER", value.toString())).then((res) => res.json());
  return data as Comic;
};
