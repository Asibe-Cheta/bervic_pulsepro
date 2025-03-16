import {PatientForm} from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

export default function Home( {searchParams}: SearchParamProps ) {
const isAdmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
       {isAdmin && <PasskeyModal />}


        <div className="sub-container max-w-[496px]">
         <div className="flex flex-row gap-2 items-center"> {/* Aligned center */}
                         <Image 
                           src="/assets/icons/pulsepro-logo.png"  
                           height={1000}
                           width={1000}
                           alt="patient"
                           className="h-10 w-auto self-center"  /* Adjusted size and alignment */
                         /> 
                         <h2 className="text-lg font-semibold">PulsePro</h2> {/* Ensure proper styling */}
                     </div>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">  
              © 2025 PulsePro by Bervic Digital 
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image 
        src="/assets/images/pulsepro-img.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
           
  );
}
