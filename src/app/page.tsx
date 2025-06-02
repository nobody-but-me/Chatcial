import Image from "next/image";


function Message() {
    return (
	<center className="w-1/2 p-5 rounded-lg flex flex-col gap-2">
	    <p className="w-full text-left">
	      Test
	    </p>
	</center>
    );
}

export default function Home() {
  return (
      <>
	<main className="p-5 flex flex-col gap-2">
	  <div className="w-full h-120 pt-15 flex justify-start items-center flex-col gap-3 overflow-y-visible overflow-x-hidden">
	    <Message />
	  </div>
	  <center className="p-5 w-1/2 flex flex-row gap-4 rounded-lg absolute top-5/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <input name="message-input" placeholder="Message" className="p-3 w-full border-1 border-white rounded-lg" />
	  </center>
	</main>
      </>
  );
}
