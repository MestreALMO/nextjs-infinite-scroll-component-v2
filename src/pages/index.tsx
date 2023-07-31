import { InfiniteScrollComponent } from "./components/InfiniteScroll";

export default function Home(props: any) {
  console.log(props.data);

  return (
    <>
      <h1>nextjs-infinite-scroll-component</h1>
      <hr />
      <div>
        <InfiniteScrollComponent data={props.data} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30").then(
    (response) => response.json()
  );
  return {
    props: { data },
  };
};
