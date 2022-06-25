export default function Index() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="body"
          />
          <div>
            <h1 className="text-5xl font-bold">Colink</h1>
            <p className="py-6">
              A simple service to devote Link and Corpolate to your groups.
              <br />
              Going to serve Chat, Forum, &quot;@ You&quot;!
            </p>
            <div className="flex">
              <button className="btn btn-primary">Login</button>
              <p className="divider divider-horizontal" />
              <button className="btn bgn-secondary">or Signup</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
