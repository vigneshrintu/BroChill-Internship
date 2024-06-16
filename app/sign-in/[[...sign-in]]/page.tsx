import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center bg-black mt-10"><SignIn /></div>
    
  );
}