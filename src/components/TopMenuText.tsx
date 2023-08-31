import styles from "./topmenu.module.css";
import Link from "next/link";

interface propsType {
  link: string;
  text: string;
}

export default function TopMenuText(props: propsType) {
  const { link, text } = props;
  return (
    <Link
      href={link}
      className="w-[120px] text-center my-auto font-vernada text-gray-500 text-sm"
    >
      {text}
    </Link>
  );
}
