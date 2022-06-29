import Link from "next/link";
import { LoginCheck } from "../lib/supabaseFunc";
import { IoBan } from "react-icons/io5";

export default function Forbitten() {
  return (
    <>
      <p className="text-red-800 text-5xl flex justify-center gap-2">
        <IoBan /> Forbitten
      </p>
      <div className="divider" />
      <h1 className="font-bold text-2xl">
        開発中のため、現在の権限ではアクセスできません!
      </h1>
      <p className="text-md">
        不安定、または改良が高頻度で行われているため、アクセスできるユーザーを制限しています。
        <br />
        もしBeta版使用可能ユーザーの場合、
        <Link href="/account/login" passHref>
          <span className="link">ログイン</span>
        </Link>
        するとページを表示することができます。
      </p>
    </>
  );
}
