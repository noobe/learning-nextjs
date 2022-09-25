import { useRouter } from 'next/router';

export default function dynamic(){
  const router = useRouter();
  const { name } = router.query;
  return <h1>Hello {name}!!</h1>
}