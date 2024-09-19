"use client";
// import HeavyComponent from "./components/ProductCard/HeavyComponent";
// import dynamic from "next/dynamic";
// import _ from "lodash";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  // const session = await getServerSession(authOptions);
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <main>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorterUsers = _.orderBy(users, ["name"]);
          console.log(sorterUsers);
        }}
      >
        Show
      </button>
      {/* <button onClick={() => setIsVisible(true)}>Show</button> */}
      {/* {isVisible && <HeavyComponent />} */}
      {/* <Link href="/users">Users</Link>
      <ProductCard /> */}
    </main>
  );
}
// export const metadata: Metadata = {
//   title: "...",
//   description: "...",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product.title",
//     description: "...",
//   };
// }
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product.title",
//     description: "...",
//   };
// }

// import Image from "next/image";
// import Logo from "@/public/images/eLeave.png";

// export default async function Home() {
//   return (
//     <main className="relative h-screen">
//       <Image
//         src="https://bit.ly/react-cover"
//         alt="logo"
//         fill
//         className="object-cover"
//         sizes="(max-width: 480px )100vw, (max-width:768px) 50vw, 33vw"
//         quality={100}
//         priority
//       />
//     </main>
//   );
// }
