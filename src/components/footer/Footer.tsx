import './footer.scss';
import Brand from './brand/brand';
import Links from './links/links';
import Contact from './contact/contact';

export const dynamic = 'force-dynamic';
// const getData = async (): Promise<T> => {
//   const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const data = await fetch(`${apiUrl}/api/footer`, { method: 'GET', cache: 'no-cache' });

//   return data.json();
// }

export default async function Footer() {

  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${apiUrl}/api/footer`, { method: 'GET', cache: 'no-cache' })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // do something with data
  })
  .catch(rejected => {
      console.log(rejected);
  });
  // const data = await getData();

  return (
    <footer>
      <Links/>
      <Contact/>
      <Brand/>
    </footer>
  );
};