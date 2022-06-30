import Link from "next/link";
import Meta from "../lib/Meta";

export default function Dashboard() {
  return (
    <>
      <Meta title="Dashboard" description="Dashboard of Colink App." />
      <div className="card w-96 bg-base-100 shadow-xl hover:brightness-90">
        <Link href="/atmarkyou/" passHref>
          <a>
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                @ You
                <div className="badge badge-secondary">BETA</div>
              </h2>
              <p>Discuss, question, and even poll!</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">SNS</div>
                <div className="badge badge-outline">Link</div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
