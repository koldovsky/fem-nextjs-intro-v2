function getData(params) {
  return `**${JSON.stringify(params)}**`;
}

export default async function BlogPost({params}) {
  const data = getData(params);
  return <div>Post {data} </div>;
}
