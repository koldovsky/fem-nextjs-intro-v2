const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function getData(params: any) {
  // Simulate a slow API call
  await delay(1000);
  return `**${JSON.stringify(params)}**`;
}

export default async function BlogPost({ params }: { params: any }) {
  
  const { slug } = params;
  const data = await getData(params);
  throw new Error("oops");
  return (
    <>
      <div>Post {data}</div>
    </>
  );
}
