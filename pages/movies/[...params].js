import { useRouter } from "next/router";
import PageTitle from "../../components/PageTitle";

export default function Detali({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      <PageTitle title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
