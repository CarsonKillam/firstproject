import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      Carson
      <Image
        src="/dog.jpeg"
        width={1920}
        height={1080}
        alt="Dog"
      />
    </div>
  );
}
