import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  text: string;
  path: string;
}

export const ActiveLink: FC<Props> = ({ text, path }) => {
  const { asPath } = useRouter();

  return (
    <Link href={path}>
      <a style={asPath === path ? style : undefined}>{text}</a>
    </Link>
  );
};
