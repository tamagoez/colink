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
            <p className="py-6">To devote Link and Corpolate.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
